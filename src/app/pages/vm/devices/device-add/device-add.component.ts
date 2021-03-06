import {Location} from '@angular/common';
import {
  ApplicationRef,
  Component,
  ContentChildren,
  Injector,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {
  FieldConfig
} from '../../../common/entity/entity-form/models/field-config.interface';
import * as _ from 'lodash';
import {Subscription} from 'rxjs';
import {EntityFormService} from '../../../../pages/common/entity/entity-form/services/entity-form.service';
import { TranslateService } from '@ngx-translate/core';

import {RestService, WebSocketService} from '../../../../services/';
import {EntityUtils} from '../../../common/entity/utils';
import {EntityTemplateDirective} from '../../../common/entity/entity-template.directive';

@Component({
  selector : 'device-add',
    template : `<entity-form [conf]="this"></entity-form>`
})
export class DeviceAddComponent implements OnInit {

  @Input('conf') conf: any;
  protected resource_name = 'vm/device';
  public formGroup: FormGroup;
  public fieldConfig: FieldConfig[];
  public error: string;
  public data: Object = {};
  public vmid: any;
  protected route_cancel: string[];
  protected route_success: string[];
  public hasCon = true;
  public success = false;
  public custActions: Array < any >

  templateTop: TemplateRef<any>;
  @ContentChildren(EntityTemplateDirective)
  templates: QueryList<EntityTemplateDirective>;

  @ViewChildren('component') components;

  public busy: Subscription;

  constructor(protected router: Router, protected rest: RestService,
              protected ws: WebSocketService, protected entityFormService: EntityFormService,
              protected _injector: Injector, protected _appRef: ApplicationRef,
              private location: Location,
              public translate: TranslateService) {}

  ngOnInit() {
    this.fieldConfig = this.conf.fieldConfig;
    this.conf.preInit(this);
  }

  afterInit(entityEdit: any) {
    this.formGroup = entityEdit.formGroup;
    this.conf.afterInit(entityEdit);
  }

  goBack() { this.location.back(); }
  
  isShow(id: any): any {
    if (this.conf.isBasicMode) {
      if (this.conf.advanced_field.indexOf(id) > -1) {
        return false;
      }
    }
    return true;
  }

  customSubmit(event: Event) {
    this.ws.call('vm.query', [[[ "name", "=", this.conf.vm ]]]).subscribe((res) => {
      const formvalue = _.cloneDeep(this.formGroup.value);
      this.route_success = [ 'vm', this.vmid, 'devices', this.conf.vm ];
      this.route_cancel = [ 'vm', this.vmid, 'devices', this.conf.vm ];
      this.error = null;
      const payload = {};
      const devices = [];
      if (this.conf.dtype === 'NIC') {
        devices.push({
          "dtype" : 'NIC',
          "attributes" :
              { "type" : formvalue.NIC_type, "mac" : formvalue.NIC_mac, "nic_attach": formvalue.nic_attach }
        })
      }
      if (this.conf.dtype === 'VNC') {
        devices.push({
          "dtype" : 'VNC',
          "attributes" : {
            "wait" : formvalue.VNC_wait,
            "vnc_port" : formvalue.VNC_port,
            "vnc_resolution" : formvalue.VNC_resolution,
            "vnc_bind": formvalue.vnc_bind,
            "vnc_password": formvalue.vnc_password,
            "vnc_web": formvalue.vnc_web,
          }
        })
      }
      if (this.conf.dtype === 'DISK') {
        formvalue.DISK_zvol = "/dev/zvol" + formvalue.DISK_zvol.substr(4)
        devices.push({
          "dtype" : 'DISK',
          "attributes" :
              { "type" : formvalue.DISK_mode, "path" : formvalue.DISK_zvol, "sectorsize":formvalue.sectorsize }
        })
      }
      if (this.conf.dtype === 'CDROM') {
        devices.push({
          "dtype" : 'CDROM',
          "attributes" : {"path" : formvalue['path']}
        })
      }
      if (this.conf.dtype === 'RAW') {
        devices.push({
          "dtype" : 'RAW',
          "attributes" :
              {
                "type" : formvalue.RAW_mode, "path" : formvalue.RAW_path,
                "sectorsize":formvalue.RAW_sectorsize
              }
        })
      }

      payload['devices'] = devices;
      this.busy =
          this.ws.call('vm.create_device', [ this.conf.pk, payload ])
              .subscribe(
                  (res1) => {
                    this.router.navigate(
                        new Array('').concat(this.conf.route_success));
                  },
                  (res1) => { new EntityUtils().handleError(this, res1); });
    });
  }
}

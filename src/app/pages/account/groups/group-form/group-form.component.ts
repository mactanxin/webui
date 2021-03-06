import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import {Validators} from '@angular/forms';
import { T } from '../../../../translate-marker';

import { RestService, WebSocketService } from '../../../../services/';
import { FieldConfig } from '../../../common/entity/entity-form/models/field-config.interface';
import {  DialogService } from '../../../../services/';

@Component({
  selector: 'app-group-form',
  template: `<entity-form [conf]="this"></entity-form>`
})
export class GroupFormComponent {

  protected route_success: string[] = ['account', 'groups'];
  protected resource_name: string = 'account/groups/';
  protected isEntity: boolean = true;

  protected fieldConfig: FieldConfig[] = [{
      type: 'input',
      name: 'bsdgrp_gid',
      placeholder: T('GID'),
      tooltip: T('The Group ID (GID) is a unique number used to identify\
 a Unix group. By convention, groups with user accounts\
 have IDs above 1000, and groups used by a service have\
 an ID number that matches the default port number used by the service.\
 For example, the sshd group has an ID of 22.'),
      validation : [ Validators.required ],
      required: true,
    },
    {
      type: 'input',
      name: 'bsdgrp_group',
      placeholder: T('Name'),
      tooltip: T('Entering a name is required'),
      validation : [ Validators.required ],
      required: true
    },
    {
      type: 'checkbox',
      name: 'bsdgrp_sudo',
      placeholder: T('Permit Sudo'),
      tooltip: T('Allows group members to use\
 <a href="https://www.freebsd.org/cgi/man.cgi?query=sudo&manpath=FreeBSD+11.1-RELEASE+and+Ports" target="_blank">sudo</a>.\
 While using <b>sudo</b>, a user is prompted for their own password.'),
    },
    {
      type: 'checkbox',
      name: 'allow',
      placeholder: T('Allow repeated GIDs'),
      tooltip: T('Allows multiple groups to share the same group ID.'),
      disabled: false
    },
  ];
  public users: any[];
  private bsdgrp_gid: any;
  private allow: any;

  constructor(protected router: Router, protected rest: RestService,
    protected ws: WebSocketService, private dialog:DialogService) {}
  preInit(entityForm: any) {
  }
  afterInit(entityForm: any) {
    this.rest.get('account/users/', { limit: 0 }).subscribe((res) => {
      this.users = res.data;
    });

    this.rest.get(this.resource_name, { limit: 0 }).subscribe((res) => {
      let gid = 999;
      this.bsdgrp_gid = _.find(this.fieldConfig, { name: "bsdgrp_gid" });
      res.data.forEach((item, i) => {
        if (item.bsdgrp_gid > gid)
          gid = item.bsdgrp_gid;
      });
      if (!entityForm.isNew) {
        entityForm.setDisabled('bsdgrp_gid', true);
        entityForm.setDisabled('allow', true);
      } else {
        this.ws.call('group.get_next_gid').subscribe((res)=>{
          entityForm.formGroup.controls['bsdgrp_gid'].setValue(res);
        })
      }
    });
  }
  errorReport(res) {
    this.dialog.errorReport(res.code, res.error.error_message, res.error.traceback);
  }
}

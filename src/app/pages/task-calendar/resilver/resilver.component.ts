import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { FieldConfig } from '../../common/entity/entity-form/models/field-config.interface';
import { TaskService } from '../../../services/';
import { FormGroup } from '@angular/forms';
import { T } from '../../../translate-marker';

@Component({
  selector: 'resilver-priority',
  template: `<entity-form [conf]="this"></entity-form>`,
  providers: [TaskService]
})
export class ResilverComponent {

  protected resource_name: string = 'storage/resilver';

  public fieldConfig: FieldConfig[] = [{
    type: 'checkbox',
    name: 'enabled',
    placeholder: T('Enable'),
    value: true,
  }, {
    type: 'select',
    name: 'begin',
    placeholder: T('Begin'),
    options: [],
    value: '',
  }, {
    type: 'select',
    name: 'end',
    placeholder: T('End'),
    options: [],
    value: '',
  }, {
    type: 'select',
    name: 'weekday',
    placeholder: T('Day of week'),
    multiple: true,
    options: [{
      label: 'Monday',
      value: '1',
    }, {
      label: 'Tuesday',
      value: '2',
    }, {
      label: 'Wednesday',
      value: '3',
    }, {
      label: 'Thursday',
      value: '4',
    }, {
      label: 'Friday',
      value: '5',
    }, {
      label: 'Saturday',
      value: '6',
    }, {
      label: 'Sunday',
      value: '7',
    }],
    value: ['1', '2', '3', '4', '5', '6', '7'],
  }];

  protected begin_field: any;
  protected end_field: any;

  constructor(protected router: Router, protected taskService: TaskService) {
    this.begin_field = _.find(this.fieldConfig, { 'name': 'begin' });
    this.end_field = _.find(this.fieldConfig, { 'name': 'end' });
    let time_options = this.taskService.getTimeOptions();
    for (let i = 0; i < time_options.length; i++) {
      this.begin_field.options.push({ label: time_options[i].label, value: time_options[i].value });
      this.end_field.options.push({ label: time_options[i].label, value: time_options[i].value });
    }
  }

}

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {GeneralComponent} from './general/';

import { GeneralComponent } from './general/general.component';
import { ConfigSaveComponent } from './general/config-save/config-save.component';
import { ConfigUploadComponent } from './general/config-upload/config-upload.component';
import { ConfigResetComponent } from './general/config-reset/config-reset.component';
import { AdvancedComponent } from './advanced/';
import { DatasetComponent } from './dataset/';
import { BootEnvironmentCloneComponent } from './bootenv/bootenv-clone/';
import { BootEnvironmentRenameComponent } from './bootenv/bootenv-rename/';
import { BootEnvironmentCreateComponent } from './bootenv/bootenv-create';
import { BootStatusListComponent } from './bootenv/bootenv-status/';
import { BootEnvironmentListComponent } from './bootenv/bootenv-list/';
import { BootEnvAttachFormComponent } from './bootenv/bootenv-attach';
import { BootEnvReplaceFormComponent } from './bootenv/bootenv-replace';
import { TunableFormComponent } from './tunable/tunable-form/';
import { TunableListComponent } from './tunable/tunable-list/';
import { UpdateComponent } from './update/';
import { NTPServerAddComponent } from './ntpservers/ntpserver-add/';
import { NTPServerEditComponent } from './ntpservers/ntpserver-edit/';
import { NTPServerListComponent } from './ntpservers/ntpserver-list/';
import { AlertServiceListComponent } from './alertservice/alertservice-list/';
import { CloudCredentialsGCSComponent } from './CloudCredentials/CloudCredentials-gcs/';
import { CloudCredentialsB2Component } from './CloudCredentials/CloudCredentials-B2/';
import { CloudCredentialsAmazonComponent } from './CloudCredentials/CloudCredentials-amazon/';
import { CloudCredentialsAzureComponent } from './CloudCredentials/CloudCredentials-azure/';
import { CloudCredentialsListComponent } from './CloudCredentials/CloudCredentials-list/';
import { CloudCredentialsDeleteComponent } from './CloudCredentials/CloudCredentials-delete/';
import { CertificateAuthorityImportComponent } from './ca/ca-import/';
import { CertificateAuthorityIntermediateComponent } from './ca/ca-intermediate/';
import { CertificateAuthorityInternalComponent } from './ca/ca-internal/';
import { CertificateAuthorityListComponent } from './ca/ca-list/';
import { CAFormComponent } from './ca/ca-form/';
import { CertificateCSRComponent } from './certificates/certificate-csr/';
import { CertificateEditComponent } from './certificates/certificate-edit/';
import { CertificateImportComponent } from './certificates/certificate-import/';
import { CertificateInternalComponent } from './certificates/certificate-internal/';
import { CertificateListComponent } from './certificates/certificate-list';
import { SupportComponent } from './support/support.component';
import { AlertServiceEditAWSComponent } from 'app/pages/system/alertservice/alertservice-edit-aws/alertservice-edit-aws.component';
import { AlertServiceAddAWSComponent } from 'app/pages/system/alertservice/alertservice-add-aws/alertservice-add-aws.component';
import { AlertServiceAddHipchatComponent } from 'app/pages/system/alertservice/alertservice-add-hipchat/alertservice-add-hipchat.component';
import { AlertServiceEditHipchatComponent } from 'app/pages/system/alertservice/alertservice-edit-hipchat/alertservice-edit-hipchat.component';
import { AlertServiceAddInfluxdbComponent } from 'app/pages/system/alertservice/alertservice-add-influxdb/alertservice-add-influxdb.component';
import { AlertServiceEditInfluxdbComponent } from 'app/pages/system/alertservice/alertservice-edit-influxdb/alertservice-edit-influxdb.component';
import { AlertServiceAddMattermostComponent } from 'app/pages/system/alertservice/alertservice-add-mattermost';
import { AlertServiceEditMattermostComponent } from 'app/pages/system/alertservice/alertservice-edit-mattermost';
import { AlertServiceEditVictoropsComponent } from 'app/pages/system/alertservice/alertservice-edit-victorops';
import { AlertServiceAddVictoropsComponent } from 'app/pages/system/alertservice/alertservice-add-victorops';
import { AlertServiceEditSlackComponent } from 'app/pages/system/alertservice/alertservice-edit-slack';
import { AlertServiceAddSlackComponent } from 'app/pages/system/alertservice/alertservice-add-slack';
import { AlertServiceEditPagerdutyComponent } from 'app/pages/system/alertservice/alertservice-edit-pagerduty';
import { AlertServiceAddPagerdutyComponent } from 'app/pages/system/alertservice/alertservice-add-pagerduty';
import { AlertServiceEditOpsgenieComponent } from 'app/pages/system/alertservice/alertservice-edit-opsgenie';
import { AlertServiceAddOpsgenieComponent } from 'app/pages/system/alertservice/alertservice-add-opsgenie';
import {EmailComponent} from './email/';

export const routes: Routes = [
  // {path : '', component : GeneralComponent },
  // {path : '', component : AdvancedComponent }
  {
    path: '',
    data: { title: 'System' },
    children: [{
      path: 'general',
      data: { title: 'General', breadcrumb: 'General' },
      children: [{
        path: '',
        component: GeneralComponent,
        data: { title: 'General', breadcrumb: 'General' },
      }, {
        path: 'config-save',
        component: ConfigSaveComponent,
        data: { title: 'Config Save', breadcrumb: 'Config Save' },
      }, {
        path: 'config-upload',
        component: ConfigUploadComponent,
        data: { title: 'Config Upload', breadcrumb: 'Config Upload' },
      }, {
        path: 'config-reset',
        component: ConfigResetComponent,
        data: { title: 'Config Reset', breadcrumb: 'Config Reset' },
      }]
    }, {
      path: 'advanced',
      component: AdvancedComponent,
      data: { title: 'Advanced', breadcrumb: 'Advanced' },
    },{
      path: 'dataset',
      component: DatasetComponent,
      data: { title: 'Dataset', breadcrumb: 'Dataset' },
    }, {
      path: 'bootenv',
      data: { title: 'Boot Environments', breadcrumb: 'Boot Environments' },
      children: [{
        path: '',
        component: BootEnvironmentListComponent,
        data: { title: 'Boot Environments', breadcrumb: 'Boot Environments' },
      }, {
        path: 'clone/:pk',
        component: BootEnvironmentCloneComponent,
        data: { title: 'Clone', breadcrumb: 'Clone' },
      },
      {
        path: 'rename/:pk',
        component: BootEnvironmentRenameComponent,
        data: { title: 'Rename', breadcrumb: 'Rename' },
      },
      {
        path: 'create',
        component: BootEnvironmentCreateComponent,
        data: { title: 'Create', breadcrumb: 'Create' },
      },
      {
        path: 'status',
        component: BootStatusListComponent,
        data: { title: 'Status', breadcrumb: 'Status' },
      },
      {
        path: 'attach/:pk',
        component: BootEnvAttachFormComponent,
        data: { title: 'Attach', breadcrumb: 'Attach' },
      },
      {
        path: 'replace/:pk',
        component: BootEnvReplaceFormComponent,
        data: { title: 'Replace', breadcrumb: 'Replace' },
      }
    ]
    }, {
      path: 'tunable',
      data: { title: 'Tunable', breadcrumb: 'Tunable' },
      children: [{
          path: '',
          component: TunableListComponent,
          data: { title: 'Tunable', breadcrumb: 'Tunable' },
        }, {
          path: 'add',
          component: TunableFormComponent,
          data: { title: 'Add', breadcrumb: 'Add' },
        },
        {
          path: 'edit/:pk',
          component: TunableFormComponent,
          data: { title: 'Edit', breadcrumb: 'Edit' },
        }
      ]
    }, {
      path: 'update',
      component: UpdateComponent,
      data: { title: 'Update', breadcrumb: 'Update' },
    }, {
      path: 'ntpservers',
      data: { title: 'NTP Servers', breadcrumb: 'NTP Servers' },
      children: [{
          path: '',
          component: NTPServerListComponent,
          data: { title: 'NTP Servers', breadcrumb: 'NTP Servers' },
        }, {
          path: 'add',
          component: NTPServerAddComponent,
          data: { title: 'Add', breadcrumb: 'Add' },
        },
        {
          path: 'edit/:pk',
          component: NTPServerEditComponent,
          data: { title: 'Edit', breadcrumb: 'Edit' },
        }
      ]
    }, 
    {
      path : 'email', 
      component : EmailComponent,
      data: { title: 'Email', breadcrumb: 'Email' },
    },
    {
      path: 'alertservice',
      data: { title: 'Alert Services', breadcrumb: 'Alert Services' },
      children: [{
          path: '',
          component: AlertServiceListComponent,
          data: { title: 'Alert Services', breadcrumb: 'Alert Services' },
        }, {
          path: 'add-aws',
          component: AlertServiceAddAWSComponent,
          data: { title: 'Add AWS', breadcrumb: 'Add AWS' },
        },{
          path: 'edit-aws/:pk',
          component: AlertServiceEditAWSComponent,
          data: { title: 'Edit AWS', breadcrumb: 'Edit AWS' },
        },{
          path: 'add-hipchat',
          component: AlertServiceAddHipchatComponent,
          data: { title: 'Add Hipchat', breadcrumb: 'Add Hipchat' },
        },{
          path: 'edit-hipchat/:pk',
          component: AlertServiceEditHipchatComponent,
          data: { title: 'Edit Hipchat', breadcrumb: 'Edit Hipchat' },
        },{
          path: 'add-influxdb',
          component: AlertServiceAddInfluxdbComponent,
          data: { title: 'Add InfluxDB', breadcrumb: 'Add InfluxDB' },
        },{
          path: 'edit-influxdb/:pk',
          component: AlertServiceEditInfluxdbComponent,
          data: { title: 'Edit InfluxDB', breadcrumb: 'Edit InfluxDB' },
        },{
          path: 'add-mattermost',
          component: AlertServiceAddMattermostComponent,
          data: { title: 'Add Mattermost', breadcrumb: 'Add Mattermost' },
        },{
          path: 'edit-mattermost/:pk',
          component: AlertServiceEditMattermostComponent,
          data: { title: 'Edit Mattermost', breadcrumb: 'Edit Mattermost' },
        },{
          path: 'add-opsgenie',
          component: AlertServiceAddOpsgenieComponent,
          data: { title: 'Add Mattermost', breadcrumb: 'Add OpsGenie' },
        },{
          path: 'edit-opsgenie/:pk',
          component: AlertServiceEditOpsgenieComponent,
          data: { title: 'Edit Mattermost', breadcrumb: 'Edit OpsGenie' },
        },{
          path: 'add-pagerduty',
          component: AlertServiceAddPagerdutyComponent,
          data: { title: 'Add Mattermost', breadcrumb: 'Add PagerDuty' },
        },{
          path: 'edit-pagerduty/:pk',
          component: AlertServiceEditPagerdutyComponent,
          data: { title: 'Edit Mattermost', breadcrumb: 'Edit PagerDuty' },
        },{
          path: 'add-slack',
          component: AlertServiceAddSlackComponent,
          data: { title: 'Add Slack', breadcrumb: 'Add Slack' },
        },{
          path: 'edit-slack/:pk',
          component: AlertServiceEditSlackComponent,
          data: { title: 'Edit Slack', breadcrumb: 'Edit Slack' },
        },{
          path: 'add-victorops',
          component: AlertServiceAddVictoropsComponent,
          data: { title: 'Add VictorOps', breadcrumb: 'Add VictorOps' },
        },{
          path: 'edit-victorops/:pk',
          component: AlertServiceEditVictoropsComponent,
          data: { title: 'Edit VictorOps', breadcrumb: 'Edit VictorOps' },
        }
      ]
    },{
      path: 'cloudcredentials',
      data: { title: 'CloudCredentials', breadcrumb: 'CloudCredentials' },
      children: [{
          path: '',
          component: CloudCredentialsListComponent,
          data: { title: 'CloudCredentials', breadcrumb: 'CloudCredentials' },
        },
        {
          path: 'gcs',
          component: CloudCredentialsGCSComponent,
          data: { title: 'Add GCS', breadcrumb: 'Add GCS' },
        },
        {
          path: 'gcs/:pk',
          component: CloudCredentialsGCSComponent,
          data: { title: 'Edit GCS', breadcrumb: 'Edit GCS' },
        },
        {
          path: 'amazon',
          component: CloudCredentialsAmazonComponent,
          data: { title: 'Add Amazon', breadcrumb: 'Add Amazon' },
        },
        {
          path: 'amazon/:pk',
          component: CloudCredentialsAmazonComponent,
          data: { title: 'Edit Amazon', breadcrumb: 'Edit Amazon' },
        },
        {
          path: 'azure',
          component: CloudCredentialsAzureComponent,
          data: { title: 'Add Azure', breadcrumb: 'Add Azure' },
        },
        {
          path: 'azure/:pk',
          component: CloudCredentialsAzureComponent,
          data: { title: 'Edit Azure', breadcrumb: 'Edit Azure' },
        },
        {
          path: 'b2',
          component: CloudCredentialsB2Component,
          data: { title: 'Add B2', breadcrumb: 'Add B2' },
        },
        {
          path: 'b2/:pk',
          component: CloudCredentialsB2Component,
          data: { title: 'Edit B2', breadcrumb: 'Edit B2' },
        },
        {
          path: ':pk/delete',
          component: CloudCredentialsDeleteComponent,
          data: { title: 'Delete', breadcrumb: 'Delete' },
        },
      ]
    },
    {
      path: 'ca',
      data: { title: 'Certificate Authorities', breadcrumb: 'Certificate Authorities' },
      children: [{
        path: '',
        component: CertificateAuthorityListComponent,
        data: { title: 'Certificate Authorities', breadcrumb: 'Certificate Authorities' },
      }, {
        path: 'import',
        component: CertificateAuthorityImportComponent,
        data: { title: 'Import', breadcrumb: 'Import' },
      }, {
        path: 'internal',
        component: CertificateAuthorityInternalComponent,
        data: { title: 'Internal', breadcrumb: 'Internal' },
      }, {
        path: 'intermediate',
        component: CertificateAuthorityIntermediateComponent,
        data: { title: 'Intermediate', breadcrumb: 'Intermediate' },
      }, {
        path: 'edit/:pk',
        component: CertificateEditComponent,
        data: { title: 'Edit', breadcrumb: 'Edit' },
      }]
    }, {
      path: 'certificates',
      data: { title: 'Certificates', breadcrumb: 'Certificates' },
      children: [{
        path: '',
        component: CertificateListComponent,
        data: { title: 'Certificates', breadcrumb: 'Certificates' },
      }, {
        path: 'import',
        component: CertificateImportComponent,
        data: { title: 'Import', breadcrumb: 'Import' },
      }, {
        path: 'internal',
        component: CertificateInternalComponent,
        data: { title: 'Internal', breadcrumb: 'Internal' },
      }, {
        path: 'csr',
        component: CertificateCSRComponent,
        data: { title: 'CSR', breadcrumb: 'CSR' },
      }, {
        path: 'edit/:pk',
        component: CertificateEditComponent,
        data: { title: 'Edit', breadcrumb: 'Edit' },
      }]
    }, {
      path: 'support',
      component: SupportComponent,
      data: { title: 'Support', breadcrumb: 'Support' },
    },]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

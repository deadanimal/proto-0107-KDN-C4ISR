import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { TagInputModule } from "ngx-chips";

import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";

import { ReportComponent } from "./report/report.component";
import { ProfileComponent } from "./profile/profile.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    DashboardComponent,
    ReportComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    TagInputModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class UserModule {}

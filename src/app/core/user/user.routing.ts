import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";


import { ReportComponent } from "./report/report.component";

export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
    ],
  },
];

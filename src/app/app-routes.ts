import { Homepage } from "./pages/homepage";
import { ComponentList } from "./pages/component-list";
import { GuideList } from "./pages/guide-list";
import { Routes } from "@angular/router";
import {
  ComponentApi,
  ComponentExamples,
  ComponentOverview,
  ComponentViewer
} from "./pages/component-viewer/component-viewer";
import { ComponentCategoryList } from "./pages/component-category-list/component-category-list";
import { ComponentSidenav } from "./pages/component-sidenav/component-sidenav";
import { CanActivateComponentSidenav } from "./pages/component-sidenav/component-sidenav-can-load-guard";
import { GuideViewer } from "./pages/guide-viewer/guide-viewer";
import { RouterOutletComponent } from "./shared/router-outlet/router-outlet.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/auth";
import { LogoffResolve } from "./logoff/logoff.resolve";
import { LogoffComponent } from "./logoff/logoff.component";
import { NgConf } from "./pages/ng-conf";
// import { MainLayout } from "./shared/main-layout/main-layout";

export const MATERIAL_DOCS_ROUTES: Routes = [
  {
    path: "auth",
    component: RouterOutletComponent,
    children: [
      { path: "login", component: LoginComponent },
      // { path: "logoff", resolve: LogoffResolve, redirectTo: "login" }
      {
        path: 'logoff',
        canActivate: [AuthGuard],
        resolve: { logoff: LogoffResolve },
        component: LogoffComponent
      },
    ]
  },
  // {
  //   path: "",
  //   component: MainLayout,
  //   children: [
  {
    path: "",
    canActivate: [AuthGuard],
    component: Homepage,
    pathMatch: "full",
    data: {}
  },
  {
    path: 'ng-conf',
    canActivate: [AuthGuard],
    component: NgConf
  },
  { path: "categories", redirectTo: "/components/categories" },
  {
    path: "guides",
    canActivate: [AuthGuard],
    component: GuideList,
    data: {}
  },
  // Since https://github.com/angular/material2/pull/9574, the cdk-table guide became the overview
  // document for the cdk table. To avoid any dead / broken links, we redirect to the new location.
  { path: "guide/cdk-table", redirectTo: "/cdk/table/overview" },
  { path: "guide/:id", component: GuideViewer, data: {} },
  {
    path: ":section",
    canActivate: [AuthGuard, CanActivateComponentSidenav],
    component: ComponentSidenav,
    children: [
      { path: "", redirectTo: "categories", pathMatch: "full" },
      { path: "component/:id", redirectTo: ":id", pathMatch: "full" },
      {
        path: "category/:id",
        redirectTo: "/categories/:id",
        pathMatch: "full"
      },
      {
        path: "categories",
        children: [
          { path: "", component: ComponentCategoryList },
          { path: ":id", component: ComponentList }
        ]
      },
      {
        path: ":id",
        component: ComponentViewer,
        children: [
          { path: "", redirectTo: "overview", pathMatch: "full" },
          {
            path: "overview",
            component: ComponentOverview,
            pathMatch: "full"
          },
          { path: "api", component: ComponentApi, pathMatch: "full" },
          {
            path: "examples",
            component: ComponentExamples,
            pathMatch: "full"
          },
          { path: "**", redirectTo: "overview" }
        ]
      }
    ]
  },
  //   ]
  // },
  { path: "**", redirectTo: "/auth/login" }
];

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";

const ROUTES = RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  }
])

@NgModule({
	imports: [ROUTES],
	exports: [RouterModule]
})

export class AppRoutingModule{
	
}
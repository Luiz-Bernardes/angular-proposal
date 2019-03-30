import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";

import { ProposalsComponent } from "./proposals/proposals.component";
import { ProposalDetailComponent } from "./proposals/proposal-detail/proposal-detail.component";

const ROUTES = RouterModule.forRoot([
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks',     component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'proposals/:id', component: ProposalDetailComponent },
])

@NgModule({
	imports: [ROUTES],
	exports: [RouterModule]
})

export class AppRoutingModule{
	
}
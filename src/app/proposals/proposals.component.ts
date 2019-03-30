import { Component, OnInit } from '@angular/core';

import { Proposal } from './shared/proposal.model'
import { ProposalService } from './shared/proposal.service'

@Component({
	selector: 'proposals',
	templateUrl: './proposals.component.html',
	providers: [ProposalService]
})

export class ProposalsComponent implements OnInit{
	public proposals: Array<Proposal>;
	public newProposal: Proposal;

	public constructor(private proposalService: ProposalService){
		this.newProposal = new Proposal(null,'','',null,'','','');
	}

	// public createTask(){
	// 	this.newTask.title = this.newTask.title.trim(); 

	// 	if(!this.newTask.title){
	// 		alert("A tarefa deve ter um título!");
	// 	} else {
	// 		this.taskService.create(this.newTask)
	// 			.subscribe(
	// 				(task) => {
	// 					this.tasks.push(task);
	// 					this.newTask = new Task(null, '');
	// 				},
	// 				() => alert("Ocorreu um erro no servidor, tente mais tarde!")
	// 			)
	// 	}

	// }

	// public deleteTask(task: Task){
	// 	if( confirm(`Deseja realmente excluir a tarefa "${task.title}"`)){
	// 		this.taskService.delete(task.id)
	// 			.subscribe(
	// 				() => this.tasks = this.tasks.filter(t => t !== task),
	// 				() => alert("Ocorreu um erro no servidor, tente mais tarde!")
	// 			)
	// 	}
	// }

	public ngOnInit(){
		this.proposalService.getAll()
			.subscribe(
				proposals => this.proposals = proposals, 
				error => alert("Ocorreu um erro no servidor, tente mais tarde.") 
			)	
	}

	
}
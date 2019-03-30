import { Component, OnInit } from '@angular/core';

import { Proposal } from './shared/proposal.model'
import { ProposalService } from './shared/proposal.service'

@Component({
	selector: 'proposals',
	templateUrl: './proposals.component.html',
	styleUrls: ['../app.component.scss'],
	providers: [ProposalService]
})

export class ProposalsComponent implements OnInit{
	public proposals: Array<Proposal>;
	public newProposal: Proposal;

	public constructor(private proposalService: ProposalService){
		this.newProposal = new Proposal(null,'','',null,'','','');
	}

	public createProposal(){
		if(this.validateRequiredFields()){
			this.proposalService.create(this.newProposal)
				.subscribe(
					(proposal) => {
						this.proposals.push(proposal);
						this.newProposal = new Proposal(null,'','',null,'','','');
					},
					() => alert("Ocorreu um erro no servidor, tente mais tarde!")
				)
		} else {
			alert("Os campos devem ser preenchidos!");
		}
	}

	public validateRequiredFields(){
		this.newProposal.name = this.newProposal.name.trim(); 
		this.newProposal.description = this.newProposal.description.trim(); 
		this.newProposal.city = this.newProposal.city.trim(); 

		if(!this.newProposal.name){ return false; } 
		else if (!this.newProposal.description){ return false; }
		else if (!this.newProposal.date_begin){ return false; }
		else if (!this.newProposal.date_end){ return false; }
		else if (!this.newProposal.city){ return false; }
		else { return true; }
	}

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
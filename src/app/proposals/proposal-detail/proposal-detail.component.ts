import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Proposal } from '../shared/proposal.model';
import { ProposalService } from '../shared/proposal.service';

@Component({
	selector: 'proposal-detail',
	templateUrl: './proposal-detail.component.html',
	providers: [ProposalService]
})

export class ProposalDetailComponent implements OnInit{
	public proposal: Proposal;

	public constructor(
		private proposalService: ProposalService,
		private route: ActivatedRoute,
		private location: Location
	){}

	public ngOnInit(){
		this.route.params
		 .switchMap((params: Params) => this.proposalService.getById(+params['id']))
		 .subscribe(
		 	 proposal => this.proposal = proposal,
		 	 error => alert('Ocorreu um erro no servidor, tente mais tarde!')
		 )
	}

	public updateProposal(){
		this.proposalService.update(this.proposal)
			.subscribe(
				() => alert('Proposta atualizada com sucesso!'),
				() => alert('Ocorreu um erro no servidor, tente mais tarde!')
			)
	}

	public goBack() {
		this.location.back();
	}
}


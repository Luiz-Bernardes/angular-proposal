import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService{
	
	public createDb(){
		let tasks = [
			{ id: 1, title: 'tarefa 1' },
			{ id: 2, title: 'tarefa 2' },
			{ id: 3, title: 'tarefa 3' },
			{ id: 4, title: 'tarefa 4' },
			{ id: 5, title: 'tarefa 5' },
			{ id: 6, title: 'tarefa 6' },
			{ id: 7, title: 'tarefa 7' }
		];

	  let proposals = [
			{ 
				id: 1, 
				name: 'proposta 1', 
				description: 'descrição da proposta 1', 
				value: 2.25, 
				date_begin: '01/01/2019', 
				date_end: '08/01/2019',
				city: 'Rio de Janeiro',
			},
			{ 
				id: 2, 
				name: 'proposta 2', 
				description: 'descrição da proposta 2', 
				value: 4.59, 
				date_begin: '10/02/2019', 
				date_end: '17/02/2019',
				city: 'São Paulo',
			}
	  ];

		return { tasks, proposals }
	}

}
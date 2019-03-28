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

		return { tasks }
	}

}
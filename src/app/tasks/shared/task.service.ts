import { Injectable } from '@angular/core'

import { Task } from './task.model'

const TASKS: Array<Task> = [
	{ id: 1, title: 'tarefa 1' },
	{ id: 2, title: 'tarefa 2' },
	{ id: 3, title: 'tarefa 3' },
	{ id: 4, title: 'tarefa 4' },
	{ id: 5, title: 'tarefa 5' },
	{ id: 6, title: 'tarefa 6' },
	{ id: 7, title: 'tarefa 7' }
]

@Injectable()

export class TaskService{
	
	public getTasks(): Promise<Task[]>{
		
		let promise = new Promise((resolve, reject) => {
			
			if(TASKS.length > 0){
				resolve(TASKS);
			} else {
				let error_msg = "Não há tarefas";
				reject(error_msg);
			}

		})

		return promise;
	
	}

	public getImportantTasks(): Promise<Task[]>{
		return Promise.resolve(TASKS.slice(0,3))
	}

}

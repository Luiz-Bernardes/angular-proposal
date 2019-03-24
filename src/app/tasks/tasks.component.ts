import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model'

const TASKS: Array<Task> = [
	{ id: 1, title: 'tarefa 1' },
	{ id: 2, title: 'tarefa 2' },
	{ id: 3, title: 'tarefa 3' },
	{ id: 4, title: 'tarefa 4' },
	{ id: 5, title: 'tarefa 5' },
	{ id: 6, title: 'tarefa 6' },
	{ id: 7, title: 'tarefa 7' }
]
// const TASKS: any[] = []

@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
	public tasks;

	public ngOnInit(){
		this.tasks = TASKS;
	}
}
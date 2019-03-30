import { Headers, Http, Response } from '@angular/http'

import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Proposal } from './proposal.model'

@Injectable()

export class ProposalService{
	public proposalsUrl	= "api/proposals"
	public headers = new Headers({'Content-Type': 'application/json'});

	public constructor(private http: Http){}

	public getAll(): Observable<Proposal[]>{
		return this.http.get(this.proposalsUrl)
			.catch(this.handleErrors)
			.map((response: Response) => response.json().data as Proposal[])
	}

	public getById(id: number): Observable<Proposal> {
		let url = `${this.proposalsUrl}/${id}`;

		return this.http.get(url)
			.catch(this.handleErrors)
			.map((response: Response) => response.json().data as Proposal) 
	}

	// public update(task: Task): Observable<Task> {
	// 	let url = `${this.tasksUrl}/${task.id}`; 
	// 	let body = JSON.stringify(task);

	// 	return this.http.put(url, body, { headers: this.headers })
	// 		.catch(this.handleErrors)
	// 		.map(() => task)
	// }

	public create(proposal: Proposal): Observable<Proposal>{
		let url = this.proposalsUrl;
		let body = JSON.stringify(proposal);

		return this.http.post(url, body, { headers: this.headers })
			.catch(this.handleErrors)
			.map(response => response.json().data as Proposal)
	}

	// public delete(id: number): Observable<null>{
	// 	let url = `${this.tasksUrl}/${id}`;

	// 	return this.http.delete(url, { headers: this.headers})
	// 		.catch(this.handleErrors)
	// 		.map(() => null)
	// }

	private handleErrors(error: Response){
		console.log("Salvando erros em um arquivo de log!", error);
		return Observable.throw(error);
	}


}
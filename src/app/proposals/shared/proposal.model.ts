export class Proposal {
	public id: number;
	public name: string;
	public description: string;
	public value: number;
	public date_begin: string;
	public date_end: string;
	public city: string;

	constructor(id: number, name: string, description: string, value: number, date_begin: string, date_end: string, city: string){
		this.id = id;
		this.name = name;
		this.description = description; 
		this.value = value;
		this.date_begin = date_begin;
		this.date_end = date_end;
		this.city = city;
	}
}
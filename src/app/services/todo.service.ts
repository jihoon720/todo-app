import ToDo from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

//rxjs operator for mapping observable
import { map } from 'rxjs/operators';

// Operators


@Injectable()
export class TodoService{
	//api url for todoapp
	api_url = 'http://localhost:3000';
	todoUrl = `${this.api_url}/api/todos`;

	//constructor takes in httpclient object
	constructor(private http: HttpClient){

	}

	//take ToDo object, create Todo
	createTodo(todo: ToDo): Observable<any>{
		return this.http.post(`${this.todoUrl}`, todo);
	}

	//read ToDo list
	getTodos(): Observable<ToDo[]>{
		return this.http.get(this.todoUrl).pipe(map(res =>{

			return res["data"].docs as ToDo[];

		}))
	}

	//update ToDo
	editTodo(todo : ToDo){
		let editUrl = `${this.todoUrl}`;
		return this.http.put(editUrl, todo);
	}

	//delete Todo
	deleteTodo(id : string):any{
		let deleteUrl = `${this.todoUrl}/${id}`;
		return this.http.delete(deleteUrl).pipe(map(res=>{
			return res;
		}))
	}

	//default error handling method
	private handleError(error : any): Promise<any>{
		console.error('An error occured: ', error);
		return Promise.reject(error.message || error);
	}
}
import { Injectable } from '@nestjs/common';
import { CreateTodoDTO } from './dto/CreateTodoDto';

interface Todo{
    readonly id:number;
    readonly title:string;
    readonly description: string;
    readonly isDone: boolean;
}

@Injectable()
export class TodoService {
    //create todo array
    private todos:Todo[] = [
        {
            id:1,
            title:'Test',
            description:'this is a test',
            isDone:true
        },
    ];


    async addTodo(CreateTodoDTO:CreateTodoDTO): Promise<Todo>{
        this.todos.push(CreateTodoDTO);

        // return last added
        return this.todos.at(-1);
    }


    async getTodos():Promise<Todo[]>{
        return this.todos;
    }

}


import { Controller,Res,Body,HttpStatus,Param,NotFoundException,Get,Put,Post,Delete,Query } from '@nestjs/common';
import {TodoService} from './todo.service';
import {CreateTodoDTO} from './dto/CreateTodoDto';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}


    // create todo
    @Post('/')
    async create(@Res() res,@Body() createTodoDTO: CreateTodoDTO){
        const newTodo = await this.todoService.addTodo(createTodoDTO);
        return res.status(HttpStatus.OK).json({
            message:'Todo has been submitted successfully',
            todo:newTodo,
        });
    }

    //get Todos
    @Get('/')
    async getTodos(@Res() res){
        const todos = await this.todoService.getTodos();
        return res.status(HttpStatus.OK).json(todos);
    }
}

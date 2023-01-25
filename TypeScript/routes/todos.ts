import { Router } from "express";

import { Todo } from "../models/todo";

const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
    res.status(201).json({ todos: todos })
})

router.post("/todo", (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todos.push(newTodo);

    res.status(201).json({message : "new Todo added", todos : todos, todo : newTodo})
});


router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);

    if(todoIndex >= 0){
        todos[todoIndex] = {id : todos[todoIndex].id, text : req.body.text};
        return res.status(200).json({message : "we have updated your todo" , todos : todos})
    }
    res.status(404).json({message : "Sorry! could not find the Todo"})
});


router.delete("/todo/:todoId", (req, res, next) => {
    todos = todos.filter(todoItem =>todoItem.id !== req.params.todoId);
    res.status(200).json({message : "Todo has been deleted successfully"})
})

export default router;
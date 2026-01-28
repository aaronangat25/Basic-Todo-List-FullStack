import { Router } from "express";
import pool from "../db.js";

const router = Router();

// Create a new todo
router.post("/", async (req, res) =>{
    try{
        const {description, completed} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
            [description, completed || false]
        );
        res.json(newTodo.rows[0]);
    }catch (err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

//Get all todos
router.get("/", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch (err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});

//Update a todo
router.put("/:id", async (req, res) => {  //why "/:id? because it gets the id of what you want to update like http://localhost:5000/5"
    try{
        const { id } = req.params;
        const { description, completed } = req.body
        const updatedTodo = await pool.query(
            "UPDATE todo SET description = $1, completed = $2 WHERE todo_id = $3 RETURNING *",
            [description, completed || false, id]
        );
        
        res.json({
            message: "Todo was updated!",
            todo: updatedTodo.rows[0],
        });
    }catch (err){
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});

//Delete Todo
router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params
        await pool.query(
            "DELETE FROM todo WHERE todo_id = $1 RETURNING *",
            [id]
            
        )
        res.json("Todo was deleted!");
    }catch(err){
        console.log(err.message);
        res.status(500).send("Server Error")
    }
});




export default router;
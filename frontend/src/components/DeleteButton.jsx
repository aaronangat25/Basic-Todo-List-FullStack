import axios from "axios";
import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ setTodos, todos, todo }){


    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos(todos.filter((todo) => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }   
    return(
        <button className="p-2 text-red-500 hover:text-red-700 rounded-lg
        bg-blue-50 duration-200"
                onClick={() => (deleteTodo(todo.todo_id))}
        >
            <FaTrash />
        </button>
    )
}
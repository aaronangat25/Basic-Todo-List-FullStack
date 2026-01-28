import axios from "axios";
import { MdOutlineDone } from "react-icons/md";


export default function CheckButton({ todo, todos, setTodos }){

    const toggleCompleted = async (id) => {
        try {
            const todo = todos.find((todo) => todo.todo_id === id);
            await axios.put(`http://localhost:5000/todos/${id}`,{
                description: todo.description,
                completed: !todo.completed
            });
            setTodos(todos.map((todo) => todo.todo_id === id ? {...todo,
                completed: !todo.completed} : todo))
        } catch (error) {
            console.error(err.message);
        }
    }

    return(
        <button  
            onClick={() => toggleCompleted(todo.todo_id)}
            className={`flex-shrink-0 h-6 w-6 border-2 rounded-full
                    flex itiems-center justify-center cursor-pointer ${todo.completed ? "bg-green-500 border-green-500 text-white" : 
                    "border-gray-300 hover:border-blue-500"}`}>
                    {todo.completed && <MdOutlineDone size={17}/>}
        </button>
    )
}
import { useState, useEffect } from "react"
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";




function App() {

    
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [editedText, setEditedText] = useState("");

    const getTodos = async () => {
        try{
            const res = await axios.get("http://localhost:5000/todos");
            setTodos(res.data);
            console.log(res.data);
        }catch (err){
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTodos();
    }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      
        <div className="item-container bg-gray-400 rounded-2xl shadow-2xl w-full
        max-w-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            TO DO LIST
          </h1>
            <TodoForm getTodos={getTodos}/>
            <TodoLists todos={todos}/>
        </div>
    </div>
  )
}

export default App

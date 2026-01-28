import { useState, useEffect } from "react"
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";




function App() {

    
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);
    const [editedText, setEditedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const getTodos = async () => {
        try{
            setLoading(true);
            setError(null)
            const res = await axios.get("http://localhost:5000/todos");
            setTodos(res.data);
            console.log(res.data);
        }catch (err){
            console.error(err.message);
            setError("Failed to fetch todos. Please try again later.")
        }finally{
          setLoading(false);
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
          {error && (
            <div className="bg-red-100 text-red-500 p-3 rounded">
              {error}
            </div>
          )}
            <TodoForm 
              getTodos={getTodos}
              todos={todos}
              error={error}
              setError={setError}
              setTodos={setTodos}
              />
            <TodoLists 
              getTodos={getTodos}
              todos={todos}
              editingTodo={editingTodo}
              setEditingTodo={setEditingTodo}
              setEditedText={setEditedText}
              editedText={editedText}
              setTodos={setTodos}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
        </div>
    </div>
  )
}

export default App

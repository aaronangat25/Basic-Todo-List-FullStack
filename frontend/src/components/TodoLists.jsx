
import { VscClose, VscCheck } from "react-icons/vsc";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import axios from "axios";
import CheckButton from "./CheckButton";

export default function TodoLists({todos, editingTodo, setEditingTodo, setEditedText, editedText, getTodos, setTodos, loading, setLoading, error, setError, }){


    const saveEdit = async (id) => {
        try {

            const currentTodo =  todos.find((todo) => todo.todo_id === id);
            const trimmedText = editedText.trim();

            if(currentTodo.description === trimmedText){
                setEditingTodo(null);
                setEditedText("");
                return;
            }
            const res = await axios.put(`http://localhost:5000/todos/${id}`,{
                description: editedText,
            });
            setEditingTodo(null);
            setEditedText("")
            setTodos(todos.map((todo) => todo.todo_id === id ? {...todo,
                description: editedText,
                completed: false} : todo));
        } catch (error) {
            console.error(error.message);
            setError("Failed to update todo. Please try again")
        }
    }

    return(
        <>
            <div className="todo-lists">
                {loading ? (
                    <p>Loading tasks...</p>
                ) : todos.length === 0 ? (
                    <p className="no-tasks text-gray-200">No tasks available</p>
                ) : (
                    <div className="flex flex-col gap-y-4">
                        {todos.map((todo) => (
                            <div key={todo.todo_id} className="pb-4">
                                <div>
                                    {editingTodo === todo.todo_id ? (
                                        <div className="flex items-center gap-x-3">
                                            <input  
                                                type="text" 
                                                className="flex-1 outline-1 px-3 py-2 outline-gray-500 text-gray-100 placeholder-gray-300 shadow-md hover:outline-purple-600 focus:ring-2 focus:ring-blue-500 rounded-lg"
                                                onChange={(e) => setEditedText(e.target.value)}
                                                />
                                                <div>
                                                <button 
                                                    className="py-2 px-4 bg-red-600 rounded-md mt-2 mr-2 shadow-4xl hover:bg-red-700 cursor-pointer"
                                                    onClick={() => setEditingTodo(null)}><VscClose /></button>
                                                <button 
                                                    className="py-2 px-4 bg-green-400 rounded-md mt-2 cursor-pointer hover:bg-green-500"
                                                    onClick={() => saveEdit(todo.todo_id)}><VscCheck/></button>
                                                    </div>
                                        </div>
                                    ) : (
                                        
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex items-center gap-x-4 overflow-hidden">
                                                <CheckButton 
                                                    todo={todo}
                                                    todos = {todos}
                                                    setTodos={setTodos}

                                                />
                                            <span>{todo.description}</span>
                                            
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                                <EditButton 
                                                    todo={todo}
                                                    setEditedText={setEditedText}
                                                    setEditingTodo={setEditingTodo}
                                                />
                                                <DeleteButton 
                                                    todos={todos} 
                                                    setTodos={setTodos}
                                                    todo={todo}
                                                />
                                            </div>
                                    </div>
                                        
                                    )}
                                    
                                
                            </div>
                            </div>
                            
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
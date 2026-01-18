import { MdOutlineDone } from "react-icons/md";

export default function TodoLists({todos}){


    return(
        <>
            <div className="todo-lists">
                {todos.length === 0 ? (
                    <p className="no-tasks text-gray-200">No tasks available</p>
                ) : (
                    <div className="flex flex-col gap-y-4">
                        {todos.map((todo) => (
                            <div className="flex items-center gap-x-4">
                                <button  className={`h-6 w-6 border-2 rounded-full
                                flex itiems-center justify-center cursor-pointer ${todo.completed ? "bg-green-500 border-green-500 text-white" : 
                                "border-gray-300 hover:border-blue-500"}`}>
                                    {todo.completed && <MdOutlineDone size={17}/>}
                                </button>
                                <span>{todo.description}</span>
                            </div>
                            
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
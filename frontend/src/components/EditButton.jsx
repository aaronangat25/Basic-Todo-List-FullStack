
import { MdModeEditOutline } from "react-icons/md";

export default function EditButton({ todo, setEditedText, setEditingTodo }){

    return(
        <div>
            <button onClick={() => {

                    setEditingTodo(todo.todo_id); 
                    setEditedText(todo.description);
                    console.log("Editing: ", todo.description);

                }}className="p-2 text-blue-500 hover:text-gray-500 rounded-lg
                bg-blue-50 duration-50 cursor-pointer">
                <MdModeEditOutline />
        </button>
        </div>
    )
}
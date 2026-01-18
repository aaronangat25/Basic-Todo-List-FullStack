import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import axios from "axios";

export default function TodoForm({getTodos}){
    
    const [description, setDescription] = useState("");
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/todos",{
                description, completed: false
            })
        setDescription("")
        getTodos();
        }catch(err){
            console.error(err.message);
        }
    }

    return(
        <form onSubmit={onSubmitForm} className="flex items-center gap-2 shadow-md p-2 rounded-lg mb-6">
            <input 
            className="flex-1 w-full outline-none px-3 py-2 text-gray-100 placeholder-gray-300"
            type="text" value={description} onChange={(e) =>
                setDescription(e.target.value)} placeholder="What needs to be done?" required/>
            <AddButton />
        </form>
    );
}
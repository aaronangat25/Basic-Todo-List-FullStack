import { useState } from "react"
import TodoForm from "./components/TodoForm";
import AddButton from "./components/AddButton";




function App() {


  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      
        <div className="item-container bg-gray-400 rounded-2xl shadow-2xl w-full
        max-w-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            TO DO LIST
          </h1>
            <TodoForm />
        </div>
    </div>
  )
}

export default App

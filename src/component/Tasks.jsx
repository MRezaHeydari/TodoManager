import { useState, useCallback } from 'react';
import Task from './Task';
import NewTask from './NewTask';
import { ToastContainer, toast } from 'react-toastify';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const handleDeleteTask = useCallback((id) => {
        setTasks(tasks.filter((task) => task.id === id ? false : true ));
        toast.error("Edit success", {position: "top-right"});
    }, [tasks]);

    const handleEditTask = useCallback((id, newText) => {
        setTasks(tasks.map((task) => (
            task.id === id ? {id, text: newText} : task
        )));
        toast.warn("Edit success", {position: "top-right"});
    }, [tasks]);

    const handleAddNewTask = useCallback((text) => {
        setTasks([
          ...tasks,
          {id: Math.floor(Math.random() * 10000), text, complete: false}
        ]);
        toast.success("Add success", {position: "top-right"});
    }, [tasks]);

    console.log("Tasks component");

    return (  
        <>
            <NewTask onAdd={handleAddNewTask}/>
            <h5 className="text-center mb-5 alert-primary mx-auto py-3 rounded-3" style={{width:"10rem"}}>تعداد کار ها ({tasks.length})</h5>
            <div>
                {tasks.map(task => (
                    <Task 
                        id={task.id}
                        key={task.id}
                        task={task}
                        onEdit={handleEditTask}
                        onDelete={handleDeleteTask}
                    />
                ))}
            </div>
            <ToastContainer />
        </>
    );
}
 
export default Tasks;
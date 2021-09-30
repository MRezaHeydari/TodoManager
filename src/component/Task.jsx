import React, {useState, memo, useRef, useCallback} from 'react';

const Task = ({id, task, onEdit, onDelete}) => {
    console.log("Task component");

    const [showChanged, setShowChanged] = useState(false);
    const [completeTask, setCompleteTask] = useState(false);
    
    const inputRef = useRef(null);

    const handleEdit = useCallback(() => {
        if (inputRef.current.value.trim() !== "") {
            onEdit(id, inputRef.current.value.trim())
        }
        setShowChanged(false);
    }, [id, onEdit])

    const handleComplete = useCallback(() => {
        setCompleteTask(!completeTask);
    }, [completeTask])

    const handleShowEditMode = useCallback(()  => {
        setShowChanged(true);
    }, [])
    
    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [id, onDelete])

    return (  
        <div className={!completeTask ? "card mb-3 card-task-bg mx-auto" : "card mb-3 card-task-bg-done mx-auto"}>
            <div className="card-header d-flex justify-content-around">
                <h6 className="text-center">{task.text}</h6>
                <input type="checkbox" onChange={handleComplete} className="form-check-input"/>
            </div>
            <div className="card-body row d-flex justify-content-center">
                
                <div className="col-auto text-center mb-2">
                {showChanged && !completeTask
                    ? (
                        <>
                            <button className="btn mb-2 px-4 btn-success" onClick={handleEdit}>تایید</button>
                            <input
                                    type="text"
                                    className="form-control text-center"
                                    placeholder={task.text}
                                    ref={inputRef} 
                            />
                        </>
                    )
                    : <button className="btn mb-2 px-4 btn-warning" onClick={handleShowEditMode}>تغییر</button>
                }
                    
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>پاک کردن</button>
                </div>
            </div>
        </div>
    );
}
 
export default memo(Task);
import { memo, useRef, useCallback } from 'react';

const NewTask = ({onAdd}) => {
    const inputRef = useRef(null);

    const handleAdd = useCallback(() => {
        if (inputRef.current.value.trim() !== "") {
            onAdd(inputRef.current.value.trim());
            inputRef.current.value = "";
        }
    }, [onAdd])

    return (  
        <div className="d-flex justify-content-center align-items-center mt-5" style={{height:"20vh"}}>
            <form onSubmit={event => event.preventDefault()} className="row">
                <div className="col-auto">
                    <input 
                        className="form-control text-center"
                        type="text" 
                        placeholder="ساخت کار جدید" 
                        ref={inputRef}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-success" onClick={handleAdd}>اضافه کن</button>
                </div>
            </form>
        </div>
    );
}

export default memo(NewTask);

import React, {useState} from "react";

function ToDoItem(props){
    const [isMarked, setIsMarked] = useState(false)

    function handleMark(){
        if(isMarked)
            setIsMarked(false)
        else
        setIsMarked(true)
    }

    return <div onClick={handleMark}>
         <li style={{textDecoration: isMarked? "line-through": "none"}}>{props.text}</li>
    </div>
}

export default ToDoItem;
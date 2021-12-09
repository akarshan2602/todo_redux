
import React, { useRef } from "react";

import { IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo} = props;

  const inputRef = useRef(true);



  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div key={item.id} className="card">
  
      <textarea
        ref={inputRef}
        disabled={inputRef} //FOR CARD TEXT
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns"> 
            <button 
              style={{color: "black"}} //for DELETE BUTTON 
              onClick={() => removeTodo(item.id)} >
        
         
          <IoClose />
     
            </button>
      </div>
    
    </div>
  );
};

export default TodoItem;

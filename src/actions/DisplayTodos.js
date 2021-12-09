
import { connect } from "react-redux";
import {
  addTodos,
  
  removeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    
  };
};

const DisplayTodos = (props) => {
  return (
    
      <ul className="displaytodos">
          {props.todos.length > 0
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      
                    />
                  )
                );
              })
            : null}
        </ul>
   
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

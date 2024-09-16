const Todo = ({todo,toggleCheck}) => {
     function handlecheck(){
     toggleCheck(todo.id)
     }
    return (  
       <label>
        <input type="checkbox" checked={todo.completed} onChange={handlecheck}/>
        {todo.name}
        <br></br>
       </label>
    );
}
 
export default Todo;
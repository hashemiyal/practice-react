import Todo from "./Todo";
const TodoList = ({todos,toggleCheck}) => {
    return (
 
        todos.map((todo)=>{
        return <Todo key={todo.id} todo={todo} toggleCheck={toggleCheck}/>
        })
      
        
    
    );
}
 
export default TodoList;
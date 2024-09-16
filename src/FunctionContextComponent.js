import { ThemeContext } from "./App";
import { useContext } from "react";
function FunctionContextComponent (){
let darktheme=useContext(ThemeContext);
let themestyels={
        backgroundColor:darktheme? '#333':'#CCC',
        color:darktheme?'#CCC':'#333',
        padding:'2rem',
        margin:'2rem'
}
return(
    <div style={themestyels}>Function Theme</div>
)

}
export default FunctionContextComponent;
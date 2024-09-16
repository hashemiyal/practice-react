const PokemonList = (props) => {
    let pokemon=props.pokemon;
    return ( 
       <div>
        {
            pokemon.map((p)=>{
            return <div key={p.name}>{p.name}</div>
            })
        }
       </div> 
       
     );
}
 
export default PokemonList;
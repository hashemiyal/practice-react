const Pagination = ({gotonextPage,gotoprevPage}) => {

    return ( 
    <div>
    {gotoprevPage &&<button onClick={gotoprevPage}>Previous ~~</button>}
    {gotonextPage &&<button onClick={gotonextPage}>Next ~~</button>}
    </div> );
}
 
export default Pagination;
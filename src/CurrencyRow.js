const CurrencyRow = (props) => {
  let {currencyOptions,selectedcurrency,onchangecurrency,amount,onchangeamount}=props;
    return ( 
        <div>
            <input type="number" className="input" value={amount} onChange={onchangeamount}/>
            <select className="select" value={selectedcurrency} onChange={onchangecurrency}>
            {currencyOptions.map((cop,index)=>{
             return <option key={index} value={cop}>{cop}</option>
            })}
            </select>
        </div>
     );
}
 
export default CurrencyRow;
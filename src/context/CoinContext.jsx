import { createContext, useEffect, useState } from "react";


export const CointContext= createContext();

//Context provider function and provide props
const CointContextProvider =(props)=>{

   //!adding stat variable so where we can store the api data
   const [allcoin, setAllCoin]= useState([]); // store the data in empty arr

   const [currency , setCurrency]=useState({
      name:"usd",
      symbol:"$"
   })

   const fetchAllCoin= async()=>{
      const options = {
         method: 'GET',
         headers: {accept: 'application/json', 'x-cg-demo-api-key': 'COIN_GECKO_API'}
       };
       // mdifyied the fetch function with cusomt call with currecny vataibel to ge the data in particular  currency 
       fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
         .then(res => res.json())
         .then(res => setAllCoin(res))
         .catch(err => console.error(err));
   }

   //! call the api when even the component get render to ge the latest update 
    // so for the first it will mount but also when ever te currecny get updated it make the call for new data
    useEffect(()=>{
      fetchAllCoin;
    },[currency])
   // what ever data that we pass in theis object can be passed in any component  
   const  contextValue={
      allcoin,currency,setCurrency // this vraible can be acess in any component 
   }
   return (
      <CointContextProvider vlaue={contextValue}>
         {props.children}
      </CointContextProvider>
   )
}

export default CointContextProvider;
import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts';
import { useFetcher } from 'react-router-dom';

function LineChart({chartdata}) {
   const [data,setdata] =useState(['Data, Prices']);

   useEffect(()=>{
      let datacopy =[['Data, Prices']];
      if(chartdata.price){
         chartdata.price.map((item)=>{
            datacopy.push([`${new Data(item[0]).toLocalDataString( ).slice(0, -5)}`, item[1]])
         })

         setdata(datacopy);
      }
   },[chartdata])
  return (
   <Chart
   chatType='LineChart'
   data={data}
   height='100%'
   lengendToogle   
   />
  )
}

export default LineChart
import { useEffect, useState } from "react";
import SelectBasicExample from "../inputComponents/input1";

const Masivi = ()=> {
    
    const [data, setData] = useState({})
    
   
//    async function MasivGet() {
   
//         const response = await fetch(`
//        https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3&MileageType=1&Page=1`);
//         const data = await response.json();
//         setList(data)
//         // console.log(data, "jshjahsjahjs");  
//     }

    function MasivGet() {
        fetch(`https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3&MileageType=1&Page=1`)
        .then((res)=> res.json())
        .then((data)=> {
         setData(data) 
           
            // console.log(data)
        })
    }
    
    
    useEffect(() => {
        MasivGet();
       
    },[])
  
    
   

}

export default Masivi
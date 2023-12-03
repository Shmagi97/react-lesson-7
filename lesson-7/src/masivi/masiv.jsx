import { useEffect, useState } from "react";

import Submit from "../inputComponents/submitButton";




const Masivi = (props)=> {
    
    const [list, setList] = useState([])
     
    const [value, setValue] = useState()
    // console.log(value) 
    const getValueInInput = (getValue) => {
        setValue(getValue)
       
    }
   
   async function masivGetButton() {
  
    const masivStatic = [
        {
           url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=38494',
           id: 1
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=37297',
            id: 2
            
        }, 

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=17809',
            id: 3
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=38474',
            id: 4
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=27997',
            id: 5
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=36521',
            id: 6
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=21018',
            id: 7
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=20026',
            id: 8
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=17822',
            id: 9
        },

        {
            url: 'https://api.zoommer.ge/v1/Content/sharing-info?productId=15526',
            id: 10
        }
    ]

    
    

      const filterEdMasivStatic = masivStatic.filter((el)=> el.id==value)
    //   console.log(filterEdMasivStatic[0].url)

        const response = await fetch(`${filterEdMasivStatic[0].url}`);
        const dataMasiv = await response.json();
        console.log(dataMasiv, 'dataMasiv')
        props.getDataFn(dataMasiv)
        

        
       

       
        // const itemId = filterEdData[index]; 
        // console.log(itemId.car_desc)
         
       
  
    }

    function masivGet() {

        const masivStatic = [
            { 
               name: 'Xiaomi Redmi 13C 8/256GB Blue',
               brandName: "Xiaomi",
               id: 1
            },
    
            {
                name: "Apple iPhone 15 | 128GB Black",
                brandName: "Apple",
                id: 2
                
            }, 
    
            {
                name: "Apple Watch Series 8 GPS 41mm Midnight ",
                brandName: "Apple",
                id: 3
            },
    
            {
                name: "Under Armour Project Rock Over-Ear Headphone",
                brandName:"JBL",
                id: 4
            },
    
            {
                name: "Apple MacBook Air 13 inch 2022 MLY33LL",
                brandName: "Apple",
                id: 5
            },
    
            {
                name: "Lenovo IdeaPad Slim 3 82X80025RK",
                brandName: "Lenovo",
                id: 6
            },
    
            {
                name: "Xiaomi TV A2 55 Global Version",
                brandName: "Xiaomi",
                id: 7
            },
    
            {
                name: "LG TV 43UQ75003LF",
                brandName: "LG",
                id: 8
            },
    
            {
                name: "Apple AirPods Pro 2 With MagSafe Charging Case MQD83 White",
                brandName: "Apple",
                id: 9
            },
    
            {
                name: "Microsoft Xbox Series X 1TB",
                brandName: "Xbox",
                id: 10
            }
        ] 

        setList(masivStatic)

      
    }
    
    
    useEffect(() => {
        masivGet();
       
    },[])


    return(
        <>
          <Submit
          function = {masivGetButton}
          masivStaticState = {list}
          getValueState = {getValueInInput}
        
          />
          
          {/* {data.map((el, index)=>{
            

             
                // {console.log(el.client_name)}
               
          
           
          })} */}

          
        </>
        
    )
   
   
   

}

export default  Masivi
import { useEffect, useState } from "react";

import Submit from "../inputComponents/submitButton";






const Masivi = ()=> {

    
    
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [index, setIndex] = useState(0)  

   
   async function MasivGetButton() {

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
    
    // console.log(masivStatic[1].phone2)

      const filterEdMasivStatic = masivStatic.filter((el)=> el.id==10)
    //   console.log(filterEdMasivStatic[0].url)

        const response = await fetch(`${filterEdMasivStatic[0].url}`);
        const dataMasiv = await response.json();
        console.log(dataMasiv.name)
        setList(dataMasiv)

        
       

        // const index = 4; 
        // const itemId = filterEdData[index]; 
        // console.log(itemId.car_desc)
         
       
  
    }

    function MasivGet() {

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
     
        const filterEdMasivStatic = masivStatic.map((el)=> el.url) 
        setList(filterEdMasivStatic)
        console.log(list, 'list')

        fetch(`${filterEdMasivStatic}`)
        .then((res)=> res.json())
        .then((list)=> {

            setData(list)
            // console.log(list)
         const filterEdMasiv = list.data.items
         setData(filterEdMasiv)
         const filterEdInputs = filterEdMasiv.map((el)=> el.airbags)
         setInputs(filterEdInputs)
         console.log(filterEdMasiv)
            
         
           
           
        }) 
        .catch((error)=> {console.log(error, 'hshhs')})
    }
    
    
    useEffect(() => {
        MasivGet();
       
    },[])
  
    
    return(
        <>
          <Submit
          function = {MasivGetButton}
        //   inpustState = {inputs}
        //   masivState = {data}
        
          />
        
          {/* {data.map((el, index)=>{
            

             
                // {console.log(el.client_name)}
               
          
           
          })} */}

          
        </>
        
    )
   
   
   

}

export default (Masivi)
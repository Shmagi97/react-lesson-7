import {Cardkomponent, Cardkomponent2} from '../cards/cards'

import '../geiInfo/getInfo.css'


const GetInfofromMasiv = (props)=> {

    // console.log(props.filterEdChekbox)

    return(
        <main className='getInfoMain'>
         
           <Cardkomponent
            dataState1 = {props.dataState}
           
           />

           <Cardkomponent2
            filterEdChekbox2 = {props.filterEdChekbox}
           />
          
        </main>
    )
}

export default GetInfofromMasiv
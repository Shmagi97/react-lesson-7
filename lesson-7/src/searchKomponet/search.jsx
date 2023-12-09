import '../searchKomponet/search.css'
import ChekBoxKomponent from './chekBox'
import MinMaxPrice from './minMaxPrice'

const SearchKomponent = (props)=> {
  // console.log(props)
    return(
    <section className="searchSection">
      <ChekBoxKomponent
       chekboxAxiosState = {props.axiosdataState}
       getChekId2 = {props.getChekId}
      />
     
      <MinMaxPrice/>
    </section>
    )
   
}

export default SearchKomponent
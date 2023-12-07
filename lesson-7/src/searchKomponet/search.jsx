import '../searchKomponet/search.css'
import ChekBoxKomponent from './chekBox'
import MinMaxPrice from './minMaxPrice'

const SearchKomponent = (props)=> {
  // console.log(props)
    return(
    <section className="searchSection">
      <ChekBoxKomponent
       chekboxAxiosState = {props.axiosdataState}
      />
      <ChekBoxKomponent
      
      />
      <ChekBoxKomponent/>
      <MinMaxPrice/>
    </section>
    )
   
}

export default SearchKomponent
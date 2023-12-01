import "../sectionHadComponent/had.css"

 const HadComponent = ()=> {
    return(
        <section className="sectionHadComponent"> 
           <div className="sectionDiv">
            <span>იყიდება</span>
           <label className="toggle">
               <input type="checkbox" id="toggleCheckbox" className="toggleInput"/>
                <span className="slider"></span>
           </label>
           <span>ქირავდება</span>

           </div>
           <div className="sectionDiv2">
            <span >ფილტრის გასუფთავება</span>
           </div>
        </section>
    )
}

export default HadComponent;

import './Custom.css'
function Meeting(){
   
    return(
       
       <div>
    
       
        <form>
            <label for="fname">Meeting Room</label><br></br>
            <select className='selectvalue'
              
             >
                <option value="training" >Trainning Room</option>
                <option value="personal">Personal Room</option>
                <option value="drawing">Drawing Room</option>
                 </select>
                <br></br>
            <label for='fname'>Name</label><br></br>
           <input type="text" placeholder="Enter Your Name"></input><br></br>

           <label className='hello' for='fname'>Meeting Description</label><br></br>
           <input type="text" placeholder="Enter Meeting Description"></input><br></br>
           <input className="z" type="date" placeholder="Enter Meeting Description"></input>
           <p>Please select your prefered slot</p>
          
           
        </form>  
        <ul className="a"><div>10:00 AM</div></ul>
        <ul className="b"><div>10:30AM</div></ul>
        <ul className="c"><div>11:00AM</div></ul>
        <ul className="d"><div>11:30AM</div></ul>
        <ul className="e"><div>12:00PM</div></ul>
        <ul className="f"><div>12:30PM</div></ul>
        <ul className="g"><div>1:00PM</div></ul>

      
        
        <button className="button">Booking Confirmation</button>
        <br></br>

     </div>
    )
}
export default Meeting;

import './App.css';

function App() {


function gp(){

let length =document.getElementById('length').value ;

let password="";
let  types = 0 ; 

if(document.getElementById('capital_letters').checked) types++;
if(document.getElementById('small_letters').checked) types++;
if(document.getElementById('numbers').checked) types++;
if(document.getElementById('special_values').checked) types++;

if(length == "")  {alert("please enter the length of password ....") ; types=1;length=0; }
else if(types ==0) {alert("please select specifications for password ...."); types=1;length=0;}
else if(length>15) {alert("password length should be less than 15  ....") ; types=1;length=0;}
else if(types>length) alert("please check the length of password ....")

if(document.getElementById('capital_letters').checked && types<=length)  mp("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
if(document.getElementById('small_letters').checked && types<=length) mp("abcdefghijklmnopqrstuvwxyz");
if(document.getElementById('numbers').checked && types<=length) mp("0123456789")
if(document.getElementById('special_values').checked && types<=length) mp("!@#$%^&*")


function mp( string )
{
  let l1;
  if(types==1) l1=length;
  else
  {
    l1=(Math.floor(Math.random() *100))%(length-types+1);
    l1++;
  }

  const cl=string;

  for(let i=0 ;i<l1 ;i++)
  {
    password=password+cl[(Math.floor(Math.random() *100))%(cl.length)];
  }

  length=length-l1;
  types--;
}

// makin password random....

let random_password="";

for(let i=0 ;password.length!=1 && types<=length ;i++)
  {

    let position;
    position=(Math.floor(Math.random() *100))%(password.length);
    random_password=random_password+password[position];
    if(position != password.length-1)
    password=password.substring(0,position)+password.substring(position+1);
    else
    password=password.substring(0,position)

  }

  random_password=random_password+password;

  document.getElementById("password").textContent=random_password




}




  return (

    <div className=" box rounded text-center bg-success  p-2" >

     <h1 className=" mt-2 text-center"> Password Generator </h1>
     <div className=" d-flex   h-50 ">
      <div className="w-50 p-3 mt-4 d-flex flex-column ">
        
        <h6 style={{ width: "75%" } }className="pr-5"> Your password </h6>
        <div style={{ width: "75%" } } className="d-flex bg-secondary justify-content-end bg-white rounded ">
          <div className="d-flex  flex-row justify-content-center mt-2" style={{  width: "75%",height:"20px" } } >
            <p id="password" style={{ width: "75%" } }  >  </p>
          </div>
          <button onClick={()=>{navigator.clipboard.writeText(document.getElementById("password").textContent); alert('Password copied to clipboard')}} className="btn ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
          </button>
        
        

        </div>
        <p id="password" style={{ width: "75%" ,height:"70%" } }className="bg-white mt-2 rounded " >  </p>
        
        <div className="d-flex flex-row justify-content-end">
          <div className="d-flex flex-column justify-content-end pa  ">
           <p className=" "> *Password length : </p>
          </div> 
          
          <div className="d-flex rounded flex-row justify-content-start ">
           <input id="length" type="text" className="" style={{ width: "20%" , height:"55%" } }></input>
          </div>  
        </div> 
 
      </div>
      <div className="w-50 p-4 text-center ">
        <h6 className="pb-2"> Should contain </h6>
        
        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-row justify-content-center pa  ">
           <p className=""> *capital letters (ABC...)</p>
          </div> 
          
          <div className="d-flex flex-row justify-content-center c">
           <input id="capital_letters" type="checkbox" className="mt-2  "></input>
          </div>  
        </div>

        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-row justify-content-center pa  ">
           <p className=""> *small letters (abc...)</p>
          </div> 
          
          <div className="d-flex flex-row justify-content-center c">
           <input id="small_letters"type="checkbox" className="mt-2  "></input>
          </div>  
        </div>


        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-row justify-content-center pa  ">
           <p className=""> *numbers (123...)</p>
          </div> 
          
          <div className="d-flex flex-row justify-content-center c">
           <input id="numbers" type="checkbox" className="mt-2  "></input>
          </div>  
        </div>


        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-row justify-content-end pa  ">
           <p className=""> *special characters (@!%*^...)</p>
          </div> 
          
          <div className="d-flex flex-row justify-content-center c">
           <input id="special_values" type="checkbox" className="mt-2  "></input>
          </div>  
        </div>
        
        
      </div>
     </div>
     <br></br>
     <br></br>

     <button className="  mt-2 text-center btn btn-warning btn-small" onClick= {gp}> Generate Password </button>

    </div>
  );
}

export default App;

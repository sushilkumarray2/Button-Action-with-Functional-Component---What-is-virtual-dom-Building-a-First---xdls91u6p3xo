import React, {Component, useState} from "react";
import "./../styles/App.css";

// var txt="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
// function App() {
//   const [str,setStr]=useState("");

//    function show(){
//      setStr(txt);
   
//    }
//   return (
//     <div id="main">
//          <p id="para">{str}</p>
//       <button type="button" id="click" onClick={show}></button>
//     </div>
//   );
// }


function App() {

  const [show, setShow] = useState(false)


 

  const handleClick = () => {

        // console.log('djgfdj')

        setShow(true)

  }

  return (

    <div id="main">

       <button id="click" type="submit" onClick={()=>{handleClick()}}>Click</button>

       {show === true ? (

        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy

        </p>

      ) : undefined }

    </div>

  );

}




export default App;
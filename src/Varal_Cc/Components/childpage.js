import React, { useEffect, useState } from "react";
import "./styles.css";
export function ChildCp(props) {
  let [counter, setCounter] = useState(0);
  let [colors, setColors] = useState([
    "red",
    "blue",
    "pink",
    "green",
    "grey",
    "teal",
  ]);
  let [color, setColor] = useState("");
  function clickHandler() {
    setCounter(counter + 1);
    let index = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(colors[index]);
    setColor(colors[index]);
  }
  //  function loadHandler(ind){
  //   console.log('jhg',ind);

  //   let ele=document.getElementById('key'+ind)
  // setTimeout(() => {
  //   ele.classList.add('whitColor')

  // }, 3000);

  //  }

  //  let variant=[]
  //  for(let i=0;i<20;i++){
  //    let obj={
  //     "id":i,
  //     "checked":false,
  //     "value":i,
  //     "name":i
  //    }
  //    variant.push(obj)
  //  }
  //  console.log(variant);

useEffect(()=>{
console.log('hihhhhhhh');
let elements=document.querySelectorAll('box');
console.log(elements);

},[])
  return (
    <div >
      <button style={{ backgroundColor: color }} onClick={clickHandler}>
        {counter}click
      </button>

      <b>
       
        <mark>this is from child</mark>
      </b>
      {/* {
        variant.map((ele,ind)=>{
         
         
            loadHandler(ind)
         
            return (
              
                <div className="cardsec"  key={'k'+ind}>
                  
                    <div className="box" id={'key'+ind} key={'key'+ind}>hlo</div>
                   <input type="checkbox" key={'key'+ind} value={ele.value} name={ele.name} id={'id'+ind}></input>
              
                </div>
            )
        })
     } */}
     <div className="cardsec">
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
      <div id="id1" className="box"></div>
     
     </div>
    </div>
  );
}

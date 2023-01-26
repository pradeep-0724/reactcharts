import { useState } from "react";

export function Dropdown() {
  let [status, setStatus] = useState("");
  let [prev,setPrev]=useState('')
  let [statArr,setStatArr]=useState([])
  let [heads, setHeads] = useState([]);
  let [tails, setTails] = useState([]);
  let [board, setBoard] = useState([ [1,1,1,1,1,],[2,2,2,2,2],[3,3,3,3,3]]);
  
  function changehandler(e) {
    status = e.target.value;
    setStatus(status);
    // console.log(status, "kjhg");
   
  }
  function submithandler() {
   
    if(tails.length==0){
        // console.log('yes');
        tails.push(status);
        setTails(tails)
        statArr=[[...tails]];
        setStatArr(statArr);
       
    }
    else{
    
     
     for(let i=0;i<statArr.length;i++){
      console.log(statArr[i]);
      console.log(statArr[i][statArr[i].length-1]);
      if(statArr[i][statArr[i].length-1]!=status){
        statArr[i].push(status)
        console.log(i,statArr[i][statArr[i].length-1]);
        // setStatArr([...statArr])
      console.log(statArr);
      break
      
      }
      // if(statArr[i][statArr[i].length-1]==status){
      //   statArr[i+1].push(status)
      // console.log(statArr[i+1]);
      // break
      // }
    
      else{
        let ar=[];
        ar.push(status);
        statArr.push(ar);
        setStatArr([...statArr])
        break
      }
     
    }
     console.log(statArr);
       
        //  if(row[row.length-1]==status){
        //   let ar=[];
        //   ar.push(status)
        //  statArr.push(ar);
        //  setStatArr(statArr);
        //  console.log(statArr);
        // }
    
    

    }
    // else{
    //    for(let i=0;i<statArr.length;i++){
      
    //     console.log(statArr[i]);
      
    // }
    // }
   }
   
    
  //   else{
       
  //       if(tails[tails.length-1]!=status){
  //           // console.log('again yes');
  //           tails.push(status);
  //           setTails(tails)
  //       }
  //       else{
  //           heads.push(status);
  //           setHeads(heads)
  //           // console.log('no');
  //       }
       
  //   }
  //   console.log(tails,heads);
  //  }
   
   

  
  return (
    <div>
      <h2>DropDown Page</h2>
      <select  onChange={changehandler}>
        <option >select a value</option>
        <option value="T">T</option>
        <option value="H">H</option>
      </select>
      <hr></hr>
      <div>
       {
       
       }
      </div>
      <button onClick={submithandler}>Submit</button>
    </div>
  );
}

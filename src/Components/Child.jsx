import React, { useState } from 'react';

function Child(props) {

    const[name,setname] = useState("");

    const submithandler = (e) =>{
        e.preventDefault();
        console.log(props);
        props.getdata(name);

    }

  return (
    <div>
        <form onSubmit={submithandler}>
            <input type="text" value={name} 
            onChange={(e)=>{setname(e.target.value)}}></input>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Child;
// import React, {useState} from "react";
// import React from "react";
// import axios from "axios";

// const RandomAPIS=()=>{

// const[randomData, setRandomData]= useState(null);

// const ButtononClick = ()=>{
//     axios.get('')
//     .then(response =>{
// setRandomData(response.data)
//     })

//     .catch(error=>{
//         console.log(error);
//     });
// }
// }

import React,{useState} from "react";
import React from "react";
import axios from "axios";

const RandomAPIS=()=>{

const[randomData, setRandomData]= useState(null);

const ButtononClick=()=>{
    axios.get('')
    .then(response =>{
        setRandomData(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
}


return(
    <div>
 <button onClick={Button}></button>
 <p>email:{randomData.result[0].email}</p>


        
    </div>
)

}

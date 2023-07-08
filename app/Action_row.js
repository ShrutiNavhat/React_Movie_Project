
"use client"
import React, { useState } from 'react';

const Action_row =()=>{
         const [count, setCount] = useState(0);
         const like = () => {
             setCount(count + 1);
         };

         const dislike = () => {
             setCount(count - 1);
         };
         
         return(
             <>
                  <div className="Action">
                      <div className="like">
                          <button onClick={like}><img src="like.png" /></button>
                      </div>
                      <div className="rating">
                          <p className="score">{count}</p>
                      </div>
                      <div className="dislike">
                          <button onClick={dislike} class="imge"><img src="dislike.png" /></button> 
                      </div>
                      <div className="delete">
                          <button><img src="Delete.png"/></button>  
                      </div>
                  </div>
             </>
    )

}
export default Action_row;




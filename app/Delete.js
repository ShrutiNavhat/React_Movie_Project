"use client"
import Header from './Header.js';
import css from './globals.css';
import { Movies} from'./Movie_list';
import Footer from './Footer.js'
import React, { useState } from 'react';
const Page = () =>{
    const [data,setData]=useState(Movies)
    console.log(data,"dat")
    return(
        <>
            <Header/>
            <div className="row">
                 {data.map((item)=>
                    <div key={item.id}>
                      <img src=
                      <p>{item.name}</p>
                      <p>{item.Description}</p>
                    </div>
                 )}
                <Footer/>
            </div>
            
            
        </>
    );
};
export default Page;


export default function Movie_row({movie}) {
        console.log(movie,"data")
        return(
           <>
           </>
        )
        
}



"use client"
import Header from './Header.js';
import css from './globals.css';
import { Movies} from'./Movie_list';
import Footer from './Footer.js'
import React, { useState } from 'react';
const Page = () =>{
    const [data,setData]=useState(Movies)
    console.log(data,"dat")

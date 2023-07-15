"use client"
import {useState} from "react";
import Header from './Header.js';
import css from './globals.css';
import Movie_row from'./Movie_row.js';
import Footer from './Footer.js';
import count from './Action_row.js'
const Movies = [{
                 id:0,
                 vote:{count},
                 image:"Dearzindagi.png",
                 name:"Dear zindagi",
                 date:"2016 • 2h 31m ",
                 type:" Drama ,Romance", 
                 Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections"
                 },{
                 id:1,
                 image:"Brave.png",
                 name:"Brave",
                 date:"2012 • 1h 33m",
                 type:"Adventurous, Comedy ", 
                 Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"
                 },{
                 id:2,
                 image:"Moana.png",
                 name:"Moana",
                 date:"2016 • 1h 47m ",
                 type:" Adventurous, Comedy ",
                 Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.23"              },{
                 id:3,
                 image:"Mulan.png",
                 name:"Mulan",
                 date:"1998 • 1h 27m", 
                 type:"Adventurous, Comedy",
                 Description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.66"
                 },{
                 id:4,
                 image:"Malala.png",
                 name:"He Named Me Malala",
                 date:"2015 • 1h 28m", 
                 type:"Biography, Documentary",
                 Description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations."
                 },{
                 id:5,
                 image:"Soul_surfer.png",
                 name:"Soul surfer",
                 date:"2011 • 1h 52m", 
                 type:"Drama, Biography, Family",
                 Description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack 1236"
                 },{
                 id:6,
                 image:"beckham.png",
                 name:"Bend it like beckham",
                 date:"2002 • 1h 52m", 
                 type:"Comedy, Drama & Romance ",
                 Description:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football. 9"
                 },{
                 id:7,
                 image:"wild.png",
                 name:"Into the wild",
                 date:"2007 • 2h 28m", 
                 type:"Adventure, Biography, Drama",
                 Description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life. 230"
                 },{
                 id:8,
                 image:"HappyNess.png",
                 name:"The Pursuit of Happyness",
                 date:"2006 • 1h 57m", 
                 type:"Drama, Biography",
                 Description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.60"
                 },{
                 id:9,
                 image:"Intouchables.png",
                 name:"The Intouchables",
                 date:"2011 • 1h 52m", 
                 type:"Drama, Biography, Drama  ",
                 Description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver 10"
                 }];

const Page = () =>{
    const[movie,setMovie]=useState(Movies);
    function handleDelete(id){
        const newMovielist=movie.filter((items)=>id !==items.id);
        setMovie(newMovielist)      
    };
    
    
    return(
        <>
            <div className="row">
                <Header/>
                {movie.map((item)=>(
                   <Movie_row
                    key={item.id}
                    data={item}
                    onDelete={()=>handleDelete(item.id)}
                    
                    />
                ))}
                <Footer/>
            </div>
            
            
        </>
    );
}
export default Page;



  






























import Header from './Header.js';
import css from './globals.css';
import Movie_row from'./Movie_row.js'
import Footer from './Footer.js'
const Movies=[{id:"0",
name:"Dear zindagi",
               date:"2016 • 2h 31m | Drama ,Romance", 
               Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections"},
               {id:"0",
               name:"Brave",
               date:"2012 • 1h 33m | Adventurous, Comedy ", 
               Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"},
               {id:"0",
               name:"Moana",
               date:"2016 • 1h 47m | Adventurous, Comedy ",
               Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.23"}]
const Page = () =>{
    return(
        <>
            <div className="row">
                <Header/>
                <Movie_row
                    imge= <img src="Dear_zindgi.png" class="imge"/> 
                    movie=<h1 className="movie_name">{Movies[0]["name"]}</h1>
                    date={Movies[0]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[0]["Description"]}</p>
                   
                />
                <Movie_row
                    imge= <img src="Brave.png" class="imge"/> 
                    movie=<h1 className="movie_name">{Movies[1]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                <Movie_row
                    imge= <img src="Moana.png" class="imge"/> 
                    movie=<h1 className="movie_name">{Movies[2]["name"]}</h1>
                    date={Movies[2]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[2]["Description"]}</p>
                />
                <Footer/>
            </div>
            
            
        </>
    );
};
export default Page;




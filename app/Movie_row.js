import { Movies } from "./Movie_list.js";
import Action_row from "./Action_row.js";

export default function Movie_row() {
  const listItems = Movies.map(data =>
      <div className="data_row">
           <div className="movie_image">
                <img src={data.image}/>
           </div>
           <div className="movie_detail">
               <div className="All_detail">
                   <h1 className="movie_name">{data.name}</h1>
                   <p>{data.date}</p>
                   <h3>Description</h3>
                   <p>{data.Description}</p>
               </div>
               <Action_row/>
           </div>
       </div>
        
  );
  return <ul>{listItems}</ul>;
}





import Action_row from './Action_row.js';

export default function Movie_row(props) {
     return(
         <div className="data_row">
             <div className="movie_image">
                 <img src={props.data.image}/>
             </div>
             <div className="movie_detail">
             <div className="All_detail">
                  <h1 className="movie_name">{props.data.name}</h1>
                  <p>{props.data.date} | {props.data.type}</p>
                  <h3>Description</h3>
                  <p>{props.data.Description}</p>
             </div>
             <Action_row/>
             </div>
         </div>
        
      );
  return {listItems};
}




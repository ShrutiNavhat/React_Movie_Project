import Action_row from './Action_row.js'

const Movie_row =(props)=>{
    return (
        <>
             <div className="data_row">
                <div className="movie_image">
                    <img src="image .png" class="imge"/>  
                </div>
                <div className="movie_detail">
                    <div className="All_detail">
                        {props.movie}
                        {props.date}
                        {props.Title}
                        {props.Description}
                        
                    </div>
                    
                    <Action_row/>
                </div>
             </div>
           
         </>
        
            
    )
}
export default  Movie_row;

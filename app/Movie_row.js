import Action_row from './Action_row.js'

const Movie_row =({Movies})=>{
    return (
        <>
             <div className="data_row">
                <div className="movie_image">
                </div>
                <div className="movie_detail">
                    <div className="All_detail">
                        {Movies.map(item =>(
                            <p key={item.id}>{item.name}</p>
                         ))}
                    </div>
                    <Action_row/>
                 </div>
             </div>
           
         </>
        
            
    )
}
export default  Movie_row;




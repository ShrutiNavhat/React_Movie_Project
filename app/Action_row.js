
const Action_row =()=>{
    
    return(
        <>
            <div className="Action">
                <div className="like">
                     <button><img src="like.png" class="imge"/> </button> 
                </div>
                <div className="rating">
                    <h2 className="score">0</h2>
                </div>
                <div className="dislike">
                     <button><img src="dislike.png" class="imge"/></button>  
                </div>
                <div className="delete">
                     <button><img src="Delete.png" class="imge"/></button>  
                </div>
            </div>
        </>
    )
}
export default Action_row;

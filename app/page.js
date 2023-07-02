import Header from './Header.js';
import css from './globals.css';
import Movie_row from'./Movie_row.js'
const Page = () =>{
    return(
        <>
            <div className="row">
                <Header/>
                <Movie_row/>
                <Movie_row/>
                <Movie_row/>
            </div>
            
            
        </>
    );
};
export default Page;



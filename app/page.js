import Header from './Header.js';
import css from './globals.css';
import Movie_row from'./Movie_row.js'
import Footer from './Footer.js'


const Page = () =>{
    return(
        <>
            <div className="row">
                <Header/>
                <Movie_row/>
                <Footer/>
            </div>
            
            
        </>
    );
};
export default Page;




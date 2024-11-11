/*import {MovieType} from "../types/movieTypes"

export const MovieCard = ({movie}: MovieCardProps) => {

    const movieMock: MovieType = {
       id: 1,
        title: 'inception',
        

    };

    if(movieMock.title==''){

        return<h1>****Errore il movie id (movieMock.id) deve avere un titolo****</h1>
    }

    return (

        <div>
            <h1>{movieMock.title}</h1>
            <p>{movieMock.id}</p>
           
        </div>

    );

}*/
import {useState} from "react"
import { MovieType } from "../types/movieTypes";

type MovieCardProps = {

movie: MovieType

};

export const MovieCard = ({ movie }: MovieCardProps) => {

   

    const [clickCount, setClickCount] = useState(0);
   
    const handleClick = (message:string) => {
        
        console.log(`Cliccato ${message}` );

    }

    const handleClickCount= () => {
        setClickCount(clickCount + 1);
        console.log(`Click Count: ${clickCount}` );

    }

    return(

      

        <div style={{backgroundColor: 'purple'}} onClick={handleClickCount}>
        
          <h1>{ movie.id}</h1>
        <p onClick={()=>handleClick(movie.title)}> { movie.title }</p>
        <p onClick={()=>handleClick(movie.description)}> { movie.description }</p>
        <p>Numero di click: {clickCount}</p>
        </div>
    );

}
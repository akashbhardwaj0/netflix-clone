import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
  import { Link } from "react-router-dom";
  import Movie_Data from "../../assets/moviedata/Movie_Data";

export default function TitleCards(props) {
  const { title, category } = props;
  const [apiData, setApiData] = useState(cards_data);

 
  const TileCardData = async ()=>{
    const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjE3M2ExNWM0NThmMGZiNWMxYmNhYjU3MjkxNzQ4ZCIsInN1YiI6IjY2NTk5MGE4Zjk0NTJlYzI5ODFkNWNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.odla0OSqnOGwYZQiueLZwmHB7fqkGAupCKOwEZmC4Bc'
      }
    };
    
     fetch(url, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  }

  const cardsRef = useRef();
 
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  };



  useEffect( () => {
    TileCardData()
    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>


        {apiData.map((card, index) => {
          return (
            <Link to={`./player/${card.id}`} className="card" key={index}>
              
              
              { <img
                src={`https://image.tmdb.org/t/p/w500/`+card.poster_path}
                alt=""
              /> }
              <p className="movie-name">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}







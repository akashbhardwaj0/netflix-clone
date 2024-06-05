import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/images/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

export default function Player() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at: "",
    typeof:""
  })
  const {id} = useParams()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjE3M2ExNWM0NThmMGZiNWMxYmNhYjU3MjkxNzQ4ZCIsInN1YiI6IjY2NTk5MGE4Zjk0NTJlYzI5ODFkNWNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.odla0OSqnOGwYZQiueLZwmHB7fqkGAupCKOwEZmC4Bc'
    }
  };


const  playerData = ()=>{
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`

  fetch(url, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
}
useEffect(()=>{
  playerData();
},[])
 return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe src= {`https://www.youtube.com/embed/${apiData.key}`} 
      width = "90%" height= "90%" 
      title = "trailer" frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Trailer.module.css';
import axios from 'axios'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//imdb-top-100-movies.p.rapidapi

const Trailer = () => {

  const [slideInfo, setSlideInfo] = useState({})

  const [dinamicHeight, setDinamicHeight] = useState(0)

  useEffect(() => {
    /*const FetchData = async () => {
      try {
        const response = await axios.get('/movies.json');
        console.log(response.data);
        setSlideInfo(response.data)
      } catch (error) {
        console.error(error);
      }
    }*/
    const FetchData = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGZlNTAwYjBjNDdhNTg0ZGExZmNiMzA0ZDEyOTY0MiIsInN1YiI6IjY1ZDVmMmNhYjA0NjA1MDE3YjA5MGY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._aOhARrES9hn7shpUyAXJDeqdw07zz-83liR3zfg3FQ'
      }
    }
    setDinamicHeight(window.screen.availHeight)
      try{
        const { data } = await axios.request(url, options)
        console.log('data.results', data.results)
        setSlideInfo(data.results)
      }catch(err){
        console.error(err)
      }
    }
    FetchData()
  }, [])

  const styles = {
    slide: {"position": "relative", "height": "100dvh", width: "100dvw", "display": "flex", "alignItems": "center", "justifyContent": "center"},
    image: {},
    paragraph: {"position": "absolute", "zIndex": 2, "left": '50%', "bottom": '-50%', "transform": "translateX(-50%)",  "minWidth": "35%", "maxWidth": "40", "height": "25%", "backgroundColor": "gray", "color": "white", opacity: '0.5', "textWrap": "wrap"},
  }

  if(slideInfo.length > 0){
    return (
      <Slide> 
        {slideInfo.map((u, key) => (<article style={styles.slide} key={key}><Image width={dinamicHeight * 0.40} height={dinamicHeight * 0.80} src={'https://image.tmdb.org/t/p/original' + u.poster_path} alt={u.title}/><p style={styles.paragraph}>{u.overview}</p></article>))}
      </Slide>
      )
  }else{
    return <h1>Loading...</h1>
  }
};

export default Trailer;

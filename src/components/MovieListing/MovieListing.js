import React from 'react';
import { settings } from '../../common/apis/setting';
import { useSelector } from 'react-redux';
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import "./MovieListing.scss"
import { moviesAction } from '../../features/movies/movieSlice';

const MovieListing = () => {
    const movies=useSelector(getAllMovies)
    const shows=useSelector(getAllShows)
    const loder=useSelector((state)=>state.movies.loder)
    // console.log(movies);
    let renderMovies="",renderShows="";
    renderMovies=movies.Response==="True" ? (movies.Search.map((movie,index)=>(<MovieCard key={index} data={movie}/>))) : (<div><h3>{movies.Error}</h3></div>)
    
    renderShows=shows.Response==="True" ? (shows.Search.map((movie,index)=>(<MovieCard key={index} data={movie}/>))) : (<div><h3>{movies.Error}</h3></div>)

    

    return (
        <div className="movie-wrapper">
            {loder && <h1 className="loding">...Loding</h1>}
            {!loder && <div className="movie-list">
                <h2>Movies</h2>
                <div className="movies-container"><Slider {...settings}>{renderMovies}</Slider></div>
            </div>}
            {!loder && <div className="movie-list">
                <h2>Shows</h2>
                <div className="movies-container"><Slider  {...settings}>{renderShows}</Slider></div>
            </div>}
            
        </div>
    );
};

export default MovieListing;
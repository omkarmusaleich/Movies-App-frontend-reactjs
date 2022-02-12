import React,{useEffect} from 'react';
import {FaThumbsUp,FaStar,FaFilm,FaCalendarAlt } from "react-icons/fa";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsynMovieOrShows,getAllSelectedMovieOrShow,removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import "./MovieDetail.scss";

const MovieDetail = () => {
    const dispatch=useDispatch();
    const {imdbID}=useParams();
    const data=useSelector(getAllSelectedMovieOrShow)
    console.log(data);
    
    useEffect(()=>{
        dispatch(fetchAsynMovieOrShows(imdbID))
        return ()=>{
            dispatch(removeSelectedMovieOrShow())
        }
    },[dispatch,imdbID])
    return (
        <div className="movie-section">
            {Object.keys(data).length===0 ? (<div>...Loding</div>):(
            <>
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Ratingi<FaStar className="fa-star"/>  : {data.imdbRating}
                    </span>
                    <span>
                        IMDB Votes<FaThumbsUp className="fa-thumbs-up"/> : {data.imdbVotes}
                    </span>
                    <span>
                        Runtime <FaFilm className="fa-film"/> : {data.Runtime}
                    </span>
                    <span>
                        Year <FaCalendarAlt className="fa-calendar"/> : {data.Year}
                    </span>
                </div>
                <div className="movie-plot">{data.Plot}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>

            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} ></img>
            </div>
            </>)}
        </div>
    );
};

export default MovieDetail;



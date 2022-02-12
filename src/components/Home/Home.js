
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';
import {fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/movieSlice';
//import movieApi from '../../common/apis/movieApi';
// import { APIkey } from '../../common/apis/movieApiKey';

const Home = () => {
    const dispatch=useDispatch();
    const movieText='Harry';
    const showText="Friends";
    // http://www.omdbapi.com/?i=tt3896198&apikey=3ffc30c4
    // useEffect(()=>{
    //     const movieText="Harry";
    //     const fetchMovies=async()=>{
    //         const response=await movieApi.get(`?i=tt3896198&apikey=3ffc30c4&s=${movieText}&type=movie`)
    //         .catch(err=>{
    //             console.log("Error :",err);
    //         })
    //         console.log("this is a response from ApI",response)
    //         dispatch(addMovies(response.data))
    //     }

    //     fetchMovies()
        
    // },[])
    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    },[dispatch])

    
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./Header.scss"

import { FaSearch} from "react-icons/fa";
import user from "../../images/profile.png"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {

    const dispatch=useDispatch();
    const [term,setTerm]=useState("");
    const submitHandler=(event)=>{
        event.preventDefault();
        if(term==="")
        {
            alert("please enter search term")
            return;
        }
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
    return (
        <div className="header">
            <div className="logo"><Link to="/">Movie App</Link></div>
            
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="search movies or shows" onChange={(e)=>setTerm(e.target.value)}></input>
                    <button type="submit"><FaSearch/></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user"></img>
            </div>
        </div>
    );
};

export default Header;
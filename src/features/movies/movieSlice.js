import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';




export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // const movieText = "Harry";
    const response = await movieApi.get(`?i=tt3896198&apikey=3ffc30c4&s=${term}&type=movie`)
        .catch(err => {
            console.log("Error :", err);
        })
    // console.log("this is a response from ApI", response)
    return response.data;

})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(`?i=tt3896198&apikey=3ffc30c4&s=${term}&type=series`)
        .catch(err => {
            console.log("Error :", err);
        })
    // console.log("this is a response from ApI", response)
    return response.data;

})

export const fetchAsynMovieOrShows = createAsyncThunk('movies/fetchAsynMovieOrShows', async (id) => {
    
    const response = await movieApi.get(`?apikey=3ffc30c4&i=${id}&Plot=full`)
        .catch(err => {
            console.log("Error :", err);
        })
    // console.log("this is a response from ApI", response)
    return response.data;

})


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: {},
        shows:{},
        selectMovieOrShow:{},
        loder:false,
    },
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow={};
        }

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:(state)=>{
            console.log("pending");
            return{...state,loder:true}
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fulfilled moves");
            return {...state,movies:payload,loder:false};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
        },
        [fetchAsyncShows.pending]:(state)=>{
            console.log("fulfilled shows");
            return {...state,loder:true};
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fulfilled shows");
            return {...state,shows:payload,loder:false};
        },
        [fetchAsynMovieOrShows.fulfilled]:(state,{payload})=>{
            console.log("fulfilled selectedMovieOrShow");
            return {...state,selectMovieOrShow:payload};
        },
    }
})

export const {removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const moviesAction=movieSlice.actions;
export default movieSlice.reducer;
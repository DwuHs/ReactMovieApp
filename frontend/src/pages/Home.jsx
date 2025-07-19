import MovieCard from "../components/MovieCard"
import {useState} from "react"
import '../css/Home.css'


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id : 1, title: "terminator", release_date: "2021"},
        {id : 2, title: "john wick 1", release_date: "2022"},
        {id : 3, title: "get out", release_date: "2023"},
        {id : 4, title: "parasite", release_date: "2024"},
    ]
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    
    return (
        <div className = "home">
            <form onSubmit={handleSearch} className = "search-form">  
                <input type = "text" placeholder="Search For Movies" className = "search-input" value = {searchQuery} onChange = {(e) => setSearchQuery(e.target.value)}></input>
                <button type = "search" className = "search-button">Search</button>
            </form>

            <div className = "movies-grid">
                {movies.map(movie => <MovieCard movie = {movie} key = {movie.id}/>)}
            </div>
        </div>
        
    )
}

export default Home 
import MovieCard from "../components/MovieCard"
import {useState, useEffect, use} from "react"
import { getPopularMovies, searchMovies} from "../services/api"
import '../css/Home.css'


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } 
            catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])  

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
                {movies.map((movie) => (<MovieCard movie= {movie} key={movie.id} />))}
            </div>
        </div>
        
    )
}

export default Home 
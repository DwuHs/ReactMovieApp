import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id : 1, title: " movieszzz", release_date: "2024"},
        {id : 2, title: " movieszzz", release_date: "2024"},
        {id : 3, title: " movieszzz", release_date: "2024"},
        {id : 4, title: " movieszzz", release_date: "2024"},
    ]

    const handleSearch = () => {

    }
    
    return (
        <div className = "home">
            <form onSubmit={handleSearch} className = "search-form">  
                <input type = "text" placeholder="Search For Movies" className = "search-input"></input>
            </form>

            <div className = "movies-grid">
                {movies.map(movie => <MovieCard movie = {movie} key = {movie.id}/>)}
            </div>
        </div>
    )
}

export default Home 
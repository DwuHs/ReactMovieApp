import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id : 1, title: " movieszzz", release_date: "2024"},
        {id : 2, title: " movieszzz", release_date: "2024"},
        {id : 3, title: " movieszzz", release_date: "2024"},
        {id : 4, title: " movieszzz", release_date: "2024"},
    ]
    
    return (
        <div className = "home">
            <div className = "movies-grid">
                {movies.map(movie => <movieCard movie = {movie} />)}
                
            </div>
        </div>
    )
}
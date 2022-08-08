import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from './style'



function Details() {

    const { id } = useParams()
    
    const [movies, setMovies] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}}?api_key=0d9db2b59e0a9172332a4f709e884237&language=en-US&page=1`).
        then(response => response.json()).
        then(data => {

            const {title, poster_path, overview, release_date} = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_date
            }
           
            setMovies(movie)
        
        })


    }, [id])

   
    return (
        <Container>
            
            <div className='movie'>
            
                <img src={movies.image} alt={movies.sinopse}/>

                <div className='details'>
                    <h1>{movies.title}</h1>
                    <span> <strong>Overview: </strong> {movies.sinopse}</span>
                    <span className='releaseDate'><strong>Release Date: </strong>{movies.releaseDate}</span>

                    <Link to='/'>
                        <button>Go Back</button>
                    </Link>

                </div>

            </div>

        </Container>
    )
}


export default Details
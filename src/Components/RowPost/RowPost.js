import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../const/const'
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results)
        }).catch((err)=>{
            alert('err')
        })
    }, [])

    const opts = {
        height: '290',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.warn('Array empty');
                alert('no tailar found')
            }
        })
    }

    return (
        <div className="row" >
            <h2>{props.title}</h2>
            <div className='posters' >
                {movies.map((obj,index) =>
                    <img key={index} onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={imageUrl + obj.backdrop_path} alt="poster" />
                )}

            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
            {console.log(urlId.key)}
        </div>
    )
}

export default RowPost

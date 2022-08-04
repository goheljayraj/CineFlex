import React from 'react';
import './Tile.css'
const Tile = ({ changeRoute, url, movieName, overview}) => {

    return (
        <div className="tile-container" style={{backgroundImage: `url('${url}')`}}>
        <div className="tile-screen" onClick={()=>{changeRoute('spotlight')}} >
            <div className="movie-name">{movieName}</div>
            <div className="movie-overview">
                Overview:
                <br/>
                <div>{overview.length>200?overview.substring(0,200)+'...':overview}</div>
            </div>


        </div>
        </div>
    );
};

export default Tile;
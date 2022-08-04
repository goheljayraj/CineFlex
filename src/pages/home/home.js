import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Tiles from "../../components/Tiles/Tiles";

const Home = (props) => {
    props.setType("m");
    return (
        <div>

            <Tiles setId={props.setId} changeRoute={props.changeRoute} url={'https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'}/>

        </div>

    );
};

export default Home;
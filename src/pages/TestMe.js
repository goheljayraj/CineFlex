import React from "react";
import Swipes from "../components/Swipes/Swipes";

function TestMe(props){
    return (
        <>
            <Swipes setId={props.setId} changeRoute={props.changeRoute} url={'https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'}/>
        </>
    );
}

export default TestMe;
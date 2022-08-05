import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Tiles from "../../components/Tiles/Tiles";

const Home = (props) => {
    props.setType("m");

    // const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1')
    // const [url, setUrl] = useState('https://api.themoviedb.org/3/search/movie?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&query='+props.srch+'&page=1&include_adult=false')
    // const [temp,setTemp] = useState(0)
    let url= 'https://api.themoviedb.org/3/movie/top_rated?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1';
    // let srchUrl=

    // console.log('hereout',props.srch)
    // console.log(props.btn)
        // useEffect( ()=>{
            // console.log('here',props.srch)
        // if(props.btn==1){
        //     console.log('inside')
        //     setTemp(1)
        //
        //     // setUrl('https://api.themoviedb.org/3/search/movie?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&query='+props.srch+'&page=1&include_adult=false');
        //     url = 'https://api.themoviedb.org/3/search/movie?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&query='+props.srch+'&page=1&include_adult=false';
        //     props.setBtn(0);
        //
        // }

    // },[url]);




    return (
        <div>

            <Tiles setId={props.setId} changeRoute={props.changeRoute} url={url}/>

        </div>

    );
};

export default Home;
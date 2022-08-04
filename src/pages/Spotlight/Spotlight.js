import React, {useEffect, useState} from 'react';
import './Spotlight.css'
import Navbar from "../../components/Navbar/Navbar";
import Swipes from "../../components/Swipes/Swipes";




const Spotlight = ({id, changeGen, changeRoute, type, setId, setType}) => {
        const tvurl='https://api.themoviedb.org/3/tv/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
        const murl= 'https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US&page=1'
        const idle = null;
        const [bannerData, setBannerData] = useState(idle);
        let htm;
        let bannerMovieURL = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US';
        if(type=="t"){
            bannerMovieURL = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=a86f1ad1d039e27d489a36607616522f&language=en-US';
        }
        useEffect(() => {
                fetch(bannerMovieURL).then(res => res.json()).then(data => {
                    console.log(data);
                    setBannerData(data);
                    window.scrollTo({top: 61, behavior: 'smooth'});

                })
            }
            , [id]);

        if(type=="m")
        {function giveGenre(i) {
            if (i < bannerData.genres.length) return bannerData.genres[i].name;
            else return "";
        }

        function giveGenreID(i) {
            if (i < bannerData.genres.length) return bannerData.genres[i].id;
            else return "";
        }



        if (bannerData == null) {
            htm = <div>Loading</div>
        } else {
            htm =<>
                <div className="htm">

                <div className="banner-img">
                    <img src={"https://image.tmdb.org/t/p/w500" + bannerData.backdrop_path} alt={bannerData.title}/>
                </div>

                <div className="banner-container">
                    <div className="title-container">
                        <div className="movie-title">
                            <h1>{bannerData.title}</h1>
                        </div>
                        <h2 style={{marginTop: "10px", color: "black",   textShadow: "0px 0px 2px #fff" }}>{bannerData.tagline}</h2>
                        <div className="release-date">Release Date: {bannerData.release_date}</div>
                        {/*<span className="language">{bannerData.production_countries[0].name} ({bannerData.original_language.toUpperCase()})</span>*/}
                    </div>
                    <div className="about-movie">
                        <div className="rating">
                            <img src="res/imdb.png" alt=""/>
                            {/*<span className="val" style="color: ${getColor(bannerData.vote_average)}">${bannerData.vote_average.toFixed(1)}</span>*/}
                        </div>


                        <div className="category">
                            Category:
                            <a onClick={() => {
                                changeGen(giveGenreID(0));
                                changeRoute('genre');
                            }} href="#">{giveGenre(0)}</a>
                            <a onClick={() => {
                                changeGen(giveGenreID(1));
                                changeRoute('genre');
                            }} href="#">{giveGenre(1)}</a>
                            <a onClick={() => {
                                changeGen(giveGenreID(2));
                                changeRoute('genre');
                            }} href="#">{giveGenre(2)}</a>
                            <a onClick={() => {
                                changeGen(giveGenreID(3));
                                changeRoute('genre');
                            }} href="#">{giveGenre(3)}</a>
                            <a onClick={() => {
                                changeGen(giveGenreID(4));
                                changeRoute('genre');
                            }} href="#">{giveGenre(4)}</a>
                        </div>


                    </div>
                </div>





            </div>
                <div className="overview">
                    <div className="overview-title">Overview:</div>
                    <div className="overview-content" id="overview-content">
                        {bannerData.overview}
                    </div>
                </div>


                <Swipes setId={setId} changeRoute={changeRoute} setType={setType} url={murl}/>

            </>
        }}
        else{
            function giveGenre(i) {
                if (i < bannerData.genres.length) return bannerData.genres[i].name;
                else return "";
            }

            function giveGenreID(i) {
                if (i < bannerData.genres.length) return bannerData.genres[i].id;
                else return "";
            }



            if (bannerData == null) {
                htm = <div>Loading</div>
            } else {
                htm =<>
                    <div className="htm">

                    <div className="banner-img">
                        <img src={"https://image.tmdb.org/t/p/w500" + bannerData.backdrop_path} alt={bannerData.title}/>
                    </div>

                    <div className="banner-container">
                        <div className="title-container">
                            <div className="movie-title">
                                <h1>{bannerData.name}</h1>
                            </div>
                            <h2 style={{marginTop: "10px", color: "black",   textShadow: "0px 0px 3px #fff" }}>{bannerData.tagline}</h2>
                            <div className="release-date">Release Date: {bannerData.first_air_date}</div>
                            {/*<span className="language">{bannerData.production_countries[0].name} ({bannerData.original_language.toUpperCase()})</span>*/}
                        </div>
                        <div className="about-movie">
                            <div className="rating">
                                <img src="res/imdb.png" alt=""/>
                                {/*<span className="val" style="color: ${getColor(bannerData.vote_average)}">${bannerData.vote_average.toFixed(1)}</span>*/}
                            </div>


                            <div className="category">
                                Category:
                                <a onClick={() => {
                                    changeGen(giveGenreID(0));
                                    changeRoute('genre');
                                }} href="#">{giveGenre(0)}</a>
                                <a onClick={() => {
                                    changeGen(giveGenreID(1));
                                    changeRoute('genre');
                                }} href="#">{giveGenre(1)}</a>
                                <a onClick={() => {
                                    changeGen(giveGenreID(2));
                                    changeRoute('genre');
                                }} href="#">{giveGenre(2)}</a>
                                <a onClick={() => {
                                    changeGen(giveGenreID(3));
                                    changeRoute('genre');
                                }} href="#">{giveGenre(3)}</a>
                                <a onClick={() => {
                                    changeGen(giveGenreID(4));
                                    changeRoute('genre');
                                }} href="#">{giveGenre(4)}</a>
                            </div>


                        </div>
                    </div>


                </div>
                <div className="overview">
                    <div className="overview-title">Overview:</div>
                    <div className="overview-content" id="overview-content">
                        {bannerData.overview}
                    </div>
                </div>
                    <Swipes setId={setId} changeRoute={changeRoute} setType={setType} url={tvurl}/>



                </>
            }

        }





return (
        <>


            <div className="banner">{htm}</div>

        </>

    );
};

export default Spotlight;
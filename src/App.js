import Home from "./pages/home/home";
import {useState} from "react";
import React from "react";
import Contacts from "./pages/contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import TVShows from "./pages/TV Shows/TVShows";
import Spotlight from "./pages/Spotlight/Spotlight";
import Tiles from "./components/Tiles/Tiles";

function App() {
    const [route, setRoute] = useState('home');
    const [id, setId] = useState(-1);
    const [genID, setGenID] = useState()
    const [type, setType] = useState("m")
    let res;
    if (route === 'home') {
        res = <Home changeRoute={setRoute} setId={setId} setType={setType}/>;
    } else if (route === 'contacts') {
        res = <Contacts/>;
    } else if (route === 'tvshows') {
        res = <TVShows changeRoute={setRoute} setId={setId} setType={setType}/>;
    } else if (route === 'spotlight') {
        res = <Spotlight changeRoute={setRoute} changeGen={setGenID} id={id} type={type}/>
    } else if (route === 'spotlightTV'){
        res = <spotlightTV changeRoute={setRoute} changeGen={setGenID} id={id} type={type}/>
    } else if(route==='genre'){
        res = <Tiles ID={genID} changeRoute={setRoute} setId={setId} type={type}/>
    }
    return <div>
        <Navbar jayraj={setRoute}/>
        {res}
    </div>
}

export default App;

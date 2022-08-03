import "./App.css";
import React, { useEffect, useState} from "react";
import { Home } from "./components/Pages/Home/Home";

function App() {

    const [characters, setCharacters] = useState([]);


    const initialUrl = "https://rickandmortyapi.com/api/character/";


    const search = (e) => {
        // console.log("Se ejecuta evento onChange");
        if(e.target.value === ''){
            fetchCharacters(initialUrl)
            console.log(fetchCharacters(initialUrl))
        }else{
            const nameNew = (e.target.value)
            console.log(nameNew);
            const newURL = initialUrl+'/?name='+nameNew;
            console.log(newURL)
            return fetchCharacters(newURL)
        }

    }

    const fetchCharacters = (url)=>{

        fetch(url)
        .then(response => response.json())
        .then(data => data.results ? setCharacters(data.results): alert("No existe"))
        .catch(error => console.log(error))
    };

    useEffect(() =>{
        fetchCharacters(initialUrl);
    },[]);

    return (

    <div className="App">
        <Home search={search} characters={characters} />
    </div>
);
}

export default App;



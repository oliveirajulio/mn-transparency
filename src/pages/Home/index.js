import "./index.css"
import { Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';




import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Home () {

    const [showinput, setshowinput] = useState(false);
    const [modesearch, setmodesearch] = useState(false);
    const navigate = useNavigate();

    const inputshow = () => {
        setshowinput(!showinput)
        setmodesearch(!modesearch)
    }

    const list = () => {
        navigate("/list");  // Caminho relativo dentro do React Router
      }

    return (
        <div className="container">
            <div className="search">
                <input className={showinput ? "input-show" : "input"} placeholder="Pesquisar Granel"></input>
                <button onClick={inputshow} className={modesearch ? "close" : "menu"}>{modesearch ? <CloseIcon className="ic-menu" /> : <SearchIcon className="ic-menu" />}</button>
            </div>
            <div className="main-center">
                <button className="btn-home"></button>
                <button onClick={list} className="granel-list">VER LISTA DE GRANEL</button>
                <button onClick={list} className="b2"></button>
                <button onClick={list} className="b3"></button>
            </div>
        </div>
    )
}

export default Home
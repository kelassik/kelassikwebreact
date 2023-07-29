import React from "react";
import { styled } from "styled-components";
import Menu from "../Menu/menu";
import BgTopArticle from "../../assets/images/bgtoparticel.png"


function Article(){
    return (
        <Appstyle>
        <div className="menu">
            <p><Menu/></p>
            <img className="ImgBgTop" src={BgTopArticle} alt="imgtop"/>
        </div>

        </Appstyle>
    );
}


export default Article;

const Appstyle= styled.div `

.menu {
    
    >p {
        z-index: 3;
    }
}

.ImgTop {
    z-index: 1;
    display: contents;
    margin: 0;
}
`


import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react";

function NavBar({translator, collection}){

    const [locale, setLocale] = useState("en")

    const strings ={
        en:{
        query: "Idiom Query",
        translate: "DeepL Translate",
        collection: "Idiom Collection",
        button: "Change Language"
        },
        zh:{
        query: "寻找成语",
        translate: "DeepL翻译",
        collection: "成语包",
        button: "更改语言"
        }
    }

    function toggleLocale(){
        if(locale === "en") setLocale("zh");
        else setLocale("en");
    }

    const location = useLocation();

    return (
        <div className="navBar">
            <button className="navButton" onClick={toggleLocale}>{strings[locale].button}</button>
            <Link className={!(location.pathname === "/Chinese-Idiom") ? "navBarLink" : "navSelected"} to="/Chinese-Idiom">{strings[locale].query}</Link>
            <Link className={!(location.pathname === '/Chinese-Idiom/translator') ? "navBarLink" : "navSelected"} to={translator}>{strings[locale].translate}</Link>
            <Link className={!(location.pathname === '/Chinese-Idiom/collection') ? "navBarLink" : "navSelected"} to={collection}>{strings[locale].collection}</Link>
        </div>
    )
}

export default NavBar
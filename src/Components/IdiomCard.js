import React, { useState } from "react";
import translate from "deepl";

function IdiomCard({prop, propFunc}){

    const [text, setText] = useState(prop.word)
    const [hideTranslate, setHide] = useState(false)
    const [hideCollect, setHide2] = useState(true)
    const [showCollected, setCollected] = useState(true)
    const [hideCard, setHide3] = useState(false)

    let exampleText = prop.example
    let newExample = exampleText.replace("～", `《${prop.word}》`)

    const idiomTranslation = {
        free_api: "true",
        text: prop.word,
        target_lang: 'EN',
        auth_key: process.env.REACT_APP_API_KEY,
    }

    function handleTranslate(){
        translate(idiomTranslation).then(res=> setText(res.data.translations[0].text))
        setHide(!hideTranslate)
        setHide2(!hideCollect)
    }

    const newIdiom = {
        chinese: prop.word,
        english: text,
        explanation: prop.explanation,
        example: prop.example
    }

    function handleCollect(){
        fetch('http://localhost:3001/myIdioms', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newIdiom)
        })
        setHide2(!hideCollect)
        setCollected(!showCollected)
        setTimeout(()=> {
            setHide3(!hideCard)
            propFunc(newIdiom)
        }, 3000)
    }

    return (
        <div className={!hideCard ? 'TranslateCard' : 'Show'}>
            <h1>{text}</h1>
            <p>解释:{prop.explanation}</p>
            <p>例子：{newExample}</p>
            <button className={hideTranslate ? "Show": "Hide"} onClick={handleTranslate}>Translate</button>
            <button className={hideCollect ? "Show": "Hide"} onClick={handleCollect}>Add to your collection</button>
            <p className={showCollected ? "Show": "Hide"}>Idiom Collected!</p>
        </div>
    )
}

export default IdiomCard
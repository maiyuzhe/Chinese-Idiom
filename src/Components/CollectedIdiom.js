import React, { useState } from "react";

function CollectedIdiom({prop}){

    const [translation, editTranslation] = useState(prop.english)

    let exampleText = prop.example
    let newExample = exampleText.replace("～", `《${prop.chinese}》`)

    function fixTranslation(e){
      e.preventDefault()
      const newObj = {english: e.target.translate.value}
      fetch(`http://localhost:3001/myIdioms/${prop.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
      })
      .then(res=>res.json())
      .then(data => editTranslation(data.english))
      e.target.reset()
    }


    return (
        <div className='TranslateCard'>
            <h1>{prop.chinese}</h1>
            <h2>{translation}</h2>
            <form onSubmit={fixTranslation}>
                <input placeholder="Fix Translation" name="translate"></input>
            </form>
            <p>例子：{newExample}</p>
            <p>解释:{prop.explanation}</p>
        </div>
    )
}

export default CollectedIdiom
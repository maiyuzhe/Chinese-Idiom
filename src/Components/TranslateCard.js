import translate from "deepl";
import { useState } from 'react';
import chineseToPinyin from 'chinese-to-pinyin';


function TranslateCard(){
    
  const [sentence, setTranslate] = useState("欢迎来到我的网站")
  const [origSent, setOrig] = useState("Welcome to my website")
  
  function handleSubmit(e){
    e.preventDefault()
    const newTranslation ={
      free_api: "true",
      text: e.target.something.value,
      target_lang: 'ZH',
      auth_key: process.env.REACT_APP_API_KEY,
    }
    setOrig(e.target.something.value)
    translate(newTranslation).then(res=> setTranslate(res.data.translations[0].text))
    e.target.reset()
  }

  return (
    <div>
      <div className="defaultDiv">
        <form onSubmit={handleSubmit}>
          <input placeholder='Translate This' name="something"></input>
        </form>
        <h2>English: {origSent}</h2>
        <h3>Pinyin: {chineseToPinyin(sentence)}</h3>
        <h4>Chinese: {sentence}</h4>
      </div>
    </div>
  )
}

export default TranslateCard
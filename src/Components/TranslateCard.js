import translate from "deepl";
import { useState } from 'react';
import chineseToPinyin from 'chinese-to-pinyin';
import ApiKey from "./ApiKey";


function TranslateCard({updateApiKey, apiKey}){
    
  const [sentence, setTranslate] = useState("欢迎来到我的网站");
  const [origSent, setOrig] = useState("Welcome to my website");

  
  function handleSubmit(e){
    e.preventDefault();

    const newTranslation ={
      free_api: "true",
      text: e.target.something.value,
      target_lang: 'ZH',
      auth_key: apiKey,
    };
    setOrig(e.target.something.value);
    translate(newTranslation)
    .then(res=> setTranslate(res.data.translations[0].text))
    .catch(error=> {
      console.log(error);
      updateApiKey(null, true);
    });
    e.target.reset()
  }

  return (
    <div>
      <div className="defaultDiv">
        {!apiKey ? <ApiKey propFunc={updateApiKey}/> : 
        <form onSubmit={handleSubmit}>
          <input placeholder='Translate This' name="something"></input>
        </form>}
        <h2>English: {origSent}</h2>
        <h3>Pinyin: {chineseToPinyin(sentence)}</h3>
        <h4>Chinese: {sentence}</h4>
      </div>
    </div>
  )
}

export default TranslateCard
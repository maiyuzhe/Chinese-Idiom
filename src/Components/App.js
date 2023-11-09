import { Routes,Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import TranslateCard from './TranslateCard'
import IdiomCollection from './IdiomCollection'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import NavBar from './NavBar';

function App() {

  const [myIdioms, setIdioms] = useState([]);
  const [newArray, setArray] = useState([]);
  const [warning, setWarning] = useState(false);
  const [apiKey, setKey] = useState(undefined);

  useEffect(()=>{
      fetch('http://localhost:3001/myIdioms')
      .then(res=>res.json())
      .then(data=> {
          setIdioms([...data]);
          setArray([...data.map(datum=> datum.chinese)]);
      })
      .catch(error=>{
        console.log(error);
        setWarning(true);
      })
  },[]);

  function updateArray(arg1){
    setIdioms([...myIdioms, arg1])
    setArray([...newArray, arg1.chinese])
  };

  function updateApiKey(arg, arg2){
    if(arg2){
      setKey(undefined);
      return
    }
    arg.preventDefault();
    setKey(arg.target.key.value)
  };

  const locationPath = useLocation().pathname

  return (
    <div>
      <NavBar translator={'/Chinese-Idiom/translator'} collection={'/Chinese-Idiom/collection'}/>
      <SwitchTransition mode="out-in">
        <CSSTransition 
          key={locationPath}
          timeout={300}
          classNames="page">
          <Routes location={locationPath}>        
            <Route path="/Chinese-Idiom" element={<Home prop={newArray} propFunc={updateArray}/>}/>
            <Route path="/Chinese-Idiom/translator" element={<TranslateCard apiKey={apiKey} updateApiKey={updateApiKey}/>}/>
            <Route path="/Chinese-Idiom/collection" element={<IdiomCollection apiKey={apiKey} prop={myIdioms} warning={warning}/>}/>
          </Routes>
          </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;

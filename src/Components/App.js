import { Routes,Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import TranslateCard from './TranslateCard'
import IdiomCollection from './IdiomCollection'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import NavBar from './NavBar';

function App() {

  const [myIdioms, setIdioms] = useState([])
  const [newArray, setArray] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3001/myIdioms')
      .then(res=>res.json())
      .then(data=> {
          setIdioms([...data])
          setArray([...data.map(datum=> datum.chinese)])
      })
  },[])
  function updateArray(arg1){
    setIdioms([...myIdioms, arg1])
    setArray([...newArray, arg1.chinese])
  }

  const locationPath = useLocation().pathname

  return (
    <div>
      <NavBar translator={'/translator'} collection={'/collection'}/>
      <SwitchTransition mode="out-in">
        <CSSTransition 
          key={locationPath}
          timeout={300}
          classNames="page">
          <Routes location={locationPath}>        
            <Route path="/" element={<Home prop={newArray} propFunc={updateArray}/>}/>
            <Route path="/translator" element={<TranslateCard />}/>
            <Route path="/collection" element={<IdiomCollection prop={myIdioms}/>}/>
          </Routes>
          </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;

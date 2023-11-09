import { useEffect, useState } from 'react';
import IdiomList from './IdiomList';
import IdiomSearch from './IdiomSearch';

function Home({prop, propFunc, apiKey}) {

  const [idiomArray, setIdioms] = useState([])
  const [idiomFilter, setFilter] = useState(null)

  useEffect(()=> {
    fetch(`https://raw.githubusercontent.com/pwxcoo/chinese-xinhua/master/data/idiom.json`)
    .then(res=>res.json())
    .then(data=> setIdioms([...data]))
  },[])

  function queueIdiom(arg1){
    setFilter(arg1)
  }


  const idiomsToDisplay = idiomArray.filter(idiom=> !prop.includes(idiom.word))
  .filter(idiom => idiom.word.includes(idiomFilter))

  return (
    <div>
      <h1>Chinese Idiom Collector</h1>
      <IdiomSearch propFunc={queueIdiom}/>
      <IdiomList apiKey={apiKey} props={idiomsToDisplay} propFunc={propFunc}/>
    </div>
  );
}

export default Home;

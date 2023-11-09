import IdiomCard from "./IdiomCard"

function IdiomList({props, propFunc, apiKey}){
    return (
        <div className="idiomList">
            {props.map(idiom => (<IdiomCard apiKey={apiKey} prop={idiom} key={idiom.word} propFunc={propFunc}/>))}
        </div>
    )
}

export default IdiomList
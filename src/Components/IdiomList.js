import IdiomCard from "./IdiomCard"

function IdiomList({props, propFunc}){
    return (
        <div className="idiomList">
            {props.map(idiom => (<IdiomCard prop={idiom} key={idiom.word} propFunc={propFunc}/>))}
        </div>
    )
}

export default IdiomList
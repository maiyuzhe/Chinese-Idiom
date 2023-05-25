import CollectedIdiom from "./CollectedIdiom";

function IdiomCollection({prop}){

    return (
        <div>
            <div className="idiomList">
                {prop.map(idiom=> <CollectedIdiom prop={idiom} key={idiom.english}/>)}
            </div>
        </div>
    )
}

export default IdiomCollection
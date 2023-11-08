import CollectedIdiom from "./CollectedIdiom";
import EnableServer from "./EnableServer";

function IdiomCollection({prop, warning}){

    return (
        <div>
            <div className="idiomList">
                {warning ? <EnableServer/> : ""}
                {prop.map(idiom=> <CollectedIdiom prop={idiom} key={idiom.english}/>)}
            </div>
        </div>
    )
}

export default IdiomCollection
function IdiomSearch({propFunc}){
    function handleChange(e){
        if(e.target.value === "")
            propFunc(null)
        else{
            propFunc(e.target.value)
        }
    }

    return (
        <div>
            <form>
                <input className="idiomSearch" onChange={handleChange} placeholder="寻找"></input>
            </form>
        </div>
    )
}

export default IdiomSearch
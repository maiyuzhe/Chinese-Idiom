function ApiKey({propFunc}){
  return (
    <div>
      <h2>Please enter API Key to use Translation functionality.</h2>
      <form onSubmit={(e) => propFunc(e)}>
        <input placeholder="Enter API Key" name="key"></input>
      </form>
    </div>
  )
}

export default ApiKey;
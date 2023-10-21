import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/auth")     //fetches the /members route
    .then(
      res => res.json()  //we put the data in json
    ).then(
      data => {
        setData(data)       // we update our data variable from use State
        console.log(data)
      })
  }, [])  // the brackets only run it once

  return (
    <div className="App">
      {(typeof data.auth_url === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        data.auth_url.map((auth_url, i) => (
          <p key={i}>{auth_url}</p>
        ))
      )}

    </div>
  );
}

export default App;

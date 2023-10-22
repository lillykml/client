import React, {useState, useEffect} from 'react'
import User from '../components/user'

function Old() {

  const [data, setData] = useState([{}])
  const [user, setUser] = useState([{}])

  useEffect(() => {
    fetch("/members")     //fetches the /members route
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
      <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      </div>
    </div>
  );
}

export default Old;

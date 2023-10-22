import React, {useState, useEffect} from 'react'

function Old() {

  const [steps, setSteps] = useState([{}])

  useEffect(() => {
    fetch("/current_steps") 
    .then(res => res.json())
    .then(
      data => {
        setSteps(data)
        console.log(data)
      })
  }, []);

  return (
    <div>
      <h1>Current Steps are {steps.current_steps}</h1>
    </div>
  );
}

export default Old;

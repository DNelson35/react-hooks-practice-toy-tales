import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onSubmit(e, obj){
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(resp => setToys([...toys, resp]))
  }

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(resp => setToys(resp))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onSubmit={onSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;

import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  const toyList = toys.map((toy) => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} />)

  function fileteredToys(deletedToy){
    setToys(toys.filter(toy => (toy.id !== deletedToy.id)))
  }

  function handleDelete(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => fileteredToys(toy))
  }
  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;

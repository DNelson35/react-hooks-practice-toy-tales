import React, { useState } from "react";

function ToyCard({toy, handleDelete}) {
  const {name, image, likes} = toy;
  const [curLikes, setcurLikes] = useState(likes)
  
  const handleLikeBtn = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: curLikes + 1}),
    })
    .then(res => res.json())
    .then(res => setcurLikes(res.likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{curLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeBtn}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(toy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

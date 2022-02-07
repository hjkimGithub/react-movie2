import React from 'react';

// function Food(props) {
//   return <h1>I like {props.fav}</h1>
// }
function Food({favorite}) {
  return <h1>I like {favorite}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="kimchi" />
      <Food favorite="pizza" />
      <Food favorite="chicken" />
      <Food favorite="galbi" />
    </div>
  );
}

export default App;

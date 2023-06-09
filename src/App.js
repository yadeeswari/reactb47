// function App () {

//   //javascript
//   //console.log('hello from component');

//   const now = new Date();
//   const a =10;
//   const b =20;

//   console.log(now, a+b);
//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   );
// }

// export default App;

import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

function Hello(props) {
  // console.log(props);
  return (
    <div>
      <p>Hello World {props.name}, you are {props.age} years 0git ld!</p>
    </div>
  )
}

function App () {

  const age =10;

  return (
    <div>
      <h1>Greetings</h1>
      <hello name='yadees'/>
      <Hello name='eswari'/>
    </div>
  )
}
export default App





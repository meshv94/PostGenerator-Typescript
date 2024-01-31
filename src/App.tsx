// import React from 'react';
import GlobalContext from './globalContext/GlobalContext';
import Form from './components/form/Form';
// import Todo from './components/Todo';


function App() {

  return (
    <div>
      <GlobalContext>
          <Form/>
          {/* <Todo/> */}
      </GlobalContext>
      
    </div>
  );
}

export default App;

 import React from 'react';
 import TrainerList from '../containers/trainer-list';
 import TrainerDetails from '../containers/trainer-details';
 import '../../src/index.css';

 const App=()=>(
     <div>
         <h2> Trainer List-Murthy Infotek</h2>
         <TrainerList/>
         <hr/>
         <TrainerDetails/>
     </div>
 );
 export default App;
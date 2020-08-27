import React from 'react';


        const App = ({lst}) => (
            <ul>
                {lst.map((item, i) => <li key={i}>{item}</li>)}
                
            </ul>
        
        )
    
export default App;

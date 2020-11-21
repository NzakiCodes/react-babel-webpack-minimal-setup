import React from 'react';
import ReactDOM from 'react-dom';
const App = ()=>(
    <div>
        Hello Webpack React
    </div>
);

ReactDOM.render(<App/>,document.querySelector('.app'));
if(module.hot){
    module.hot.accept();
}
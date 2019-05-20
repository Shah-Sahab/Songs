import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

// const renderTag = () => {
//     return (
//         <Provider store={createStore(reducers)}>
//             <App />
//         </Provider>
//     );
// }

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
        <App />
    </Provider>,
    document.querySelector('#root')
);

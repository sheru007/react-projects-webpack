import ReactDOM from 'react-dom/client'
import './index.scss';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<h1>hii webpack from react.</h1>)
root.render(<App />)
// root.render(React.createElement('h1', null, 'hellow world from react'))
console.log(">>> webpack is back updated")
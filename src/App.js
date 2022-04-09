import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { NavLink } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

function App() {
    return (
        <div className='app'>
            <div className="max-w-screen-sm">
                <Main />
                
            </div>
        </div>
    );
}

export default App;

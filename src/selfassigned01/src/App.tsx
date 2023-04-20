import { useState } from 'react';
import Login from './components/Login';
import './styles/App.css';
import Registration from './components/Registration';
import Form from './components/Form';

function App() {
	/*const [currentForm, setCurrentForm] = useState('login');

	const content = currentForm === 'registration' ? <Login /> : <Registration />;
	//*/
	const content = <Form />;
	return content;
}

export default App;

import { FormEvent, useState } from 'react';
import '../styles/Login.css';

const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleReset = () => {
		setUsername('');
		setPassword('');
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(`user: ${username}, password: ${password}`);
	};

	const content = (
		<div>
			<form action='' className='login' onSubmit={handleSubmit}>
				<label htmlFor='login__username'>Username</label>
				<input
					value={username}
					type='text'
					id='login__username'
					name='login__username'
					className='login__content'
					placeholder='Insert username...'
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<label htmlFor='login__password'>Password</label>
				<input
					value={password}
					type='password'
					id='login__password'
					name='login__password'
					className='login__content'
					placeholder='Insert password...'
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div>
					<button
						type='reset'
						id='login__reset'
						className='login__content'
						onClick={handleReset}
					>
						Reset
					</button>
					<button type='submit' id='login__submit' className='login__content'>
						Login
					</button>
				</div>
				<p>
					Don't have an account? Register{' '}
					<span
						id='login__register'
						onClick={() => {
							console.log('ciao');
						}}
					>
						here
					</span>
				</p>
			</form>
		</div>
	);

	return content;
};

export default Login;

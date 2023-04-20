import '../styles/Registration.css';
import { ChangeEvent, FormEvent, useReducer, useState } from 'react';

// here we declare the initial state of our components
const initState = {
	lastName: '',
	firstName: '',
	username: '',
	email: '',
	password: '',
	rptPassword: '',
};
const enum REDUCER_ACTION_TYPE {
	ENTER_LAST_NAME,
	ENTER_FIRST_NAME,
	ENTER_USERNAME,
	ENTER_EMAIL,
	ENTER_PASSWORD,
	RPT_PASSWORD,
	RESET_FORM,
	SIGN_IN,
}
type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
	payload?: string;
};

const reducer = (
	state: typeof initState,
	action: ReducerAction
): typeof initState => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.ENTER_LAST_NAME:
			return { ...state, lastName: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.ENTER_FIRST_NAME:
			return { ...state, firstName: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.ENTER_USERNAME:
			return { ...state, username: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.ENTER_EMAIL:
			return { ...state, email: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.ENTER_PASSWORD:
			return { ...state, password: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.RPT_PASSWORD:
			return { ...state, rptPassword: action.payload ?? '' };
		case REDUCER_ACTION_TYPE.RESET_FORM:
			return {
				...state,
				lastName: '',
				firstName: '',
				username: '',
				email: '',
				password: '',
				rptPassword: '',
			};
		case REDUCER_ACTION_TYPE.SIGN_IN:
			/* qui è da inserire la funzione per inviare i dati al database per il signin e la verifica di duplicati */
			console.log('Dati inviati correttamente!');
			console.log(
				`I dati inseriti sono i seguenti: [${state.lastName}, ${state.firstName}, ${state.username}, ${state.email}, ${state.password}, ${state.rptPassword}]`
			);

			return {
				...state,
				lastName: '',
				firstName: '',
				username: '',
				email: '',
				password: '',
				rptPassword: '',
			};
		default:
			throw new Error();
	}
};

const Registration = () => {
	const [confirm, setConfirm] = useState<boolean>(false);
	const [state, dispatch] = useReducer(reducer, initState);
	const handleLastNameInput = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(typeof handleLastNameInput);

		dispatch({
			type: REDUCER_ACTION_TYPE.ENTER_LAST_NAME,
			payload: e.target.value,
		});
	};
	const handleFirstNameInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE.ENTER_FIRST_NAME,
			payload: e.target.value,
		});
	};
	const handleUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
		let keyPressed = e.target.value;
		dispatch({
			type: REDUCER_ACTION_TYPE.ENTER_USERNAME,
			payload: e.target.value,
		});
	};
	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE.ENTER_EMAIL,
			payload: e.target.value,
		});
	};
	const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE.ENTER_PASSWORD,
			payload: e.target.value,
		});
	};
	const handleRptPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE.RPT_PASSWORD,
			payload: e.target.value,
		});
	};
	const handleResetForm = () => {
		dispatch({ type: REDUCER_ACTION_TYPE.RESET_FORM });
	};
	const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
		dispatch({ type: REDUCER_ACTION_TYPE.SIGN_IN });
		setConfirm(true);
		e.preventDefault();
	};

	const signinResult = confirm ? (
		<h2>You have successfully signed in</h2>
	) : (
		<h2>Error during the sign in</h2>
	);
	const content = (
		<div>
			<form action='' className='registration' onSubmit={handleSignIn}>
				<label htmlFor='registration__lastname'>Last Name</label>
				<input
					type='text'
					id='registration__lastname'
					name='registration__lastname'
					className='registration__content'
					placeholder='Insert last name...'
					onChange={handleLastNameInput}
				/>
				<label htmlFor='registration__firstname'>First Name</label>
				<input
					type='text'
					id='registration__firstname'
					name='registration__firstname'
					className='registration__content'
					placeholder='Insert first name...'
					onChange={handleFirstNameInput}
				/>
				<label htmlFor='registration__username'>Username</label>
				<input
					type='text'
					id='registration__username'
					name='registration__username'
					className='registration__content'
					placeholder='Insert username...'
					onChange={handleUsernameInput}
				/>
				<label htmlFor='registration__email'>e-mail</label>
				<input
					type='email'
					id='registration__email'
					name='registration__email'
					className='registration__content'
					placeholder='Insert a valid email address...'
					onChange={handleEmailInput}
				/>
				<label htmlFor='registration__password'>Password</label>
				<input
					type='password'
					id='registration__password'
					name='registration__password'
					className='registration__content'
					placeholder='Insert password...'
					onChange={handlePasswordInput}
				/>
				<label htmlFor='registration__rptpassword'>Re-enter the Password</label>
				<input
					type='password'
					id='registration__rptpassword'
					name='registration__rptpassword'
					className='registration__content'
					placeholder='Re-enter the password...'
					onChange={handleRptPasswordInput}
				/>
				<div>
					<button
						type='reset'
						id='registration__reset'
						className='registration__content'
						onClick={handleResetForm}
					>
						Reset
					</button>
					<button
						type='submit'
						id='registration__submit'
						className='registration__content'
					>
						Sign in
					</button>
				</div>
				<p>
					Already have an account?&nbsp;
					<span
						id='registration__login'
						onClick={() => {
							console.log('ciao');
						}}
					>
						Login here
					</span>
				</p>
			</form>
		</div>
	);

	return content;
};

export default Registration;

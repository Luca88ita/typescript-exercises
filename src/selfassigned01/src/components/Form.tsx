import '../styles/Form.css';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import Input from './Input';

const buttons = (
	resetButtonValue: string,
	submitButtonValue: string
): ReactElement => {
	const buttons = (
		<>
			<div>
				<button type='reset' id='reset__button' className='input__content'>
					{resetButtonValue}
				</button>
				<button type='submit' id='input__submit' className='input__content'>
					{submitButtonValue}
				</button>
			</div>
		</>
	);
	return buttons;
};

const Form = () => {
	const [inputValue, setInputValue] = useState<string>('');

	const handleReset = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputValue('');
		console.log(inputValue);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInputValue('');
		console.log(inputValue);
	};

	return (
		<form
			className='credentials__form'
			action=''
			onSubmit={handleSubmit}
			onReset={handleReset}
		>
			<Input
				label={'Last Name'}
				type={'text'}
				placeholder={'Insert last name...'}
				idName={'registration__lastname'}
			/>{' '}
			<Input
				label={'First Name'}
				type={'text'}
				placeholder={'Insert first name...'}
				idName={'registration__firstname'}
			/>{' '}
			<Input
				label={'Username'}
				type={'text'}
				placeholder={'Insert username...'}
				idName={'registration__username'}
			/>
			<Input
				label={'E-mail'}
				type={'email'}
				placeholder={'Insert a valid e-mail address...'}
				idName={'registration__email'}
			/>
			<Input
				label={'Password'}
				type={'password'}
				placeholder={'Insert a safe password...'}
				idName={'registration__password'}
			/>
			<Input
				label={'Re-enter the password'}
				type={'password'}
				placeholder={'Re-enter the password...'}
				idName={'registration__rptpassword'}
			/>
			{buttons('Reset', 'Sign In')}
		</form>
	);
};

export default Form;

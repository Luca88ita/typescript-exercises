import { ChangeEvent, ReactElement, useState } from 'react';

const inputField = (
	label: string,
	value: string,
	type: string,
	placeholder: string,
	idName: string,
	handleFunctionName: (e: ChangeEvent<HTMLInputElement>) => void
): ReactElement => {
	const inputField = (
		<>
			<label htmlFor={idName}>{label}</label>
			<input
				value={value}
				type={type}
				id={idName}
				name={idName}
				className='input__content'
				placeholder={placeholder}
				onChange={handleFunctionName}
			/>
		</>
	);
	return inputField;
};

type PropsType = {
	label: string;
	type: string;
	placeholder: string;
	idName: string;
};

const Input = ({ label, type, placeholder, idName }: PropsType) => {
	const [inputValue, setInputValue] = useState<string>('');
	const prova = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		console.log(`${idName} ==> ${inputValue}`);
	};

	return <>{inputField(label, inputValue, type, placeholder, idName, prova)}</>;
};

export default Input;

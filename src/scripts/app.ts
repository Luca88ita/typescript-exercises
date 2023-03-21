const button = document.querySelector('button');

const clickHandler = (message: string) => {
	console.log('Button clicked! ' + message);
};

button?.addEventListener('click', clickHandler.bind(null, 'Bravo!'));

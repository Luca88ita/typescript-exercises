let logged;

const sendAnalytics = (data: string) => {
	console.log(data);
	logged = true;
	logged = 'max';
	console.log(logged);
};

sendAnalytics('The data');

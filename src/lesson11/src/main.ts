import './css/style.css';
import FullList from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
	// here we get the instances of the FullList and ListTemplate
	const fullList = FullList.instance;
	const template = ListTemplate.instance;

	const itemEntryForm = document.getElementById(
		'itemEntryForm'
	) as HTMLFormElement;

	//we put a listener on our item form when a new item is added
	itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
		event.preventDefault(); // to prevent the page reload
		const input = document.getElementById('newItem') as HTMLInputElement;
		const newEntryText = input.value.trim();
		if (!newEntryText.length) return;

		const itemId: number = fullList.list.length
			? parseInt(fullList.list[fullList.list.length - 1].id) + 1
			: 1;
		const newItem = new ListItem(itemId.toString(), newEntryText);

		fullList.addItem(newItem);
		template.render(fullList);
		input.value = '';
	});

	// here we call a button which clears the list and the JSON
	const clearItems = document.getElementById(
		'clearItemsButton'
	) as HTMLButtonElement;
	clearItems.addEventListener('click', (): void => {
		fullList.clearList();
		template.clear();
	});

	// this part loads the list and renders it when the app is first launched
	fullList.load();
	template.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);

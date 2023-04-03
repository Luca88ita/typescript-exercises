import ListItem from './ListItem';

interface List {
	list: ListItem[];
	load(): void;
	save(): void;
	clearList(): void;
	addItem(itemObj: ListItem): void;
	removeItem(id: string): void;
}

export default class FullList implements List {
	static instance: FullList = new FullList(); // I`m doing this because I`m going to have only one list per application

	private constructor(private _list: ListItem[] = []) {}
	//getter
	public get list(): ListItem[] {
		return this._list;
	}
	load(): void {
		//retrieves everything from local storage if present
		const storedList: string | null = localStorage.getItem('myList');
		if (typeof storedList !== 'string') return;

		// created new items from the parsed list
		const parsedList: { _id: string; _item: string; _checked: boolean }[] =
			JSON.parse(storedList);
		parsedList.forEach((itemObj) => {
			const newListItem = new ListItem(
				itemObj._id,
				itemObj._item,
				itemObj._checked
			);
			FullList.instance.addItem(newListItem);
		});
	}
	save(): void {
		localStorage.setItem('myList', JSON.stringify(this._list));
	}
	clearList(): void {
		this._list = [];
		this.save();
	}
	addItem(itemObj: ListItem): void {
		this._list.push(itemObj);
		this.save();
	}
	removeItem(id: string): void {
		this._list = this._list.filter((item) => item.id !== id);
		this.save();
	}
}

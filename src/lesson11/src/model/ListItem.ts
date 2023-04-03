export interface Item {
	id: string;
	item: string;
	checked: boolean;
}

export default class ListItem implements Item {
	// constructor
	constructor(
		private _id: string = '',
		private _item: string = '',
		private _checked: boolean = false
	) {}
	// getters
	public get id(): string {
		return this._id;
	}
	public get item(): string {
		return this._item;
	}
	public get checked(): boolean {
		return this._checked;
	}
	// setters
	public set id(id: string) {
		if (typeof id === 'string') {
			this._id = id;
			return;
		} else throw new Error('Param is not a string');
	}
	public set item(item: string) {
		if (typeof item === 'string') {
			this._item = item;
			return;
		} else throw new Error('Param is not a string');
	}
	public set checked(checked: boolean) {
		if (typeof checked === 'boolean') {
			this._checked = checked;
			return;
		} else throw new Error('Param is not a string');
	}
}

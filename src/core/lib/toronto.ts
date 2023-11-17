export class Toronto {
	private root: HTMLElement | null;
	private map = new Map<number, CustomDivElement>();
	constructor(root: string) {
		this.root = document.querySelector(`${root}`);
		this.init();
	}

	createAndInsertElement() {
		const indexForElement = this.map.size;
		const element = new CustomDivElement(indexForElement);
		const htmlElement = element.create();

		this.map.set(indexForElement, element);

		this.root?.append(htmlElement);

		return this;
	}

	removeElement(index: number) {
		this.map.delete(index);
	}

	private init() {
		if (this.map.size === 0) {
			this.createAndInsertElement();
		}
		this.root?.addEventListener("click", (event: MouseEvent) => {
			const target = event.target as HTMLDivElement;

			
		});
	}
}

class CustomDivElement {
	index: number;
	constructor(index: number) {
		this.index = index;
	}

	create() {
		const newElement = document.createElement("div");
		newElement.classList.add("view-line");
		newElement.dataset.indexNumber = String(this.index);

		return newElement;
	}

	get indexOfElement() {
		return this.index;
	}

	set indexOfElement(index: number) {
		this.index = index;
	}
}

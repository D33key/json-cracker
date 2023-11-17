export class Toronto {
	private root: HTMLElement | null;
	private map = new Map<number, CustomDivElement>();
	constructor(root: string) {
		this.root = document.querySelector(root);
		this.init();
	}

	createAndInsertElement() {
		if (!this.root) {
			throw new Error("Root element not found.");
		}
		const indexForElement = this.map.size;
		const element = new CustomDivElement(indexForElement);
		const htmlElement = element.create();

		this.map.set(indexForElement, element);

		this.root.append(htmlElement);

		return this;
	}

	removeElement(index: number) {
		const elementToRemove = this.map.get(index);
		if (elementToRemove) {
			elementToRemove.destroy();
			this.map.delete(index);
		}
	}

	private init() {
		if (!this.root) {
			throw new Error("Root element not found.");
		}
		if (this.map.size === 0) {
			this.createAndInsertElement();
		}
		this.root.addEventListener("click", (event: MouseEvent) => {
			const target = event.target as HTMLDivElement;

			if (target && target.classList.contains("view-line")) {
				const indexOfTarget = Number(target.dataset.indexNumber);
				const getCustomDivElement = this.map.get(indexOfTarget);
				getCustomDivElement?.editable();
			}
		});
	}
}

class CustomDivElement {
	index: number;
	newElement: HTMLDivElement;
	constructor(index: number) {
		this.index = index;
		this.newElement = document.createElement("div");
	}

	create() {
		this.newElement.classList.add("view-line");
		this.newElement.dataset.indexNumber = String(this.index);

		return this.newElement;
	}

	get indexOfElement() {
		return this.index;
	}

	set indexOfElement(index: number) {
		this.index = index;
	}

	editable() {
		const blurHandler = (ev: FocusEvent) => {
			const element = ev.currentTarget as HTMLDivElement;
			element.removeAttribute("contenteditable");
			element.removeEventListener("blur", blurHandler);
		};

		this.newElement.setAttribute("contenteditable", "true");
		this.newElement.focus();
		this.newElement.addEventListener("blur", blurHandler);
	}

	destroy() {
		if (this.newElement.parentElement) {
			this.newElement.parentElement.removeChild(this.newElement);
		}
	}
}

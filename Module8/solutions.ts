class MyMap<T> {
	private map : {[key: string]: T} = {};

	setItem(key: string, item: T) {
		this.map[key] = item;
	}

	getItem(key: string) {
		return this.map[key];
	}

	clear() {
		this.map = {}
	}

	printMap() {
		for (let key in this.map) {
			console.log(key, this.map[key]);
		}
	}
}


const numberMap = new MyMap<number>();
numberMap.setItem("seedoc", 10);
numberMap.setItem("thenavigo", 10);
console.log(numberMap.getItem("seedoc"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();


const stringMap = new MyMap<string>();
stringMap.setItem("seedoc", "10");
stringMap.setItem("thenavigo", "10");
console.log(stringMap.getItem("seedoc"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
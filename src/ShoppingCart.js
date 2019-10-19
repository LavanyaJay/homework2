class ShoppingCart {
	//constructor function
	constructor(items, totals) {
		this.shoppingItems = [];
		this.totalValue = 0;
	}

	//Fetch Items from Shopping Cart
	getItems() {
		return this.shoppingItems;
	}

	//Add Items to Shopping Cart
	addItem(itemName, quantity, pricePerUnit) {
		const item = {
			name: itemName,
			quantity: quantity,
			pricePerUnit: pricePerUnit
		};

		this.shoppingItems.push(item);
	}

	//Clear Items in Shopping Cart
	clear() {
		this.shoppingItems.length = 0;
	}

	//Update total value in Shopping Cart
	total() {
		this.totalValue = this.shoppingItems.reduce((total, item) => {
			return total + item.quantity * item.pricePerUnit;
		}, 0);

		return this.totalValue;
	}
}

module.exports = ShoppingCart;

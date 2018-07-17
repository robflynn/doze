class SetList {
    constructor(items) {
        if (!arguments.length) {
            this._items = [];           
        } else {
            if (Array.isArray(items)) {
                this._items = items;
            } else {
                this._items = items.trim().split(' ');
            }
        }        
    }

    get count() {
        return this._items.length;
    }

    get items() {
        return this._items;
    }

    set items(newItems) {
        this._items = [];

        for (var i = 0; i < newItems.length; i++) {
            if (this._items.indexOf(newItems[i]) == -1) {
                this._items.push(newItems[i]);
            }
        }
    }

    add(item) {
        if (!this.contains(item)) {
            this._items.push(item);
        }
    }

    remove(item) {
        if (this.contains(item)) {
            this._items.splice(this._items.indexOf(item), 1);
        }
    }

    toggle(item) {
        if (this.contains(item)) {
            this.remove(item);
        } else {
            this.add(item);
        }
    }

    contains(item) {        
        return this._items.indexOf(item) >= 0;
    }

    item(index) {
        if (item > this._items.length) {
            return null;
        }

        return this._items[index];
    }
}

module.exports = {
    SetList
}

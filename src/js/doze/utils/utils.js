const SetListEvent = {
    Added: "added",
    Removed: "removed"
}

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

        this._listeners = [];
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

            this.fireEvent(SetListEvent.Added, item);

            return true;
        }

        return false;
    }

    remove(item) {
        if (this.contains(item)) {
            this._items.splice(this._items.indexOf(item), 1);

            this.fireEvent(SetListEvent.Removed, item);

            return true;
        }

        return false;
    }

    toggle(item) {
        if (this.contains(item)) {
            return this.remove(item);
        } else {
            return this.add(item);
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

   addListener(listener) {
        this._listeners.push(listener);
    }

    removeListener(listener) {
        let index = this._listeners.indexOf(listener);

        if (index >= 0) {
            this._listeners.splice(index, 1);
        }
    }

    fireEvent(event, data) {
        this._listeners.forEach(listener => {
            if (listener) {
                listener(event, data);
            }
        });
    }
}



module.exports = {
    SetList,
    SetListEvent
}

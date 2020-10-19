import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(sale?: number): number {
        let sum: number = 0;
        this._items.forEach(item => {
            sum += item.price
        })
        if (sale) {
            return sum -= sum * sale / 100
        }
        return sum
    }

    deleteProduct(id: number): void {
        this._items.forEach((item, index, array) => {
            if(item.id === id) {
                array.splice(index, 1)
            }
        })
    }
}
/**
 * Created by Asus on 03/06/2022.
 */
export class Image {
    private _id: string;
    private _data: string;

    constructor() {
    }

    getid(): string {
        return this._id;
    }

    setid(value: string) {
        this._id = value;
    }

    getdata(): string {
        return this._data;
    }

    setdata(value: string) {
        this._data = value;
    }
}
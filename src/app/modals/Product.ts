/**
 * Created by Asus on 02/06/2022.
 */
export class Product {
    private _id : string;
    private _name : string;
    private _description: string;
    private _sellingPrice: string;
    private _buyingPrice: string;
    private _state: string;
    private _active: string;
    private _imagesIds: string;
    private _imageUrl: string;
    private _categoryId: string;
    private _siteStockId: string;
    public _urlimg : string;
    constructor() {
    }

    geturlimg(): string {
        return this._urlimg;
    }

    seturlimg(value: string) {
        this._urlimg = value;
    }

    getimageUrl(): string {
        return this._imageUrl;
    }
    setimageUrl(value: string) {
        this._imageUrl = value;
    }
    getid(): string {
        return this._id;
    }

    getname(): string {
        return this._name;
    }

    getdescription(): string {
        return this._description;
    }

    getsellingPrice(): string {
        return this._sellingPrice;
    }

    getbuyingPrice(): string {
        return this._buyingPrice;
    }

    getstate(): string {
        return this._state;
    }

    getactive(): string {
        return this._active;
    }

    getimagesIds(): string {
        return this._imagesIds;
    }

    getcategoryId(): string {
        return this._categoryId;
    }

    getsiteStockId(): string {
        return this._siteStockId;
    }


    setid(value: string) {
        this._id = value;
    }

    setname(value: string) {
        this._name = value;
    }

    setdescription(value: string) {
        this._description = value;
    }

    setsellingPrice(value: string) {
        this._sellingPrice = value;
    }

    setbuyingPrice(value: string) {
        this._buyingPrice = value;
    }

    setstate(value: string) {
        this._state = value;
    }

    setactive(value: string) {
        this._active = value;
    }

    setimagesIds(value: string) {
        this._imagesIds = value;
    }

    setcategoryId(value: string) {
        this._categoryId = value;
    }

    setsiteStockId(value: string) {
        this._siteStockId = value;
    }
}

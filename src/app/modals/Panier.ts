/**
 * Created by Asus on 04/06/2022.
 */
export class Panier {
    private _idProd: string;
    private _nameProd: string;
    private _descriptionProd: string;
    private _sellingPriceProd: string;
    private _buyingPriceProd: string;
    private _stateProd: string;
    private _activeProd: string;
    private _imagesIdsProd: string;
    private _imageUrlProd: string;
    private _categoryIdProd: string;
    private _siteStockIdProd: string;
    private _urlimgProd: string;
    private _compteur: string;

    constructor() {
    }

    getcompteur(): string {
        return this._compteur;
    }

    setcompteur(value: string) {
        this._compteur = value;
    }

    getidProd(): string {
        return this._idProd;
    }

    setidProd(value: string) {
        this._idProd = value;
    }

    getnameProd(): string {
        return this._nameProd;
    }

    setnameProd(value: string) {
        this._nameProd = value;
    }

    getdescriptionProd(): string {
        return this._descriptionProd;
    }

    setdescriptionProd(value: string) {
        this._descriptionProd = value;
    }

    getsellingPriceProd(): string {
        return this._sellingPriceProd;
    }

    setsellingPriceProd(value: string) {
        this._sellingPriceProd = value;
    }

    getbuyingPriceProd(): string {
        return this._buyingPriceProd;
    }

    setbuyingPriceProd(value: string) {
        this._buyingPriceProd = value;
    }

    getstateProd(): string {
        return this._stateProd;
    }

    setstateProd(value: string) {
        this._stateProd = value;
    }

    getactiveProd(): string {
        return this._activeProd;
    }

    setactiveProd(value: string) {
        this._activeProd = value;
    }

    getimagesIdsProd(): string {
        return this._imagesIdsProd;
    }

    setimagesIdsProd(value: string) {
        this._imagesIdsProd = value;
    }

    getimageUrlProd(): string {
        return this._imageUrlProd;
    }

    setimageUrlProd(value: string) {
        this._imageUrlProd = value;
    }

    getcategoryIdProd(): string {
        return this._categoryIdProd;
    }

    setcategoryIdProd(value: string) {
        this._categoryIdProd = value;
    }

    getsiteStockIdProd(): string {
        return this._siteStockIdProd;
    }

    setsiteStockIdProd(value: string) {
        this._siteStockIdProd = value;
    }

    geturlimgProd(): string {
        return this._urlimgProd;
    }

    seturlimgProd(value: string) {
        this._urlimgProd = value;
    }
}
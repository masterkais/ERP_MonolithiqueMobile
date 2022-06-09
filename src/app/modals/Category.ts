export class Category {
    private _id: number;
    private _name: string;
    private _description: string;
    private _idBrand: any;


    constructor() {
    }


    getid(): number {
        return this._id;
    }

    setid(value: number) {
        this._id = value;
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getdescription(): string {
        return this._description;
    }

    setdescription(value: string) {
        this._description = value;
    }

    getidBrand(): any {
        return this._idBrand;
    }

    setidBrand(value: any) {
        this._idBrand = value;
    }
}
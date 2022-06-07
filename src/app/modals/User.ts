/**
 * Created by Asus on 05/06/2022.
 */
export class User {
    private _id: number;
    private _lastName: string;
    private _firstName: string;
    private _adress: string;
    private _fax: string;
    private _email: string;
    private _city: string;
    private _picture: string;
    private _active: boolean;
    private _dateNaissanced: any;
    private _dateCreated: Date;
    private _groupIds: any;
    private _login: string;
    private _password: string;

   /* constructor() {
    }*/

    constructor(id: number, lastName: string, firstName: string, adress: string, fax: string, email: string, city: string, picture: string, active: boolean, dateNaissanced: any, dateCreated: Date, groupIds: any, login: string, password: string) {
        this._id = id;
        this._lastName = lastName;
        this._firstName = firstName;
        this._adress = adress;
        this._fax = fax;
        this._email = email;
        this._city = city;
        this._picture = picture;
        this._active = active;
        this._dateNaissanced = dateNaissanced;
        this._dateCreated = dateCreated;
        this._groupIds = groupIds;
        this._login = login;
        this._password = password;
    }

    getid(): number {
        return this._id;
    }

    setid(value: number) {
        this._id = value;
    }

    getlastName(): string {
        return this._lastName;
    }

    setlastName(value: string) {
        this._lastName = value;
    }

    getfirstName(): string {
        return this._firstName;
    }

    setfirstName(value: string) {
        this._firstName = value;
    }

    getadress(): string {
        return this._adress;
    }

    setadress(value: string) {
        this._adress = value;
    }

    getfax(): string {
        return this._fax;
    }

    setfax(value: string) {
        this._fax = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string) {
        this._email = value;
    }

    getcity(): string {
        return this._city;
    }

    setcity(value: string) {
        this._city = value;
    }

    getpicture(): string {
        return this._picture;
    }

    setpicture(value: string) {
        this._picture = value;
    }

    getactive(): boolean {
        return this._active;
    }

    setactive(value: boolean) {
        this._active = value;
    }

    getdateNaissanced(): any {
        return this._dateNaissanced;
    }

    setdateNaissanced(value: any) {
        this._dateNaissanced = value;
    }

    getdateCreated(): Date {
        return this._dateCreated;
    }

    setdateCreated(value: Date) {
        this._dateCreated = value;
    }

    getgroupIds(): any {
        return this._groupIds;
    }

    setgroupIds(value: any) {
        this._groupIds = value;
    }

    getlogin(): string {
        return this._login;
    }

    setlogin(value: string) {
        this._login = value;
    }

    getpassword(): string {
        return this._password;
    }

    setpassword(value: string) {
        this._password = value;
    }
}
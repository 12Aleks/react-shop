import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor(){
        this._isAuth = false;
        this.test = 'Hello react'
        this._user = {}
        makeAutoObservable(this) // mobx sledit za izmeneniami this i pri ich izmenenii pererendyrivaet komponenty
    }

    //actions kotoryje izmenajut znaczenie kak w vue
    setIsAuth(bool){{
        this._isAuth = bool
    }}
    setUser(user){
        this._user = user
    }

    // getters kotoryje otprowlajut znaczenie s store kak v vue
    get isAuth(){
        return this._isAuth
    }
    get isUser(){
        return this._user
    }
}
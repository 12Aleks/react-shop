import {makeAutoObservable} from "mobx";

export default class DivaceStore{
    constructor(){
       this._types =[
           {id: 1, name: 'Loduwka'},
           {id: 2, name: 'Telefon'},
       ]
        this._brands =[
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices =[
            {id: 1, name: 'IPhone 5', price: 2000, rating: 4, img: 'https://www.mediaexpert.pl/media/cache/gallery/product/2/202/913/613/en4wyuzf/images/20/2008325/Smartfon-APPLE-iPhone-11-Pro-Max-512GB-Space-Gray-tyl-front.jpg'  },
            {id: 2, name: 'IPhone 6', price: 3000, rating: 4, img: 'https://www.mediaexpert.pl/media/cache/gallery/product/2/202/913/613/en4wyuzf/images/20/2008325/Smartfon-APPLE-iPhone-11-Pro-Max-512GB-Space-Gray-tyl-front.jpg'  },
            {id:3, name: 'IPhone 7', price: 4000, rating: 4, img: 'https://www.mediaexpert.pl/media/cache/gallery/product/2/202/913/613/en4wyuzf/images/20/2008325/Smartfon-APPLE-iPhone-11-Pro-Max-512GB-Space-Gray-tyl-front.jpg'  },
            {id: 4, name: 'IPhone 8', price: 5000, rating: 4, img: 'https://www.mediaexpert.pl/media/cache/gallery/product/2/202/913/613/en4wyuzf/images/20/2008325/Smartfon-APPLE-iPhone-11-Pro-Max-512GB-Space-Gray-tyl-front.jpg'  },
        ]
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
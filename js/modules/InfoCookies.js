import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies {

    constructor() {
        // funkcja super() wywołuje odpowiednik w klasie bazowej
        super();
        // właściwość z uchwytem do panelu cookies
        this.infoPlace = document.querySelector('.cookies');

        if(!this.getCookie('Accept')) {
            this.showInfo();
        }
    }
    
    showInfo() {
        this.infoPlace.classList.remove('hide');
        this.infoPlace.classList.add('show');
    }
    
    hideInfo() {
        this.infoPlace.classList.remove('show');
        this.infoPlace.classList.add('hide');
    }

    setCookie() {
        super.setCookie({
            name: 'Accept',
            value: 'yes',
            days: 90
        });
        this.hideInfo();
    }

}
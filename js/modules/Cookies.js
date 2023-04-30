export class Cookies {

    // tworzenie pliku cookie
    // odczyt wartości z pliku cookie
    // usuwanie pliku coockie

    constructor() {
        this.checkCookieEnabled();
    }

    checkCookieEnabled() {
        if(!navigator.cookieEnabled) {
            alert('Masz wyłączoną obsługę cookies...');
            return;
        }
    }

    setCookie(options) {
        const optionsVal = {
            name: options.name || 'test',
            value: options.value || 'wartość testowa',
            days: options.days,
            domain: options.domain,
            path: options.path,
            secure: options.secure
        }

        const cookieName = encodeURIComponent(optionsVal.name);

        const cookieVal = encodeURIComponent(optionsVal.value);

        const cookieSettingsTab = [];

        cookieSettingsTab.push(`${cookieName} = ${cookieVal}`);

        if(typeof options.days === 'number') {

            const date = new Date();

            date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));

            cookieSettingsTab.push(`expires = ${date.toGMTString()}`);

        }

        if(optionsVal.domain) {
            cookieSettingsTab.push(`domain=${optionsVal.domain}`);
        }
        
        if(optionsVal.path) {
            cookieSettingsTab.push(`path=${optionsVal.path}`);
        }
        
        if(optionsVal.secure && typeof optionsVal.secure === 'boolean') {
            cookieSettingsTab.push(`secure=${optionsVal.secure}`);
        }

        console.log(cookieSettingsTab);

        document.cookie = cookieSettingsTab.join(';');

    }

    getCookie(name) {

        if(document.cookie != '') {
            
            const cookies = document.cookie.split(/; */);

            for(let i = 0; i < cookies.length; i++) {
               
                const cookieName = cookies[i].split('=')[0];
                
                const cookieVal = cookies[i].split('=')[1];

                if(decodeURIComponent(cookieName) === name) {
                    
                    return cookieVal;
                
                }
                
            }

        }

    }

    removeCookie(name) {

        this.setCookie({

            name: name,
            days: -1

        });

    }

}
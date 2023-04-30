'use strict';

import { InfoCookies } from "./modules/InfoCookies.js";

const infCookie = new InfoCookies;

const closeLink = document.querySelector('.cookies__close a');

closeLink.addEventListener('click', (e) => {
    e.preventDefault();
    infCookie.setCookie();
});


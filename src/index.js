import { default_page } from "./default.js"
import { menu_page } from "./menu.js"
import { contact_page } from "./contact"

default_page();

let menu = document.querySelector("#menu");
let main_page = document.querySelector("#logo");
let contact = document.querySelector("#contact");

menu.addEventListener("click", go_to_menu);
main_page.addEventListener("click", go_to_default);
contact.addEventListener("click", go_to_contact);


function clean_content() {
    const container = document.querySelector("#content");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function go_to_menu() {
    clean_content();
    menu_page();
    menu = document.querySelector("#menu");
    main_page = document.querySelector("#logo");
    contact = document.querySelector("#contact");
    menu.addEventListener("click", go_to_menu);
    main_page.addEventListener("click", go_to_default);
    contact.addEventListener("click", go_to_contact);
}

function go_to_default() {
    clean_content();
    default_page();
    menu = document.querySelector("#menu");
    main_page = document.querySelector("#logo");
    contact = document.querySelector("#contact");
    menu.addEventListener("click", go_to_menu);
    main_page.addEventListener("click", go_to_default);
    contact.addEventListener("click", go_to_contact);
}

function go_to_contact() {
    clean_content();
    contact_page();
    menu = document.querySelector("#menu");
    main_page = document.querySelector("#logo");
    contact = document.querySelector("#contact");
    menu.addEventListener("click", go_to_menu);
    main_page.addEventListener("click", go_to_default);
}




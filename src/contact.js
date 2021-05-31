function contact_page() {
    const line_breaker = document.createElement("br");

    const content = document.querySelector("#content");  
        const nav = document.createElement("nav");
            const logo = document.createElement("a");
                logo.setAttribute("id", "logo");
                logo.setAttribute("href", "#");
                const vegan = document.createElement("span");
                    vegan.setAttribute("id", "green"); 
                    vegan.textContent = "Vegan";
                logo.appendChild(vegan);
                const icious = document.createElement("span");
                    icious.textContent = "icious";
                logo.appendChild(icious);
            nav.appendChild(logo);

            const main_nav = document.createElement("div");
                main_nav.setAttribute("id", "main-nav");
                const menu_op = document.createElement("a");
                    menu_op.setAttribute("href", "#");
                    menu_op.setAttribute("id", "menu");
                    menu_op.textContent = "Menu";
                main_nav.appendChild(menu_op);
                const contact_op = document.createElement("a");
                    contact_op.setAttribute("href", "#");
                    contact_op.setAttribute("id", "contact");
                    contact_op.textContent = "Contact";
                main_nav.appendChild(contact_op);
            nav.appendChild(main_nav);

        content.appendChild(nav);

    
        const contact = document.createElement("div");
            contact.setAttribute("class", "contact");
            const information = document.createElement("div");
                information.setAttribute("id", "contact-info");
                const template = document.createElement("div");
                    template.setAttribute("id", "template");
                    const header = document.createElement("h3");
                        header.textContent = "Reach us at";
                    template.appendChild(header);
                    const pone = document.createElement("p");
                        pone.textContent = "veganicious@gmail.com";
                    template.appendChild(pone);
                    const ptwo = document.createElement("p");
                        ptwo.textContent = "916 372 485";
                    template.appendChild(ptwo);
                    const pthree = document.createElement("p");
                        pthree.textContent = "Ohio, street 12";
                    template.appendChild(pthree);
                information.appendChild(template);
            contact.appendChild(information);

            const imagery = document.createElement("img");
                imagery.setAttribute("id", "contact-image");
                imagery.setAttribute("src", "Sidebar.jpg");
            contact.appendChild(imagery);

        content.appendChild(contact);

        

}
export { contact_page }
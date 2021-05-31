function menu_page() {
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

        const first = document.createElement("div");
            first.setAttribute("data-aos", "zoom-in-down");
            first.setAttribute("class", "recipes");
            const onel = document.createElement("img");
                onel.setAttribute("src", "Cauli-mix.jpg");
            first.appendChild(onel);
            const oner = document.createElement("img");
                oner.setAttribute("src", "hamburger.jpg");
            first.appendChild(oner);

            const ponel = document.createElement("p");
                ponel.setAttribute("class", "menus_p");
                ponel.setAttribute("style", "left:10vw; top:15vw;");
                ponel.textContent = "Seed gaspacho";
            first.appendChild(ponel);

            const poner = document.createElement("p");
                poner.setAttribute("class", "menus_p");
                poner.setAttribute("style", "left:45vw; top:15vw;");
                poner.textContent = "Vegan hamburger";
            first.appendChild(poner);

        content.appendChild(first);


        const second = document.createElement("div");
            second.setAttribute("data-aos", "zoom-in-down");
            second.setAttribute("class", "recipes");
            const twol = document.createElement("img");
                twol.setAttribute("src", "nachos.jpg");
            second.appendChild(twol);
            const twor = document.createElement("img");
                twor.setAttribute("src", "Pasta.jpg");
            second.appendChild(twor);

            const ptwol = document.createElement("p");
                ptwol.setAttribute("class", "menus_p");
                ptwol.setAttribute("style", "left:10vw; top:15vw;");
                ptwol.textContent = "Mayo Garden";
            second.appendChild(ptwol);

            const ptwor = document.createElement("p");
                ptwor.setAttribute("class", "menus_p");
                ptwor.setAttribute("style", "left:45vw; top:15vw;");
                ptwor.textContent = "Shell pasta";
            second.appendChild(ptwor);

        content.appendChild(second);


        const third = document.createElement("div");
            third.setAttribute("data-aos", "zoom-in-down");
            third.setAttribute("class", "recipes");
            const threel = document.createElement("img");
                threel.setAttribute("src", "green-toast.jpg");
            third.appendChild(threel);
            const threer = document.createElement("img");
                threer.setAttribute("src", "tofu.jpg");
            third.appendChild(threer);

            const pthreel = document.createElement("p");
                pthreel.setAttribute("class", "menus_p");
                pthreel.setAttribute("style", "left:10vw; top:15vw;");
                pthreel.textContent = "Leek toasts";
            third.appendChild(pthreel);

            const pthreer = document.createElement("p");
                pthreer.setAttribute("class", "menus_p");
                pthreer.setAttribute("style", "left:45vw; top:15vw;");
                pthreer.textContent = "Fried tofu";
            third.appendChild(pthreer);

        content.appendChild(third);
}
export { menu_page }
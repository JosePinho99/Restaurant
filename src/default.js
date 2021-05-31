function default_page() {
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


        const image_content = document.createElement("div");
            image_content.setAttribute("id", "image");
            const images = document.createElement("img");
                images.setAttribute("id", "background-image");
                images.setAttribute("src", "Background.jpg");
            image_content.appendChild(images);
 
            const image_text = document.createElement("div");
                image_text.setAttribute("class", "centered");
                const image_sentence = document.createElement("h3");
                    image_sentence.innerHTML = "Explore <br> the rich flavours";
                image_text.appendChild(image_sentence);
            image_content.appendChild(image_text);

        content.appendChild(image_content);


        const logos_content = document.createElement("div");
            logos_content.setAttribute("data-aos", "zoom-in-down");
            logos_content.setAttribute("id", "logos");
            const paw = document.createElement("i");
                paw.setAttribute("class", "fas fa-paw icons");
            logos_content.appendChild(paw);
            const seed = document.createElement("i");
                seed.setAttribute("class", "fas fa-seedling icons");
            logos_content.appendChild(seed);
            const apple = document.createElement("i");
                apple.setAttribute("class", "fas fa-apple-alt icons");
            logos_content.appendChild(apple);
        
        content.appendChild(logos_content);


        const descriptions = document.createElement("div");
            descriptions.setAttribute("data-aos", "zoom-in-down");
            descriptions.setAttribute("id", "descriptions");
            const animals = document.createElement("p");
                animals.innerHTML = "Save the <br> animals";
            descriptions.appendChild(animals);
            const envir = document.createElement("p");
                envir.innerHTML = "The <br> environment";
            descriptions.appendChild(envir);
            const health = document.createElement("p");
                health.innerHTML = "And <br> yourself";
            descriptions.appendChild(health);

        content.appendChild(descriptions);
    

        const foot = document.createElement("div");
            foot.setAttribute("data-aos", "zoom-in-down");
            foot.setAttribute("id", "footer");
            const bottom = document.createElement("p");
                bottom.textContent = "Without sacrificing any flavour";
            foot.appendChild(bottom);

        content.appendChild(foot);
}

export {default_page}
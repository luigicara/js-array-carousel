const slider = document.querySelector(".slider");

const wrapper = document.createElement("div");

wrapper.classList.add("items-container");

slider.append(wrapper);

let div;

for (let i = 1; i < 6; i++) {
    div = document.createElement("div");

    div.classList.add("item");

    div.innerHTML = `<img src="img/0${i}.webp">`

    wrapper.append(div)
}

div = document.querySelector(".item");

div.classList.add("active")

const items = document.getElementsByClassName("item");

const next = document.createElement("div");

next.classList.add("next");

next.innerHTML = "^";

const prev = document.createElement("div");

prev.classList.add("prev", "hidden");

prev.innerHTML = "^";

slider.append(prev, next);

let activeItem = 0;

next.addEventListener('click', 
    
    function() {
        if (activeItem < items.length - 1) {
            items[activeItem].classList.remove('active');

            activeItem++;

            items[activeItem].classList.add('active');

            if (activeItem !== 0) {
                prev.classList.remove("hidden");
            }

            if (activeItem === items.length - 1) {
                next.classList.add("hidden");
            }
        }
    }
)

prev.addEventListener('click', 
    function() {
        if (activeItem > 0) {
            items[activeItem].classList.remove('active');

            activeItem--;

            items[activeItem].classList.add('active');

            if (activeItem === 0) {
                prev.classList.add("hidden");
            }

            if (activeItem < items.length - 1) {
                next.classList.remove("hidden");
            }
        }
    }
)
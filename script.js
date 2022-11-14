const slider = document.querySelector(".slider");

const wrapper = document.createElement("div");

wrapper.classList.add("items-container");

slider.append(wrapper);

for (let i = 1; i < 6; i++) {
    wrapper.innerHTML += `<div class="item"><img src="img/0${i}.webp"></div> `;
}

let div = document.querySelector(".item");

div.classList.add("active")

const items = document.getElementsByClassName("item");

slider.innerHTML += `<div class="prev hidden">^</div>` + `<div class="next">^</div>`;

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

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
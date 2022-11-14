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

slider.innerHTML += `<div class="prev">^</div>` + `<div class="next">^</div>`;

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let activeItem = 0;


next.addEventListener('click', 
    
    function() {
        items[activeItem].classList.remove('active');

        if (activeItem < items.length - 1) {

            activeItem++;

        } else {

            activeItem = 0;

        }

        items[activeItem].classList.add('active');
    }
)

prev.addEventListener('click', 
    function() {
        items[activeItem].classList.remove('active');

        if (activeItem > 0) {

            activeItem--;

        } else {

            activeItem = items.length - 1

        }

        items[activeItem].classList.add('active');
    }
)
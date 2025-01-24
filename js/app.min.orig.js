/////// это проверка браузера на поддержку webp
(() => {
    "use strict";
    !(function (A) {
        let e = new Image();
        (e.onload = e.onerror =
            function () {
                !(function (A) {
                    let e = !0 === A ? "webp" : "no-webp";
                    document.documentElement.classList.add(e);
                })(2 == e.height);
            }),
            (e.src =
                "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })();
})();

////////////////////////
const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".menu .nav__list");
burger.addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".header .menu").classList.toggle("active");
    body.classList.toggle("active");
});
links.forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".burger").classList.toggle("active");
        document.querySelector(".header .menu").classList.toggle("active");
        body.classList.toggle("active");
    });
});
///////// tabs ///////////

const tabs = document.querySelector(".tabs");
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content");

if (tabs) {
    tabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("tabs__btn")) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsBtn.forEach((el) => {
                el.classList.remove("active");
            });
            document
                .querySelector(`[data-tabs-path="${tabsPath}"]`)
                .classList.add("active");
            tabsHandler(tabsPath);
        }
    });
}

const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
        el.classList.remove("active");
    });
    document
        .querySelector(`[data-tabs-target="${path}"]`)
        .classList.add("active");
};

///////////// slider //////////////////////

var swiper = new Swiper(".swiper.tabs__slider", {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,

    navigation: {
        nextEl: ".tabs .swiper-button-next",
        prevEl: ".tabs .swiper-button-prev",
    },
    breakpoints: {
        320: { spaceBetween: 10, slidesPerView: 1.1 },
        600: { spaceBetween: 20, slidesPerView: 2 },
        1025: { spaceBetween: 20, slidesPerView: 3 },
    },
});
var swiper3 = new Swiper(".swiper.swiper-bg", {
    slidesPerView: 1,
    autoplay: { delay: 8000, disableOnInteraction: false },
    speed: 500,
    loop: true,
});

var swiper2 = new Swiper(".map__slider.swiper ", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,

    breakpoints: {
        320: {
            pagination: {
                el: ".map__slider .swiper-pagination",
                clickable: true,
            },
        },
        769: {
            navigation: {
                nextEl: ".map__slider .swiper-button-next",
                prevEl: ".map__slider .swiper-button-prev",
            },
            pagination: {
                el: "#map .swiper-pagination",
                clickable: true,
            },
        },
    },
});
////////////// video ///////////////
const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
    const videoTag = video.querySelector("video");
    const play = video.querySelector(".video__btn");
    play.addEventListener(
        "click",
        function () {
            if (videoTag.paused) {
                videoTag.play();
                play.classList.add("active");
            } else {
                videoTag.pause();
                play.classList.remove("active");
            }
        },
        false
    );
});

///////// accordion/////////////

const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion__item");
    for (const panel of panels) {
        const head = panel.querySelector(".accordion__control");
        head.addEventListener("click", () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove("active");
                }
            }
            panel.classList.toggle("active");
        });
    }
}
///////  modal /////////////////////

const btns = document.querySelectorAll(".about__btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");
const videoAll = document.querySelectorAll("video");
btns.forEach((el) => {
    el.addEventListener("click", (e) => {
        let path = e.currentTarget.getAttribute("data-path");

        modals.forEach((el) => {
            el.classList.remove("modal--visible");
        });
        videoAll.forEach((v) => {
            v.pause();
        });
        document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("modal--visible");
        modalOverlay.classList.add("modal-overlay--visible");
        body.classList.add("active");
    });
});
close.forEach((btn) => {
    btn.addEventListener("click", () => {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
            el.classList.remove("modal--visible");
        });
        videoAll.forEach((v) => {
            v.pause();
        });
        body.classList.remove("active");
    });
});
modalOverlay.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
            el.classList.remove("modal--visible");
        });
        body.classList.remove("active");
        videoAll.forEach((v) => {
            v.pause();
        });
    }
});

/////////// mask valid phone ////////////////

function mask(event) {
    var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
        val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ""
            : a;
    });

    if (event.type == "blur") {
        if (this.value.length < 18) {
            this.value = "";
        }
    } else setCursorPosition(this.value.length, this);
}

const idApplication = document.querySelector("#menu-form");
if (idApplication) {
    phones(idApplication);
}
const idFaq = document.querySelector("#profitability");
if (idFaq) {
    phones(idFaq);
}
function checkName(id) {
    const names = id.querySelectorAll(".form__body input[name='name']");
    names.forEach((name) => {
        if (name.value.length < 2) {
            name.parentNode.classList.add("active");
        }
    });
}

function phones(id) {
    const btn = id.querySelector(".form__btn");
    const telephones = id.querySelectorAll(".form__body input[name='phone']");
    const name = id.querySelector(".form__body input[name='name']");
    let inputValue = id.querySelector("input[name='phone']");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value.length < 2) {
            name.parentNode.classList.add("active");
        } else {
            if (inputValue.value.length < 18) {
                inputValue.parentNode.classList.add("active");
            } else {
                afterForm(id);
            }
        }
    });
    name.addEventListener("input", () => {
        let inputValue = id.querySelector("input[name='name']");
        if (inputValue) {
            inputValue.parentNode.classList.remove("active");
        }
    });
    telephones.forEach((phone) => {
        phone.addEventListener("input", mask);
        phone.addEventListener("input", () => {
            let inputValue = id.querySelector("input[name='phone']");
            if (inputValue) {
                inputValue.parentNode.classList.remove("active");
            }
        });

        phone.addEventListener("focus", mask, false);

        phone.addEventListener("blur", mask, false);
    });
}

function afterForm(id) {
    const contentForm = id.querySelector(".form__body");

    contentForm.innerHTML = `
            <div class="after-send">
              <h3  class="form__title">Спасибо за заявку</h3>
              <p  class="form__text">Мы свяжемся с вами в ближайшее время</p>
              <div class="check"><div/>//
        </div>
            `;
}
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
//////////////////////
const btnUp = {
    el: document.querySelector(".btn-up"),
    show() {
        this.el.classList.remove("btn-up_hide");
    },
    hide() {
        this.el.classList.add("btn-up_hide");
    },
    addEventListener() {
        window.addEventListener("scroll", () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;

            scrollY > 400 ? this.show() : this.hide();
        });

        document.querySelector(".btn-up").onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };
    },
};

btnUp.addEventListener();

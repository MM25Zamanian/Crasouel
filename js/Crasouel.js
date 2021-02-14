(function () {
    const ms = document.querySelectorAll(".Crasouel__main");

    function First_Setup() {
        ms.forEach(m => {
            const sm = m.getAttribute("data-crasouel-sm-grouping");
            const md = m.getAttribute("data-crasouel-md-grouping");
            const lg = m.getAttribute("data-crasouel-lg-grouping");
            const xl = m.getAttribute("data-crasouel-xl-grouping");
            const xxl = m.getAttribute("data-crasouel-xxl-grouping");

            function Sizing() {
                const windowsize = screen.width;
                if (windowsize > 1200) {
                    x(xxl);
                } else if (windowsize <= 1200 && windowsize > 992) {
                    x(xl);
                } else if (windowsize <= 992 && windowsize > 768) {
                    x(lg);
                } else if (windowsize <= 768 && windowsize > 567) {
                    x(md);
                } else if (windowsize <= 567) {
                    x(sm);
                } else {
                    x(1);
                }

                function x(xx) {
                    m.setAttribute("data-crasouel-grouping", xx);
                }
            }
            Sizing();
            window.addEventListener("resize", () => {
                Sizing();
            });
        });
        Setup_Configuration();
    }

    function Setup_Configuration() {
        ms.forEach(m => {
            const im = m.innerHTML;
            m.innerHTML = null;
            const t = document.createElement("div");
            t.classList.add("Crasouel__tracks");
            t.innerHTML = im;
            m.appendChild(t);
            const is = t.querySelectorAll(".Crasouel__item");
            const mw = m.getBoundingClientRect().width;
            let ig = Number(m.getAttribute("data-crasouel-grouping"));
            if (ig == 0) {
                ig = 1;
            }
            is.forEach(i => {
                i.style.width = Math.round(mw / ig);
            });
            const ar = document.createElement("div");
            const air = document.createElement("i");
            const al = document.createElement("div");
            const ail = document.createElement("i");
            air.classList.add("material-icons-round");
            ail.classList.add("material-icons-round");
            ar.classList.add("Crasouel__arrow");
            ar.classList.add("Crasouel__arrow__right");
            al.classList.add("Crasouel__arrow");
            al.classList.add("Crasouel__arrow__left");
            air.innerHTML = "arrow_right";
            ail.innerHTML = "arrow_left";
            ar.appendChild(air);
            al.appendChild(ail);
            m.appendChild(ar);
            m.appendChild(al);
            m.setAttribute("data-crasouel-slide", 1);
        });
        Setup_Event();
    }

    function Setup_Event() {
        ms.forEach(m => {
            const ar = m.querySelector(".Crasouel__arrow__right");
            const al = m.querySelector(".Crasouel__arrow__left");
            const t = m.querySelector(".Crasouel__tracks");
            const i = m.querySelectorAll(".Crasouel__item");
            let msn = Number(m.getAttribute("data-crasouel-slide"));
            let ig = Number(m.getAttribute("data-crasouel-grouping"));
            if (ig == 0) {
                ig = 1;
            }
            ar.addEventListener("click", () => {
                next();
            });
            al.addEventListener("click", () => {
                perv();
            });

            function next() {
                if (msn <= (i.length - ig)) {
                    msn = msn + 1;
                    m.setAttribute("data-crasouel-slide", msn);
                    t.style.transform = "translateX(-" + Number((100 / i.length) * (msn - 1)) + "%)";
                }
            }

            function perv() {
                if (msn > 1) {
                    msn = msn - 1;
                    m.setAttribute("data-crasouel-slide", msn);
                    t.style.transform = "translateX(-" + Number((100 / i.length) * (msn - 1)) + "%)";
                }
            }
        });
    }
    First_Setup();
})();
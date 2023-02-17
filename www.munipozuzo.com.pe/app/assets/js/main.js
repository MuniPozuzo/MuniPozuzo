window.addEventListener('DOMContentLoaded', (event) => {

    // Menu
    const dropdowns = document.querySelectorAll(".app-menu-dropdown, .dropdown-container");
    const hamburger = document.getElementById("btn-hamburger");
    const responsive = document.getElementById("responsive-menu")
    const overlay = document.getElementById("overlay-menu")

    hamburger.addEventListener("click", onHamburgerClick)

    dropdowns.forEach((d) => {
        //d.addEventListener("click", onMouseClick)
        d.addEventListener("mouseenter", onMouseEnter)
        d.addEventListener("mouseleave", onMouseLeave)
    })

    function onMouseEnter(ev) {
        this.classList.add("active")
        overlay.classList.add("active")
    }

    function onMouseLeave(ev) {
        this.classList.remove("active")
        overlay.classList.remove("active")
    }

    function onMouseClick() {
        this.classList.toggle("active")
        overlay.classList.toggle("active")
    }

    function onHamburgerClick() {
        this.classList.toggle("active")
        responsive.classList.toggle("active")
        overlay.classList.toggle("active")
    }


    // SLIDES & OTHER LIBS

    // Slider principal "Inicio"
    let tl = null;
    if (document.querySelector("#cover-swiper")) {
        const progressBar = document.querySelector(".progress-cover")
        const swiperCover = new Swiper("#cover-swiper", {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000, // 5 seconds
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on: {
                init: function() {
                    // console.log("init")
                    tl = TweenMax.to({}, 5, { // 5 seconds
                        force3D: true,
                        onUpdateParams: ["{self}"],
                        onUpdate: function(timeline) {
                            TweenMax.set(progressBar, {
                                scaleX: timeline.progress(),
                                transformOrigin: "0px 0px"
                            });
                        }
                    });
                },
                touchMove: function() {
                    tl.pause();
                },
                touchEnd: function() {
                    tl.restart();
                },
                slideChange: function() {
                    tl.restart();
                },

            }
        });
        // Para accesibilidad Pausar/reanudar
        /* document.querySelector("#cover-swiper").addEventListener("mouseenter", () => {
            swiperCover.autoplay.stop();
            tl.pause();
        })
        document.querySelector("#cover-swiper").addEventListener("mouseleave", () => {
            swiperCover.autoplay.start();
            tl.restart();
        }) */
        function pauseCoverSlide() {
            swiperCover.autoplay.stop();
            tl.pause();
        }

        function startCoverSlide() {
            swiperCover.autoplay.start();
            tl.restart();
        }
    }

    // Slider Noticias "Inicio"
    if (document.querySelector("#swiper-notices")) {
        new Swiper('#swiper-notices', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '#swiper-notices .swiper-button-next',
                prevEl: '#swiper-notices .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                759: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                2000: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }
        });
    }

    // Slider Proyectos "Inicio"
    if (document.querySelector("#swiper-projects")) {
        new Swiper('#swiper-projects', {
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '#swiper-projects .swiper-button-next',
                prevEl: '#swiper-projects .swiper-button-prev',
            },
        })
    }

    // Handle Index active
    function handleIndexOn() {
        if (tl) {
            tl.restart();
        }
    }

    // Visor 'Estructura orgánica'
    if (document.getElementById("estructura-organica")) {
        new Viewer(document.getElementById('estructura-organica'), {
            toolbar: 0,
        });
    }

    // Slider Colecciones "Fondo editorial"
    if (document.querySelector("#swiper-colecciones")) {
        new Swiper('#swiper-colecciones', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-colecciones-wrapp .swiper-button-next',
                prevEl: '.swiper-colecciones-wrapp .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                759: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }
        });
    }

    // Slider libros "Fondo editorial"
    if (document.querySelector("#swiper-libros")) {
        new Swiper('#swiper-libros', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-libros-wrapp .swiper-button-next',
                prevEl: '.swiper-libros-wrapp .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                759: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }
        });
    }

    // Slider libros "Fondo editorial"
    if (document.querySelector("#swiper-imgs-proyecto")) {
        new Swiper('#swiper-imgs-proyecto', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-imgs-proyecto-wrapp .swiper-button-next',
                prevEl: '.swiper-imgs-proyecto-wrapp .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                759: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1600: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }
        });

        // viewer
        const gallery = new Viewer(document.getElementById('swiper-imgs-proyecto'), {
            toolbar: 0,
        });
    }

    // Data Table "Datos generales"
    if (document.getElementById("transparence-table")) {
        const datatable = new JSTable("#transparence-table", {
            perPage: 25,
            perPageSelect: [5, 10, 15, 20, 25, 50, 75, 100],
            labels: {
                placeholder: "Buscar...",
                perPage: "{select}", // items por página
                noRows: "Sin resultados",
                info: "Mostrando {start} - {end} de {rows} documentos",
                loading: "Cargando...",
                infoFiltered: "Mostrando {start} - {end} de {rows} entradas (filtrados de {rowsTotal} documentos)"
            },
            layout: {
                top: "{search}{select}",
                bottom: "{info}{pager}"
            },
        });

        datatable.on("paginate", function(old_page, new_page) {
            // when the data is updated
        });
    }

    if (document.getElementById("visualizer-tabContent")) {
        const panels = document.querySelectorAll("#visualizer-tabContent .tab-pane");
        const tabs = document.querySelectorAll("#tab-previews .nav-link");

        if (panels.length > 0 && tabs.length > 0) {
            tabs[0].classList.add("active");
            panels[0].classList.add("active");
        }
    }

    if (document.getElementById("swiper-preview-project")) {

        const cards = document.querySelectorAll(".card-feature.functionality");

        const swiperProject = new Swiper("#swiper-preview-project", {
            slidesPerView: 1,
            navigation: {
                nextEl: '.arrows-phone .swiper-arrow-next',
                prevEl: '.arrows-phone .swiper-arrow-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })

        swiperProject.on("slideChange", (swiper) => {
            cards.forEach(c => c.classList.remove("secondary-2"));
            cards[swiper.realIndex].classList.add("secondary-2")
        })

        if (cards.length > 0) {
            cards[0].classList.add("secondary-2")
        }

        cards.forEach((card, idx) => {
            card.addEventListener("click", () => {
                swiperProject.slideTo(idx, 1000, false)
            })
        })
    }

    // Lista Subasta / Progress circular
    if (document.getElementById("app-subasta-list-view")) {
        $(".progress-bar").loading();
        $('.card-obra').hover(function() {
            $(".progress-bar").loading();
        });

    }

    // Editor
    const markdownElements = document.getElementsByClassName("markdown-editor");
    if (markdownElements.length > 0) {
        for(var i = 0; i < markdownElements.length; i++) {
            new MdEditor(`#${markdownElements[i].id}`, {
                uploader: 'http://local.dev/Lab/MdEditor/app/upload.php',
                preview: true,
                images: [
                    { id: 1, url: "https://cdn.www.gob.pe/uploads/document/file/1580203/standard_a95f1abae06f26f6d7ca9b575c56eb42_L.jpg.jpg" },
                    { id: 2, url: "https://www.munlima.gob.pe/images/50862310043_35a76af21a_k.jpg" },
                    { id: 3, url: "https://www.munlima.gob.pe/images/Foto_2.jpg" },
                ]
            });
        }
    }

    // Visor 'Comunicado'
    if (document.getElementById("img-comunicado")) {
        new Viewer(document.getElementById('img-comunicado'), {
            toolbar: 0
        });
    }

    // POPUPS
    if (document.querySelectorAll(".popup-img").length > 0) {
        // viewer
        const imgs = document.querySelectorAll(".popup-img");
        // console.log("inicio popup")
        let timeOutPopup = null
        let currentImg = null;
        let currentURI = null
        const gallery = new Viewer(document.getElementById('popup-list'), {
            toolbar: 0,
            loop: true,
            movable: false,
            title: false,
            interval: 7000,
            viewed: handleViewed,
            hide() {
                if (timeOutPopup) {
                    // console.log("limpio")
                    clearTimeout(timeOutPopup)
                }
                if (currentImg) {
                    currentImg.removeEventListener("click", handleClickImage)
                }
            }
        });

        gallery.show();


        function handleViewed(ev) {
            if (timeOutPopup) {
                clearTimeout(timeOutPopup);
            }

            if (currentImg) {
                currentImg.removeEventListener("click", handleClickImage)
                currentURI = null;
            }

            currentImg = document.querySelector(".viewer-canvas img");
            const src = currentImg.getAttribute("src")

            const img = [...imgs].find(item => item.getAttribute("src") == src);
            const datURL = img.getAttribute("data-url");

            if (datURL) {
                currentImg.addEventListener("click", handleClickImage)
                currentImg.classList.add("img-link")
                currentURI = datURL;
            }

            timeOutPopup = setTimeout(() => {
                gallery.next(true);
            }, 7000);
        }

        function handleClickImage(ev) {
            window.open(currentURI)
        }
    }

    // Saneamiento
    document.querySelectorAll(".swiper-gallery").forEach((swipe) => {
        const swiper = new Swiper(`#${swipe.id}`, {
            slidesPerView: 1,
            spaceBetween: 0,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 25
                },
                600: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 25
                },
                991: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 25
                },
                1240: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 25
                },
                1600: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 25
                }
            },
            /* pagination: {
                el: `#${swipe.id} .swiper-pagination`,
                clickable: true,
            }, */
        });

    })

    // Visibility API 
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
        console.warn("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }

    function handleVisibilityChange(ev) {
        if (document[hidden]) {
            console.log("Vista abandonada")

        } else {
            console.log("Vista retomada")
            handleIndexOn();
        }
    }


    // Intersection API
    const optionsIntersection = {
        root: document.body,
        rootMargin: '0px',
        threshold: 0.30
    }

    let observer = new IntersectionObserver(handleIntersection, optionsIntersection);

    document.querySelectorAll(".scroll-item").forEach(el => {
        // console.log(el)
        observer.observe(el);
    })

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            /*  console.log(entry) */
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.classList.add("active-top")
                    /* elem.querySelectorAll(".scroll-item").forEach(item => {
                        item.classList.add("active-top")
                    }) */
                    /* console.log(elem.querySelectorAll(".scroll-item")) */
                if (entry.intersectionRatio >= 0.75) {
                }
            }
        })
    }

});
window.addEventListener("load", async function () {
    if (this.navigator.serviceWorker) {
        await this.navigator.serviceWorker.register("./sw.js")
        console.log("Service worker exist")
    } else {
        console.log("service worker not exist");
    }
})
$('#homeSlider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 4000,
    stagePadding: 0,
    margin: 0,
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".slider-nav-right").click(function (e) {
    e.preventDefault();
    $("#homeSlider").trigger("next.owl.carousel");
});
$(".slider-nav-left").click(function (e) {
    e.preventDefault();
    $("#homeSlider").trigger("prev.owl.carousel");
});

//room slider 
$('#roomsSlider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 4000,
    stagePadding: 0,
    margin: 0,
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".slider-nav-right").click(function (e) {
    e.preventDefault();
    $("#roomsSlider").trigger("next.owl.carousel");
});
$(".slider-nav-left").click(function (e) {
    e.preventDefault();
    $("#roomsSlider").trigger("prev.owl.carousel");
});


/// services tesimonials slider 
$('#testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 800,
    autoplay: false,
    autoplayTimeout: 4000,
    stagePadding: 0,
    margin: 0,
    mouseDrag: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".test-nav-right").click(function (e) {
    e.preventDefault();
    $("#testimonials").trigger("next.owl.carousel");
});
$(".test-nav-left").click(function (e) {
    e.preventDefault();
    $("#testimonials").trigger("prev.owl.carousel");
});

//// 
const checkInLabel = document.querySelector('.check-in'),
    checkOutLabel = document.querySelector('.check-out'),
    checkIn = document.querySelector('#checkIn'),
    checkOut = document.querySelector('#checkOut');

const d = new Date();
var dd = String(d.getDate()).padStart(2, '0');
var tomorrow = String(d.getDate() + 1).padStart(2, '0');
var month = d.toLocaleString('default', { month: 'long' });



if (checkIn) {
    (function () {
        checkInLabel.innerHTML = `${dd} ${month}`
        checkOutLabel.innerHTML = `${tomorrow} ${month}`
    })();

    checkIn.addEventListener('change', () => {
        const customCheck = new Date(checkIn.value).toLocaleString('default', { month: 'long', day: '2-digit' });
        checkInLabel.innerHTML = customCheck;
        console.log(customCheck)
    })

    checkOut.addEventListener('change', () => {
        const customCheck = new Date(checkOut.value).toLocaleString('default', { month: 'long', day: '2-digit' });
        checkOutLabel.innerHTML = customCheck;
        console.log(customCheck)

    })
}

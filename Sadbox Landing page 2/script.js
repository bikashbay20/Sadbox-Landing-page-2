// hamburger menu //
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// owlCarousel //
$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.custom-slider').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
        '<i class="fa fa-angle-right test" aria-hidden="true"></i>',
        '<i class="fa fa-angle-left" aria-hidden="true"></i>'
    ],
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


// $('.loop').owlCarousel({
//     center: true,
//     items:2,
//     loop:true,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });
// $('.nonloop').owlCarousel({
//     center: true,
//     items:2,
//     loop:false,
//     margin:10,
//     responsive:{
//         600:{
//             items:4
//         }
//     }
// });
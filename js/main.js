document.addEventListener('DOMContentLoaded', function() {
    var slidenav = document.querySelectorAll('.sidenav');
    var instances_slidenav = M.Sidenav.init(slidenav);
    var portfolio = document.querySelectorAll('.materialboxed');
    var instances_portfolio = M.Materialbox.init(portfolio);
});


let switchers = document.querySelectorAll('.switcher');
if(localStorage.getItem('theme') == 'white'){
    theme.setAttribute('href', 'css/style.css');
}
else if(localStorage.getItem('theme') == 'black'){
    theme.setAttribute('href', 'css/style_black.css');
}
else{
    localStorage.setItem('theme', 'white')
    theme.setAttribute('href', 'css/style.css');
}
for (let switcher of switchers) {
    switcher.addEventListener('click', function() {
        if (localStorage.getItem('theme') == 'white') {
            localStorage.setItem('theme', 'black')
            switcher.textContent = 'White theme';
            theme.setAttribute('href', 'css/style_black.css');

            var slidenav = document.querySelectorAll('.sidenav');
            slidenav.classList.add('black__theme-sidenav')
        } else {
            localStorage.setItem('theme', 'white')
            switcher.textContent = 'Dark theme';
            theme.setAttribute('href', 'css/style.css');

            var slidenav = document.querySelectorAll('.sidenav');
            slidenav.classList.remove('black__theme-sidenav')
        }

    });
}




// for (let switcher of switchers) {
//     switcher.addEventListener('click', function() {
//         if (switcher.classList.contains('white')) {
//             switcher.classList.remove('white');
//             switcher.classList.add('black');
//             switcher.textContent = 'White theme';
//             theme.setAttribute('href', 'css/style_black.css');

//             var slidenav = document.querySelectorAll('.sidenav');
//             slidenav.classList.add('black__theme-sidenav')
//         } else {
//             switcher.classList.remove('black');
//             switcher.classList.add('white');
//             switcher.textContent = 'Dark theme';
//             theme.setAttribute('href', 'css/style.css');

//             var slidenav = document.querySelectorAll('.sidenav');
//             slidenav.classList.remove('black__theme-sidenav')
//         }

//     });
// }




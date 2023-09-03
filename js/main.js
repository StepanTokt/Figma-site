document.addEventListener('DOMContentLoaded', function() {
    var slidenav = document.querySelectorAll('.sidenav');
    var instances_slidenav = M.Sidenav.init(slidenav);
    var portfolio = document.querySelectorAll('.materialboxed');
    var instances_portfolio = M.Materialbox.init(portfolio);
});


let switchers = document.querySelectorAll('.switcher');

for (let switcher of switchers) {
    switcher.addEventListener('click', function() {
        if (switcher.classList.contains('white')) {
            switcher.classList.remove('white');
            switcher.classList.add('black');
            switcher.textContent = 'White theme';
            theme.setAttribute('href', 'css/style_black.css');
        } else {
            switcher.classList.remove('black');
            switcher.classList.add('white');
            switcher.textContent = 'Dark theme';
            theme.setAttribute('href', 'css/style.css');
        }
    });
}




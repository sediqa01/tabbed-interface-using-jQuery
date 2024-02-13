var tabs = document.querySelectorAll('#tabs > ul > li > a');

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', selectTab)
}

function selectTab(event) {
    event.preventDefault();

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].removeAttribute('class');
    }
    event.target.className = 'active';
}
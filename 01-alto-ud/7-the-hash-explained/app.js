window.addEventListener('hashchange', function() {
    console.log('Hash changed! ', window.location.hash);
    if (window.location.hash === '#/bookmark/1') {
        console.log("Show page 1!");
    } else if (window.location.hash === '#/bookmark/2') {
        console.log("Show page 2!");
    } else if (window.location.hash === '#/bookmark/3') {
        console.log("Show page 3!");
    } else if (window.location.hash === '#/bookmark/4') {
        console.log("Show page 4!");
    }
});

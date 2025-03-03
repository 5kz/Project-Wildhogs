var page = document.getElementById('page');

window.onscroll = function () {
    // Convert vertical scroll into horizontal scroll
    var y = document.body.getBoundingClientRect().top;
    page.scrollLeft = -y;
};

// Adjust the body height when resizing
window.onresize = resize;
// Initial resize
resize();

function resize() {
    var headerHeight = document.querySelector('.header').offsetHeight;
    var footerHeight = document.querySelector('.footer').offsetHeight;
    var fullWidth = page.scrollWidth - window.innerWidth; // Get full scrollable width

    // Ensure the body height accounts for both header and footer
    document.body.style.height = (fullWidth + window.innerHeight + footerHeight) + 'px';
}

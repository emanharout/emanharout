// BEGIN: Animate Underline on Active Nav Item & Hovered Nav Items

const global = {
    currentPage: window.location.pathname
};

function handleNavigatedToNewPage() {
    let currentPage = global.currentPage;

    switch (true) {
        case (currentPage === '/'):
            let homeItem = document.querySelector('#nav-home-item');
            _updateActiveNavItem(homeItem);
            break;
        // Can also check if !== 0, but this checks if path begins with `/blog/`
        case (currentPage.indexOf('/blog/') === 0):
            let blogItem = document.querySelector('#nav-blog-item');
            _updateActiveNavItem(blogItem);
            break;
        case (currentPage.indexOf('/resources/') === 0):
            let resourcesItem = document.querySelector('#nav-resources-item');
            _updateActiveNavItem(resourcesItem);
            break;
        case (currentPage.indexOf('/contact/') === 0):
            let contactItem = document.querySelector('#nav-contact-item');
            _updateActiveNavItem(contactItem);
            break;
    }
}

// Sets active nav `li` element to immediately have underline (no animation when navigating, instantly applies underline)
// Sets non-active nav `li` elements to have animation when hovered on.
// Parameter: The Navigation `li` element to set as active.
function _updateActiveNavItem(navItem) {
    navItem.classList.add('active-nav-item');
    navItem.classList.remove('on-hover-nav-item-animation');

    let navItems = document.querySelectorAll('.nav-list-item');
    navItems.forEach((item) => {
        if (item.id !== navItem.id) {
            item.classList.add('on-hover-nav-item-animation');
            item.classList.remove('active-nav-item');
        }
    });
}

export { 
    handleNavigatedToNewPage,
}

// END: Animate Underline on Active Nav Item & Hovered Nav Items

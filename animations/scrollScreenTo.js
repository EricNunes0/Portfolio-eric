function scrollScreenTo(id) {
    const element = document.getElementsByName(id)[0];
    if(element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
        navMenuClose();
    };
};
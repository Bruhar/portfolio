
const links = document.querySelectorAll('.links');
const linkDestinations = document.querySelectorAll('.linkDestinations');
const tabulations = document.querySelectorAll('.tabulations');
const tabContents = document.querySelectorAll('.tabContent');

const btnStudy = document.getElementById('btnStudy');
const btnCV = document.getElementById('btnCV');


const tabStudy = document.getElementById('tabStudy');

/**
 * Mark the link selected and show the destination according to the link selected
 */
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        link.classList.add('active');
        links.forEach((otherLink, otherIndex) => {
            if (otherIndex !== index) {
                otherLink.classList.remove('active');
            }
        })
        linkDestinations.forEach(destination => {
            const destinationLink = destination.getAttribute('id') + 'Link';
            const sourceLink = link.getAttribute('id');
            if (destinationLink === sourceLink) {
                destination.classList.remove('hidden');
            } else {
                destination.classList.add('hidden');
            }
        })
    })
})

/**
 * Display the tab content according to the selected tab
*/
tabulations.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tab.classList.add('active');
        tabulations.forEach((otherTab, otherIndex) => {
            if (otherIndex !== index) {
                otherTab.classList.remove('active');
            }
        })
        tabContents.forEach(tabContent => {
            const tabContentId = tabContent.getAttribute('id') + 'Tab';
            const sourceLink = tab.getAttribute('id');
            if (tabContentId === sourceLink) {
                tabContent.classList.remove('hidden');
            } else {
                tabContent.classList.add('hidden');
            }
        })
    })
})

/**
 * Display the CV file on new tab
 */
btnCV.addEventListener('click', () => {
    const file = 'files/cv.pdf';
    const new_tab = window.open(file, '_blank');
})
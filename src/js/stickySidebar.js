
import './resizeSensor';
import StickySidebar from 'sticky-sidebar';

export default function stickySidebar() {
    const elements = Array.from(document.querySelectorAll('.js-sticky-sidebar'));

    elements.forEach(element => {
        new StickySidebar(element, {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.account__layout',
            innerWrapperSelector: '.account__sticky-sidebar-inner',
            resizeSensor: true,
            minWidth: 861
        });
    });
}

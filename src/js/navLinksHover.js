import gsap from 'gsap';
import detectIt from 'detect-it';

export default function navLinksHover() {

    if (detectIt.hasTouch) return;
    const cursor = document.createElement('div');
    cursor.classList.add('nav-link-cursor');
    cursor.innerHTML = `
        <div class="nav-link-cursor__inner">
        </div>
    `;
    const innerCursor = cursor.querySelector('.nav-link-cursor__inner');
    document.body.appendChild(cursor);

    let currentActiveLink = null;

    document.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            duration: 0.2,

            left: e.clientX || e.pageX,
            top: e.clientY || e.pageY - pageYOffset,
            overwrite: true
        });


        if (currentActiveLink) {
            console.log('Currently active link present')

            let offsetX = -1 * (currentActiveLink.getBoundingClientRect().left + currentActiveLink.offsetWidth / 2 - e.clientX);
            let offsetY = -1 * (currentActiveLink.getBoundingClientRect().top + currentActiveLink.offsetHeight / 2 - e.clientY);
            const maxOffset = 35;

            if (Math.abs(offsetX) >= maxOffset) {
                if (offsetX > 0) {
                    offsetX = maxOffset;
                } else if (offsetX < 0) {
                    offsetX = -maxOffset;
                }
            }

            gsap.to(currentActiveLink, {
                x: offsetX,
                y: offsetY,
                duration: 0.2,
                overwrite: true
            })
         
        }

      
    });

    const pageHeaderNavLinks = Array.from(document.querySelectorAll('.page-header__nav-link'));


  

    pageHeaderNavLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            currentActiveLink = link;
            link.classList.add('hovered')
            gsap.to(innerCursor, {
                autoAlpha: 1,
                duration: 0.2,
                width: link.offsetWidth * 1.2,
                height: link.offsetWidth * 1.2
            });

          
        });
        link.addEventListener('mouseleave', () => {
            console.log('Mouseenter triggered', link);
            link.classList.remove('hovered')
            currentActiveLink = null;
            gsap.to(innerCursor, {
                autoAlpha: 0,
                duration: 0.2,
                overwrite: true,
                width: 60,
                height: 60
               
            });

            gsap.to(link, {
                x: 0,
                y: 0,
                duration: 0.2
            })
        });
    });
}

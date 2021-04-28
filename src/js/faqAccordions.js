import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function faqAccordions() {
    const SPEED = 0.4;

    const openAccordion = element => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };
    const closeAccordion = element => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh()
        });
    };

    const elements = Array.from(document.querySelectorAll('.faq__accordion'));

    elements.forEach(element => {
        const btn = element.querySelector('.faq__accordion-btn');
        const content = element.querySelector('.faq__accordion-content');

        btn.addEventListener('click', event => {
            event.preventDefault();

            elements.forEach(otherElement => {
                if (otherElement !== element) {
                    if (otherElement.classList.contains('active')) {
                        const content = otherElement.querySelector('.faq__accordion-content');
                        closeAccordion(content);
                        otherElement.classList.remove('active');
                    }
                }
            });

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        });
    });
}

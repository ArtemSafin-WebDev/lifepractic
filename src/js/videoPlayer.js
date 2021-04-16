import Plyr from 'plyr';

export default function videoPlayer() {
    const elements = Array.from(document.querySelectorAll('.js-video-player'));

    elements.forEach(element => {
        new Plyr(element);
    })
}

import gsap from 'gsap';

export default function cornerAnimation() {
    const cornerIllustration = document.querySelector('.corner-illustration');

    if (!cornerIllustration) return;

    const outerRim = cornerIllustration.querySelector('.corner-rim');

    const outerRimShape1 = `M -5.08 319.43 C 46.4 235.43 94.79 175.36 199.57 172.43 C 308.9 169.37 389.72 257.93 475.31 326 C 544.81 381.29 620.31 433.23 655.87 511`;
    const outerRimShape2 = `M -5.08 319.43 C 46.4 235.43 92.35 159.79 197.13 156.86 C 306.46 153.8 419.66 224.74 505.25 292.86 C 574.75 348.1 620.31 433.23 655.87 511`;
    const outerRimTimeline = gsap.timeline({
        repeat: -1
    });

    outerRimTimeline
    .to(outerRim, {
        duration: 5,
        attr: { d: outerRimShape2 }
    })
    .to(outerRim, {
        duration: 7,
        attr: { d: outerRimShape1 }
    });

    const outerBlob = cornerIllustration.querySelector('.corner-outer-blob')

    const outerBlobShape1 = `M 654.35 373.65 C 650.883 362.638 646.187 352.051 640.35 342.09 C 584.35 246.27 470.35 186.29 359.59 188.25 C 308.75 189.15 280.77 211.68 255.53 241.84 C 230.29 272 207.71 310 167.69 341.42 C 123.1 376.48 55.57 381.35 0 396.28 L 0 507 L 652.41 507 C 662.33 460.85 667.65 415.78 654.35 373.65 Z`;

    const outerBlobShape2 = `M 654.35 373.65 C 650.883 362.638 646.187 352.051 640.35 342.09 C 533 169.5 475 189.5 359.59 188.25 C 308.75 189.15 280.77 211.68 255.53 241.84 C 230.29 272 207.71 310 167.69 341.42 C 123.1 376.48 55.57 381.35 0 396.28 L 0 507 L 652.41 507 C 662.33 460.85 667.65 415.78 654.35 373.65 Z`;

    const outerBlobTimeline = gsap.timeline({
        repeat: -1
    });

    outerBlobTimeline
    .to(outerBlob, {
        duration: 3,
        attr: { d: outerBlobShape2 }
    })
    .to(outerBlob, {
        duration: 3,
        attr: { d: outerBlobShape1 }
    });
}
import gsap from 'gsap';

export default function cornerAnimation() {
    const cornerIllustration = document.querySelector('.corner-illustration');

    if (!cornerIllustration) return;

    const innerBlob = cornerIllustration.querySelector('.corner-inner-blob');

    const innerBlobShape1 = `M -113.61 772.58 C -184.67 684.1 -123.86 575.64 -91.19 467.18 C -62.19 370.91 88.72 403.5 167.69 341.42 C 247.64 278.58 257.82 190.05 359.61 188.25 C 470.37 186.25 584.36 246.25 640.37 342.09 C 692.63 431.48 636.79 537.51 623.72 640.09 C 610.72 742.24 594.81 812.41 520.79 883.8 C 443 958.85 289.17 957.41 179.94 934.39 C 68.53 923.09 -43.38 860 -113.61 772.58 Z`;
    const innerBlobShape2 = `M -113.61 772.58 C -184.67 684.1 -123.86 575.64 -91.19 467.18 C -62.19 370.91 55.24 373 134.21 310.92 C 214.16 248.07 269.21 182.58 371.01 180.78 C 481.77 178.78 594.01 231.87 650.01 327.69 C 702.27 417.09 687.23 541.07 674.16 643.69 C 661.16 745.84 594.76 812.46 520.74 883.85 C 443 958.85 289.17 957.41 179.94 934.39 C 68.53 923.09 -43.38 860 -113.61 772.58 Z`;

    const innerBlobTimeline = gsap.timeline({ repeat: -1 });

    innerBlobTimeline
    .to(innerBlob, {
        duration: 5,
        attr: { d: innerBlobShape2 }
    })
    .to(innerBlob, {
        duration: 10,
        attr: { d: innerBlobShape1 }
    });


    const outerRim = cornerIllustration.querySelector('.corner-outer-rim');

    const outerRimShape1 = `M 668.35 545.39 C 697.85 652.83 692.71 776.85 622.91 863.69 C 555.21 947.91 436.61 958.86 328.91 967.69 C 232.1 975.61 134.06 966 54.53 910.25 C -26 853.79 -80.85 722.79 -106.85 628 C -136.85 518.52 -85.3 454.09 -27.31 356.51 C 33.83 253.62 79.94 175.81 199.57 172.51 C 308.9 169.37 389.72 257.93 475.31 326 C 554.55 389.07 641.55 447.74 668.35 545.39 Z`;
    const outerRimShape2 = `M 668.35 545.39 C 697.85 652.83 692.71 776.85 622.91 863.69 C 555.21 947.91 436.61 958.86 328.91 967.69 C 232.1 975.61 134.06 966 54.53 910.25 C -26 853.79 -80.85 722.79 -106.85 628 C -136.85 518.52 -117.42 453.92 -59.43 356.34 C 1.71 253.43 78.38 151.71 198 148.36 C 307.33 145.3 417.11 240.36 502.7 308.46 C 582 371.5 641.55 447.74 668.35 545.39 Z`;

    const outerRimTimeline = gsap.timeline({ repeat: -1 });

    outerRimTimeline
    .to(outerRim, {
        duration: 4,
        attr: { d: outerRimShape2 }
    })
    .to(outerRim, {
        duration: 7,
        attr: { d: outerRimShape1 }
    });

    const outerBlob = cornerIllustration.querySelector('.corner-outer-blob');
    const outerBlobShape1 = `M 540.5 925.21 C 450.98 989.67 328.26 1001.31 224.5 963.85 C 132.38 930.6 100.75 826.16 44.35 746.1 C -12.74 665 -105.35 599.35 -102 500.26 C -98.4 392.43 -34.43 284.7 61.47 235.26 C 150.94 189.12 251.19 248.99 350.22 267.08 C 448.84 285.08 564.71 263.47 630.4 339.2 C 699.46 418.82 689.88 536.05 673.9 640.2 C 657.34 748 629 861.49 540.5 925.21 Z`;
    const outerBlobShape2 = `M 540.5 925.21 C 450.98 989.67 328.26 1001.31 224.5 963.85 C 132.38 930.6 100.75 826.16 44.35 746.1 C -12.74 665 -105.35 599.35 -102 500.26 C -98.4 392.43 -9.51 325.71 86.39 276.26 C 175.83 230.13 268.18 200 367.2 218.12 C 465.82 236.12 564.68 263.47 630.37 339.2 C 699.43 418.82 667.28 554.87 628.37 646.55 C 596.17 750.3 629 861.49 540.5 925.21 Z`;

    const outerBlobTimeline = gsap.timeline({ repeat: -1 });

    outerBlobTimeline
    .to(outerBlob, {
        duration: 5,
        attr: { d: outerBlobShape2 }
    })
    .to(outerBlob, {
        duration: 8,
        attr: { d: outerBlobShape1 }
    });


    const rightCornerIllustration = document.querySelector('.right-corner-illustration');

    if (!rightCornerIllustration) return;

    const rightCornerOuterLine = rightCornerIllustration.querySelector('.right-corner-outer-line');
    const rightCornerOuterLineShape1 = `M 483.7 473.68 C 498.6 528 496 590.59 460.75 634.46 C 426.55 677 366.65 682.53 312.25 686.98 C 263.35 690.98 213.83 686.15 173.66 657.98 C 133 629.45 105.28 563.29 92.14 515.39 C 77 460.1 103 427.55 132.32 378.26 C 163.2 326.26 186.49 286.99 246.92 285.26 C 302.14 283.71 342.92 328.44 386.19 362.84 C 426.22 394.72 470.16 424.36 483.7 473.68 Z`;
    const rightCornerOuterLineShape2 = `M 483.7 473.68 C 498.6 528 496 590.59 460.75 634.46 C 426.55 677 366.65 682.53 312.25 686.98 C 263.35 690.98 213.83 686.15 173.66 657.98 C 133 629.45 105.28 563.29 92.14 515.39 C 77 460.1 83.41 426.7 112.7 377.41 C 143.58 325.41 187.17 270.28 247.6 268.59 C 302.82 267.05 348.22 342.42 391.45 376.81 C 431.48 408.66 470.16 424.36 483.7 473.68 Z`;

    const rightCornerOuterLineTimeline = gsap.timeline({ repeat: -1 });

    rightCornerOuterLineTimeline
    .to(rightCornerOuterLine, {
        duration: 5,
        attr: { d: rightCornerOuterLineShape2 }
    })
    .to(rightCornerOuterLine, {
        duration: 8,
        attr: { d: rightCornerOuterLineShape1 }
    });

    
}

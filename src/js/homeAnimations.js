import gsap from 'gsap';

export default function homeAnimations() {
    const mainIllustration = document.querySelector('.home__main-illustration');

    if (mainIllustration) {
        const outerRim = mainIllustration.querySelector('.outer-rim');

        console.log('Outer rim', outerRim);
        const outerRimShape1 =
            'M 761.58 451.47 C 785.89 539.58 782 641.26 725.28 712.39 C 670.28 781.39 573.59 790.26 485.78 797.39 C 406.85 803.81 326.88 795.87 261.9 750.07 C 196.12 703.71 151 596.27 129.61 518.5 C 104.87 428.72 146.76 375.94 193.82 296 C 243.43 211.7 280.82 147.94 378.39 145.3 C 467.55 142.89 533.66 215.56 603.63 271.46 C 668.4 323.21 739.48 371.39 761.58 451.47 Z';
        const outerRimShape2 =
            'M 727.5 480 C 756.76 600.74 807.68 674.58 753.5 739.5 C 698.5 808.5 514.81 739.87 427 747 C 348.07 753.42 237.48 845.13 172.5 799.33 C 106.72 752.97 122.5 648.5 122.5 560.5 C 133.5 388.35 138.68 361.5 185 290 C 251.62 212.33 318.78 160.12 416 158 C 505.16 155.59 585 165.1 655 221 C 718.31 262.78 697 319.66 727.5 480 Z';

        const outerRimTimeline = gsap.timeline({
            repeat: -1
        });

        outerRimTimeline
            .to(outerRim, {
                duration: 4,
                attr: { d: outerRimShape2 }
            })
            .to(outerRim, {
                duration: 4,
                attr: { d: outerRimShape1 }
            });

        const innerRim = mainIllustration.querySelector('.inner-rim');

        const innerRimShape1 = `M 562.87 178.06 C 652.27 197.06 740.71 247.41 777.7 330.53 C 813.58 411.14 776.89 501.03 742.76 582.25 C 712.07 655.25 668.17 722.57 597.57 759.13 C 526.11 796.13 409.98 786.62 331.09 769.79 C 240 750.37 212.48 688.87 163.21 610.26 C 111.27 527.38 71.93 464.79 114.54 377 C 153.54 296.77 248.46 271.59 330.32 235.27 C 406.1 201.64 481.62 160.76 562.87 178.06 Z`;

        const innerRimShape2 = `M 597.5 147 C 686.9 166 740.71 247.41 777.7 330.53 C 813.58 411.14 835.63 514.78 801.5 596 C 770.81 669 682.1 760.44 611.5 797 C 540 834 433.89 754.33 355 737.5 C 263.91 718.08 145.27 718.11 96 639.5 C 44.06 556.62 53.83 457.29 96.44 369.5 C 135.44 289.27 273.14 299.32 355 263 C 430.78 229.37 516.25 129.7 597.5 147 Z`;

        const innerRimTimeline = gsap.timeline({
            repeat: -1
        });

        innerRimTimeline
            .to(innerRim, {
                duration: 5,
                attr: { d: innerRimShape2 }
            })
            .to(innerRim, {
                duration: 5,
                attr: { d: innerRimShape1 }
            });

        const innerBlob = mainIllustration.querySelector('.inner-blob');

        const innerBlobShape1 = `M 289.44 303.12 C 316.61 299.12 341.57 282.29 360.99 262.87 C 411.08 212.78 425.11 175.72 463.84 159.23 C 516.62 136.76 594.01 156.68 629.2 177.92 C 658.49 195.6 725.48 237.52 744.7 290.7 C 771.98 366.17 732.89 433.7 724.78 490.47 C 716.48 548.65 714.47 654.05 624.42 723.7 C 538.53 790.12 416.05 762.07 328.11 747.9 C 240.17 733.73 151.65 692 117.24 626 C 82.83 560 85.07 532.53 109.31 458.93 C 130.31 395.32 128.12 356.05 174.96 332.63 C 210.08 315.07 247.39 309.32 289.44 303.12 Z`;

        const innerBlobShape2 = `M 289.44 303.12 C 316.61 299.12 341.57 282.29 360.99 262.87 C 411.08 212.78 425.11 175.72 463.84 159.23 C 516.62 136.76 596.54 135.77 634.91 150.52 C 667.44 163.03 726.08 199.64 767.73 249.9 C 820.07 313.07 830.31 463.77 825.42 522.9 C 817.37 620.19 744.2 726 653 777.16 C 551.69 834 376 787 316.94 771.25 C 243.94 751.78 142.83 702.53 104.3 640.98 C 64.82 577.93 58.59 520.72 82.83 447.12 C 103.83 383.51 128.12 356.05 174.96 332.63 C 210.08 315.07 247.39 309.32 289.44 303.12 Z`;

        const innerBlobTimeline = gsap.timeline({
            repeat: -1
        });

        innerBlobTimeline
            .to(innerBlob, {
                duration: 4.5,
                attr: { d: innerBlobShape2 }
            })
            .to(innerBlob, {
                duration: 4.5,
                attr: { d: innerBlobShape1 }
            });

        const header = document.querySelector('.page-header');
        const mainHeading = document.querySelector('.home__main-heading');
        const homeFeaturesList = document.querySelector('.home__features-list');
        const homeButtons = document.querySelector('.home__buttons');
        const city = mainIllustration.querySelector('.city');
        const person = mainIllustration.querySelector('.person');
        const thoughts = mainIllustration.querySelector('.thoughts');
        const monitor = mainIllustration.querySelector('.monitor');
        const homeBush = document.querySelector('.home__bush')
        const introTimeline = gsap.timeline({
            paused: false,
            onComplete: () => {
                gsap.set(mainIllustration, {
                    clearProps: 'transform'
                })
                
            }
        });

        introTimeline
            .to(header, {
                autoAlpha: 1,
                duration: 0.6
            })
            .to(
                mainHeading,
                {
                    autoAlpha: 1,
                    duration: 0.6
                },
                0
            )
            .from(
                mainHeading,
                {
                    duration: 1.4,
                    x: -40,
                    ease: 'power3.out'
                },
                '<'
            )
            .to(
                homeFeaturesList,
                {
                    duration: 0.6,
                    autoAlpha: 1
                },
                '<0.2'
            )
            .from(
                homeFeaturesList,
                {
                    x: -40,
                    duration: 1.4,
                    ease: 'power3.out'
                },
                '<'
            )
            .to(
                mainIllustration,
                {
                    autoAlpha: 1,
                    duration: 0.6
                },
                '-=1.2'
            )
            .from(
                mainIllustration,
                {
                    x: -60,
                    duration: 1.4,
                    ease: 'power3.out'
                },
                '<'
            )
            .addLabel('illustration')
            .to(
                homeButtons,
                {
                    autoAlpha: 1,
                    duration: 0.6
                },
                '-=1.2'
            )
            .from(
                homeButtons,
                {
                    x: -40,
                    duration: 1.4,
                    ease: 'power3.out'
                },
                '<'
            )
            .to(
                city,
                {
                    autoAlpha: 1,
                    duration: 0.4
                },
                'illustration-=1'
            )
            .to(
                person,
                {
                    autoAlpha: 1,
                    duration: 0.5
                },
                '<0.3'
            )
            .to(
                homeBush,
                {
                    autoAlpha: 1,
                    duration: 0.5
                },
                '<0.2'
            )
            .to(
                thoughts,
                {
                    autoAlpha: 1,
                    duration: 0.3
                },
                '-=0.6'
            )

            .from(
                monitor,
                {
                    x: -40,
                    duration: 1,
                    
                    ease: 'power3.out'
                },
                '>'
            )
            .to(
                monitor,
                {
                    autoAlpha: 1,
                    duration: 0.3
                },
                '<'
            );
    }
}

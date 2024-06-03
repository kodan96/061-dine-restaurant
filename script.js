$(document).ready(() => {
    
    const toggles = document.querySelectorAll('.toggle');


    gsap.registerPlugin(ScrollTrigger);

    let timeout;

    window.addEventListener('scroll', () => {
        document.body.classList.remove('hide-scrollbar');

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            document.body.classList.add('hide-scrollbar');
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    });



    const initialAnimation = () => {

        const initials = document.querySelectorAll('.initial');
        const overlays = document.querySelectorAll('.overlay-opaque');

        gsap.to(overlays, {
            width: '0',
            duration: .7,
            ease: 'expo',
            stagger: 0.2,
            onComplete: () => {
                gsap.to(initials, {
                    y: '0',
                    opacity: 1,
                    duration: 0.7,
                    ease: 'expo',
                    stagger: 0.1,
                    onComplete: () => {
                        gsap.to('.init', {
                            height: '0',
                            ease: 'expo',
                            onComplete: () => {
                                gsap.to('.overlay', {
                                    x: '0',
                                    ease: 'expo',
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    const fadeUp = () => {
        const fadeUps = document.querySelectorAll('.fade-up');

        fadeUps.forEach(fadeUp => {
            gsap.to(fadeUp, {
                y: '0',
                opacity: 1,
                duration: 0.7,
                ease: 'expo',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: fadeUp,
                    start: 'top center',
                    end: 'bottom center',
                }
            })
        })
    }

    const imgFadeUp = () => {
        const imgFadeUps = document.querySelectorAll('.img-overlay');

        imgFadeUps.forEach(imgFadeUp => {
            gsap.to(imgFadeUp, {
                height: '0',
                ease: 'expo',
                scrollTrigger: {
                    trigger: imgFadeUp,
                    start: 'top center',
                    
                }
            })
        })
    }

    const decorationAnimation = () => {
        const decorations = document.querySelectorAll('.decoration');

        decorations.forEach(decoration => {
            gsap.to(decoration, {
                width: '100%',
                ease: 'expo',
                scrollTrigger: {
                    trigger: decoration,
                    start: 'top center',
                    end: 'bottom center',
                }
            })
        })
    }



    const widthAnimation = () => {
        const widths = document.querySelectorAll('.width');

        widths.forEach(width => {
            gsap.to(width, {
                width: '100%',
                ease: 'expo',
                scrollTrigger: {
                    trigger: width,
                    start: 'top center',
                    end: 'bottom center',
                }
            })
        })
    }

   const slideIn = () => {
    const slides = document.querySelectorAll('.slide-in');

    slides.forEach(slide => {
        gsap.to(slide, {
            opacity: 1,
            x: 0,
            duration: 0.2,
            ease: 'expo',
            scrollTrigger: {
                trigger: slide,
                start: 'top 45%',
                end: 'bottom 40%',
            }
        })
    })
   }

   const overlayAnimation = () => {
        const overlays = document.querySelectorAll('.footer_overlay');

        overlays.forEach(overlay => {
            gsap.to(overlay, {
                width: 0,
                ease: 'expo',
                scrollTrigger: {
                    trigger: overlay,
                    start: 'top 85%',
                    end: 'bottom center',
                }
            })
        })

   }



   const toggleAnimation = (onComplete) => {
        const right = document.querySelectorAll('.rightheight');
        const left = document.querySelectorAll('.leftwidth');

        const tl = gsap.timeline({
            onComplete: onComplete
        });

        tl.to(right, {
            height: '101%',
            ease: 'expo',
            duration: 0.2
        })
        .to(left, {
            width: '101%',
            ease: 'expo',
            duration: 0.2
        });
    };

   const toggleReversed = () => {
        const right = document.querySelectorAll('.rightheight');
        const left = document.querySelectorAll('.leftwidth');

        const tl = gsap.timeline();

        tl.to(left, {
            width: '0',
            ease: 'expo',
            duration: 0.4
        })
        .to(right, {
            height: '0',
            ease: 'expo',
            duration: 0.4
        })
   }


   
    function handleClick(i) {
        const toggles = document.querySelectorAll('.toggle');
        const slides = document.querySelectorAll('.slide');
        const displayPicture = document.querySelector('.events_img picture:first-of-type');

        toggles.forEach(toggle => {
            toggle.classList.remove('active');
        });

        // Add the active class to the clicked element
        toggles[i].classList.add('active');

        // Get the new src and srcset from the selected slide's picture element
        const selectedPicture = slides[i].closest('picture');
        const newSrc = $(selectedPicture).find('img').attr('src');
        const newSrcset1200 = $(selectedPicture).find('source[media="(min-width: 1200px)"]').attr('srcset');
        const newSrcset650 = $(selectedPicture).find('source[media="(min-width: 650px)"]').attr('srcset');

        // Update the src and srcset attributes of the display element's picture element
        $(displayPicture).find('img').attr('src', newSrc + '?' + new Date().getTime());
        $(displayPicture).find('source[media="(min-width: 1200px)"]').attr('srcset', newSrcset1200 + '?' + new Date().getTime());
        $(displayPicture).find('source[media="(min-width: 650px)"]').attr('srcset', newSrcset650 + '?' + new Date().getTime());

        $('.events_section').hide();
        $('.events_section').eq(i).show();
    }

    
    
    
    toggles.forEach((toggle, i) => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            // First, run the toggleAnimation
            toggleAnimation(() => {
                // After the toggleAnimation completes, handle the click to change the image
                handleClick(i);
                // Then start the toggleReversed animation after a short delay to ensure the image is updated
                setTimeout(() => {
                    toggleReversed();
                }, 100); // Adjust the delay as needed to ensure the image updates correctly
            });
        });
    });
    
   

    overlayAnimation();
    decorationAnimation();
    widthAnimation();
    slideIn();
    imgFadeUp();
    initialAnimation();
    fadeUp();


})
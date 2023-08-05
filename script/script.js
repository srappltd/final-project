Loco();
Menu();
Gsap();
Page2();
Page3();
Page4();
Page5();
Page6();
Page7();
Page8();
Page10();
Page11();
Page12();

function Loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function Menu(){
    var line1 = document.querySelector(".line1")
    var line2 = document.querySelector(".line2")
    var line3 = document.querySelector(".line3")
    flag = 0;
    document.querySelector("#menu").addEventListener("click",()=>{
        if(flag == 0){
            line1.style.rotate = "45deg"
            line3.style.rotate = "-45deg"
            line2.style.opacity = 0;
            flag = 1
        }else{
            line1.style.rotate = "0deg"
            line3.style.rotate = "0deg"
            line2.style.opacity = 1;
            flag = 0
        }
    });

}

function Gsap(){

    // gsap.to("#nav",{
    //     scrollTrigger:{
    //         trigger:"#page1",
    //         scroller:"#main",
    //         start:"top 0%",
    //         end:"top -30%",
    //         pin:true,
    //         scrub:true
    //     }
    // });
    gsap.to("#nav .responsive-svg",{
        scrollTrigger:{
            trigger:"#nav .responsive-svg",
            scroller:"#main",
            start:"top 0%",
            end:"top -20%",
            scrub:true
        },
        top:"-30px",
        scale:.5,
    });gsap.to("#nav .desktop-svg",{
        scrollTrigger:{
            trigger:"#nav .desktop-svg",
            scroller:"#main",
            start:"top 0%",
            end:"top -20%",
            scrub:true
        },
        top:"-50px",
        scale:.5,
    });
    gsap.to("#nav",{
        scrollTrigger:{
            trigger:"#main",
            scroller:"#main",
            start:"top -25%",
            end:"top -30%",
            // pin:true,
            scrub:true
        },
        top:"-15vh",
        duration:2
    });
    var tl = gsap.timeline();
    tl.from("#nav .desktop-svg",{
        top:"-200px",
        duration:1,
        opacity:0
    }).from("#nav .responsive-svg",{
        top:"-70px",
        duration:1,
        opacity:0
    }).to(".img-page1",{
        width:"100%",
        height:"100%",
        borderRadius: "0px",
        duration:1
    }).from("#menu",{
        top:"-100px",
        // duration:1,
        opacity:0
    }).from(".nav-right a",{
        y:"-100px",
        // duration:1,
        opacity:0
    })
}

function Page2(){
    document.querySelectorAll("#page2 h1").forEach(elem=>{
        var clt = "";
        elem.textContent.split("").forEach((elm)=>{
            clt += `<span>${elm}</span>`;
            elem.innerHTML = clt;
        });
    
        gsap.to("#page2 .desktop-h1 span",{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                start:"top 80%",
                end:"top -70%",
                scrub:true,
                // markers:true
            },
            stagger:.4,
            duration:2,
            color:"white"
        });
        gsap.to("#page2 .responsive-h1 span",{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                start:"top 85%",
                end:"top 20%",
                scrub:true,
                // markers:true
            },
            stagger:.4,
            duration:2,
            color:"white"
        });
    })
    
}

function Page3(){
    gsap.to("#page3 svg",{
        scrollTrigger:{
            trigger:"#page3 svg",
            scroller:"#main",
            start:"top 110%",
            end:"top -40%",
            scrub:true,
            // markers:true
        },
        left:"-140vw"
    })
}

function Page4(){
    var clt = "";
    document.querySelector(".page4-top h1").textContent.split("").forEach((elm)=>{
        clt += `<span>${elm}</span>`;
        document.querySelector(".page4-top h1").innerHTML = clt;
    });

    gsap.to(".page4-top h1 span",{
        scrollTrigger:{
            trigger:".page4-top h1",
            scroller:"#main",
            start:"top 80%",
            end:"top 43%",
            scrub:true,
            // markers:true
        },
        stagger:.4,
        duration:2,
        color:"#434B34"
    });

    // page 4 bottom 
    var  page4Img = document.querySelectorAll("#page4-img");
    page4Img.forEach((elm)=>{
        gsap.from(elm,{
            scrollTrigger:{
                trigger:elm,
                scroller:"#main",
                start:"top 94%",
                end:"top 70%",
                scrub:true,
                // markers:true
            },
            opacity:0,
            y:50
        })
    })
}

function Page5(){
    // card
    document.querySelectorAll(".page5-card").forEach((elem)=>{
        gsap.from(elem,{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                // markers:true,
                start:"top 85%",
                end:"top 75%",
                // scrub:true
            },
            x:"-100%",
            opacity:0
        })
    });
}

function Page6(){
    var clt = "";
    document.querySelector(".page6-first h1").textContent.split("").forEach((elm)=>{
        clt += `<span>${elm}</span>`;
        document.querySelector(".page6-first h1").innerHTML = clt;
    });

    gsap.to(".page6-first h1 span",{
        scrollTrigger:{
            trigger:".page6-first h1",
            scroller:"#main",
            start:"top 80%",
            end:"top 43%",
            scrub:true,
            // markers:true
        },
        stagger:.4,
        duration:2,
        color:"white"
    });

    // svg scroll 
    document.querySelectorAll(".page6-top svg").forEach(elem=>{
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                start:"top 110%",
                end:"top -40%",
                scrub:1,
                // markers:true
            },
            left:"-140vw"
        })
    })   
    document.querySelectorAll(".page9-bottom svg").forEach(elems=>{
        gsap.to(elems,{
            scrollTrigger:{
                trigger:elems,
                scroller:"#main",
                start:"top 110%",
                end:"top -40%",
                scrub:1,
                // markers:true
            },
            left:"-140vw"
        })
    })
    
    


    // card
    document.querySelectorAll("#page6 .card6").forEach((elem)=>{
        gsap.from(elem,{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                // markers:true,
                start:"top 90%",
                end:"top 75%",
                scrub:true
            },
            y:50,
            opacity:0
        })
    });
    gsap.from(".page6-second a",{
        scrollTrigger:{
            trigger:".page6-second a",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 80%",
            scrub:true
        },
        y:30,
        opacity:0
    })
}

function Page7(){
    clt = "";
    document.querySelector("#page7 h1").textContent.split("").forEach((elm)=>{
        clt += `<span>${elm}</span>`;
        document.querySelector("#page7 h1").innerHTML = clt;
    })
    gsap.to("#page7 h1 span",{
        scrollTrigger:{
            trigger:"#page7 h1 span",
            scroller:"#main",
            start:"top 90%",
            end:"top 5%",
            scrub:true,
            // markers:true
        },
        stagger:.4,
        duration:3,
        color:"#434B34"
    })
}

function Page8(){
    gsap.to(".img81",{
        scrollTrigger:{
            trigger:".img81",
            scroller:"#main",
            start:"top 90%",
            end:"top 10%",
            scrub:true,
            // markers:true
        },
        left:"-20%"
    });gsap.to(".img82",{
        scrollTrigger:{
            trigger:".img81",
            scroller:"#main",
            start:"top 90%",
            end:"top 10%",
            scrub:true,
            // markers:true
        },
        right:"-20%"
    });
    gsap.from(".center8",{
        scrollTrigger:{
            trigger:".center8",
            scroller:"#main",
            start:"top 55%",
            end:"top 35%",
            scrub:true,
            // markers:true
        },
        opacity:0
    });
}

function Page10(){
    clt = "";
    document.querySelector(".page10-top h1").textContent.split("").forEach((elm)=>{
        clt += `<span>${elm}</span>`;
        document.querySelector(".page10-top h1").innerHTML = clt;
    })
    gsap.to(".page10-top h1 span",{
        scrollTrigger:{
            trigger:".page10-top h1 span",
            scroller:"#main",
            start:"top 90%",
            end:"top 50%",
            scrub:true,
            // markers:true
        },
        stagger:.4,
        duration:3,
        color:"white"
    })
    gsap.from(".page10-top p",{
        scrollTrigger:{
            trigger:".page10-top p",
            scroller:"#main",
            start:"top 90%",
            end:"top 70%",
            scrub:true,
            // markers:true
        },
        stagger:.4,
        duration:3,
        y:50,
        opacity:0
    })

    document.querySelectorAll(".page10-img").forEach(elem=>{
        gsap.from(elem,{
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                // markers:true,
                start:"top 90%",
                end:"top 75%",
                scrub:true,
            },
            y:50,
            opacity:0
        });
    });

    gsap.from("#page10 a",{
        scrollTrigger:{
            trigger:"#page10 a",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 70%",
            scrub:true,
        },
        y:50,
        opacity:0
    })
}

function Page11(){
    gsap.from("#page11 h1",{
        scrollTrigger:{
            trigger:"#page11 h1",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 70%",
            scrub:true,
        },
        y:50,
        opacity:0
    });gsap.from("#page11 p",{
        scrollTrigger:{
            trigger:"#page11 h1",
            scroller:"#main",
            // markers:true,
            start:"top 90%",
            end:"top 70%",
            scrub:true,
        },
        y:50,
        opacity:0
    });
    
}

function Page12(){
    document.querySelectorAll("#page12").forEach(elem => {
        gsap.from(elem,{
            y:100,
            opacity:0,
            scrollTrigger:{
                trigger:elem,
                scroller:"#main",
                // markers:true,
                scrub:true,
                start:"top 90%",
                end:"top 50%",
            }
        })
    })
}

page13();
function page13(){
    gsap.from(".page13-bottom",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:".page13-bottom",
            scroller:"#main",
            // markers:true,
            scrub:true,
            start:"top 90%",
            end:"top 70%",
        }
    })
}

Slider();
function Slider(){
    gsap.from("#slider",{
        y:50,
        opacity:0,
        scrollTrigger:{
            trigger:"#slider",
            scroller:"#main",
            scrub:true,
            start:"top 95%",
            end:"top 80%",
        }
    })
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            type:"fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


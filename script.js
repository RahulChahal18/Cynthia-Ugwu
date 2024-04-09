//smooth scrolling  -> locomotive js 
    // attach loco css from github
    // some code from loco github for js
    // attach locomotive scroll min js (link)  {type on google locomtive js cdn}
    
//gsap
    // attach gsap
    // 
//scroll trigger

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        //  console.log(dets);
        // console.log(dets.clientX, dets.clientX);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX }px,${dets.clientY }px) scale(${xscale},${yscale})`;
    })
}

// jab mouse move ho to hum log skew kar paayein ek dum skew bhi nahinkr dena h and ek dum unskew bhi nhi kr dena h ,, aur max and in skew define kr paye and min skew define kr paye
//jab mouse move hoye tb chapta ki value badhe and jb ruk jaaye tb chapta vapis circle ho jaye

var tmout;

function mouseChaptaKaro(){
    
        //define default scale value
        var xscale= 1;
        var yscale= 1;

        var xprev=0;
        var yprev=0;

        window.addEventListener("mousemove", function(dets){
            clearTimeout(tmout);

            var xdiff = dets.clientX - xprev;
            var ydiff = dets.clientY - yprev;

            xprev = dets.clientX;
            yprev = dets.clientY;

            xscale = gsap.utils.clamp(0.8 ,1.2,xdiff);
            yscale = gsap.utils.clamp(0.8,1.2,ydiff);

            circleMouseFollower(xscale,yscale);

            tmout = this.setTimeout(function(){
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX }px,${dets.clientY}px) scale(${1},${1})`;
            },100);



            //console.log(xdiff,ydiff);
        // document.querySelector("#minicircle"). 
    })
}

function firstpageAnim(){
     var tl = gsap.timeline();
     tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
     })
     .to(".boundelem1",{
        y:'0',
        duration:1.5,
        ease: Expo.easeInOut,
        delay: -1
     })

     .to(".boundelem2" ,{
        y:'0',
        opacity: 1,
        duration:1.5,
        ease: Expo.easeInOut,
        stagger:0.3,
        delay: -1
     })

     .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1.2,
     })
}


// for img movig part:  3'o elements ko select kro uske baad 3'o par mousemove lagao , jab mousemove ho to tb ye pta kro ki mouse kaha se kaha pr h
// jiska mtlb h mouse ki x and y posn pata kro,  ab mouse ki x,y posn ke badle uss image ko show kro and
// uss image ko move kro and rotate kro
// jse jse mouse tejj chale vse vse rotn bhi tejj ho jaye

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY -elem.getBoundingClientRect().top;

        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,

            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
        });
    });

    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
           
        });
    });

});


circleMouseFollower();
mouseChaptaKaro();
firstpageAnim();
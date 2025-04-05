gsap.from('.nav-item', {
    opacity: 0,
    stagger:0.09,
    duration: 1,
    y: -50
}, {
  opacity: 1,
  y: 0,
  paused:false
});

gsap.from(".hero>div>h1",{
  opacity: 0,
  stagger:0.09,
  duration: 1,
  y: -300,
  fontSize: 0,
},{
  opacity: 1,
  fontSize: 50,
  paused:false,
  x: 0
})

gsap.from(".navbar-brand>img",{
  opacity: 0,
    stagger:0.09,
    duration: 1,
    x: -200
},{
  opacity: 1,
  x: 0,
  paused:false
})

//second page
let tl = gsap.timeline();

tl.from("#ABOUTPAGE>h1   ,.aboutdata p",{
  opacity: 0,
  duration: 3,
  y: 100,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:"#ABOUTPAGE>h1 ,.aboutdata p",

      scrub:true,
    start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  y: 0,
  paused:false
})
tl.from(".viewmore",{
  y: -300,
  opacity: 0.7,
  duration:3,
  scrollTrigger:{
      trigger:".viewmore",
      duration: 3,
      scrub:true,
       start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  y: 0,
  paused:false
}
)

tl.from(".frame ",{
  opacity: 0,
  y: 100,
  duration:3,
  stagger:0.4,
  scrollTrigger:{
      trigger:".frame",
      duration: 3,
      scrub:true,
      start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  y: 0,
  paused:false
});

tl.from(".frame>img ",{
  opacity: 0,
  x: 300,
  duration:3,
  stagger:0.4,
  scrollTrigger:{
      trigger:".frame>img",
      duration: 3,
      scrub:true,
      start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  x: 0,
  paused:false
});




//animattion third page
tl.from("#VISIONPAGE h1 ,#VISIONPAGE p",{
  opacity: 0,
  duration: 3,
  y: 100,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:"#VISIONPAGE h1 ,#VISIONPAGE p",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})



// animation to the MIssion page

tl.from("#MISSIONPAGE h1 ,#MISSIONPAGE p",{
  opacity: 0,
  duration: 3,
  y: 100,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:"#MISSIONPAGE h1 ,#MISSIONPAGE p",
      scrub:true,
      // markers:true,
      start:"top 70%",
      end:"bottom 20%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})

tl.from(".ms1",{
  opacity: 0,
  duration: 3,
  x: -100,
  y: -50,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:" .ms1",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 70%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})

tl.from(".ms2",{
  opacity: 0,
  duration: 3,
  y: -100,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:" .ms2",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 70%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})

tl.from(".ms3",{
  opacity: 0,
  duration: 3,
  x: 100,
  y: -50,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:" .ms3",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 70%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})

//animation on the page of core values

tl.from("#COREVALUESPAGE h1 ,#COREVALUESPAGE p",{
  opacity: 0,
  duration: 3,
  y: 100,
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:"#COREVALUESPAGE h1 ,#COREVALUESPAGE p",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 60%"
    }
},{
  opacity: 1,
  y: 0,
  fontSize: 50,
  paused:false
})

tl.from(".cv1 ,.cv2 , .cv3",{
  opacity: 0,
  y:50,
  x:50,
  duration:2,
  ease: "elastic.out(2,0.2)",
  stagger:0.2,
  fontSize: 0,
  scrollTrigger:{
      trigger:".cv1 ,.cv2 , .cv3",
      scrub:true,
      // markers:true,
      start:"top 80%",
      end:"bottom 60%"
    }
})

//animation on th eservice page
tl.from("#SERVICEPAGE h1 ,#SERVICEPAGE p",{
    opacity: 0,
    duration: 3,
    y: 100,
    stagger:0.2,
    fontSize: 0,
    scrollTrigger:{
        trigger:"#SERVICEPAGE h1 ,#SERVICEPAGE p",
        scrub:true,
        // markers:true,
      start:"top 80%",
      end:"bottom 60%"
      }
  },{
    opacity: 1,
    y: 0,
    fontSize: 50,
    paused:false
  })
  tl.from(".service-img-2",{
    y: -400,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger:".service-img-2",
        scrub:true,
        // markers:true,
         start:"top 80%",
      end:"bottom 60%"
      }
  },{
    opacity: 1,
    y: 0,
    paused:false
  })

  tl.from(".service-img-1",{
    x: -200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger:".service-img-1",
        scrub:true,
        // markers:true,
      start:"top 80%",
      end:"bottom 60%"
      }
  })

  tl.from(".service-img-3",{
    y: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger:".service-img-3",
        scrub:true,
        // markers:true,
        start:"top 80%",
      end:"bottom 60%"
      }
  },{
    opacity: 1,
    y: 0,
    paused:false
  })

  tl.from(".service-img-4",{
    x: 200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger:".service-img-4",
        scrub:true,
        // markers:true,
       start:"top 80%",
      end:"bottom 60%"
      }
  })

  const cardani = gsap.timeline({
    scrollTrigger:{
        trigger:".vision-card",
        // markers:true,
        start:"top 80%",
        end:"bottom 70%",
        scrub:true
    }
})

let animationy = cardani.to(".vision-card", {rotationY:360, duration:2, ease:"power1.inOut"})
GSDevTools.create({animation:animationy})

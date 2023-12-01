
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ScrollTrigger.create({
  trigger:"sc-intro .headline",
  start:"10% 0%",
  end:"0% 100%",
  onEnter:function(){
    $('.header').addClass('show')
  },
  onLeaveBack:function(){
    $('.header').removeClass('show')
  },
})
ScrollTrigger.create({
  trigger:".sc-intro",
  start:"0% 0%",
  end:"100% 100%",
  toggleClass:{targets:".sc-intro .icon-wrap",className:"on"}
})
const introTl = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-intro",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,

  }
})
introTl.to('.headline-area .headline .text1',{opacity:1,},'a')
introTl.to('.sc-intro .dimmed',{opacity:1,},'a')
introTl.to('.headline-area .headline .text1',{opacity:0,})
introTl.to('.headline-area .headline .text2',{opacity:1,})
introTl.to('.headline-area .headline .text2',{opacity:0,})
introTl.to('.headline-area .headline .text3',{opacity:1,})
introTl.to('.headline-area .headline .text3',{opacity:0,})
introTl.to('.headline-area .headline .text4',{opacity:1,})


const bgTl = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-bg-sticky",
    start:"0% 0%",
    end:"100% 100%",
    scrub:1,
  }
})
bgTl.to('.sc-bg-sticky .headline-area',{opacity:1},'a')
bgTl.to('.sc-bg-sticky .gradiant',{opacity:1},'a')
bgTl.to('.sc-bg-sticky .headline-area .top',{xPercent:100},'b')
bgTl.to('.sc-bg-sticky .headline-area .bottom',{xPercent:-100},'b')
bgTl.to('.sc-bg-sticky .gradiant',{opacity:0},'b')
bgTl.to('.sc-bg-sticky .headline-area',{opacity:0},)
bgTl.to('.sc-bg-sticky .bg1',{height:0},)
bgTl.to('.sc-bg-sticky .bg2',{height:0},)
bgTl.to('.sc-bg-sticky .gradiant',{opacity:1},'c')
bgTl.to('.sc-bg-sticky .desc',{opacity:1},'c')

const valueTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-value.layout2',
      start: "0% 70%",
      end: "100% 90%",
      scrub: 1,
    },
    width: 250,
})
valueTl.to('.sc-value.layout2 .headline.left span',{xPercent:-172},'a')
valueTl.to('.sc-value.layout2 .headline.right span',{xPercent:134},'a')
valueTl.to('.sc-value.layout2 .bar',{width:'21%'},'a')

ScrollTrigger.create({
  trigger:`.bg-dark`,
  start:"0% 50%",
  end:"100% 0%",
  toggleClass:{targets:"body",className:"dark"}
})
ScrollTrigger.create({
  trigger:`.bg-dark2`,
  start:"0% 50%",
  end:"100% 50%",
  toggleClass:{targets:"body",className:"dark"}
})





gsap.to('.sc-possible .horizental',{
  scrollTrigger:{
      trigger:".sc-possible",
      start:"0% 0%",
      end:"100% 100%",
      scrub:0,
      invalidateOnRefresh: true, 
  },
  xPercent:-100,
  x:function(){
    return window.innerWidth;
}
})

const easyTl = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-easy",
    start:"0% 0%",
    end:"100% 80%",
    scrub:0,
},
})

easyTl.from('.sc-easy .box1, .sc-easy .box2',{xPercent:-50,},'a')
easyTl.from('.sc-easy .box3',{xPercent:50,},'a')


gsap.to('.sc-easy .text',{
  scrollTrigger:{
    trigger:".sc-easy .group-bottom .box-area",
    start:"0% 50%",
    end:"100% 40%",
    scrub:1,
    onEnter:function(){
      $('.sc-easy .group-bottom .gradiant').addClass('on');
    },
    onLeaveBack:function(){
      $('.sc-easy .group-bottom .gradiant').removeClass('on');
    }
  },
  opacity:1
})


ScrollTrigger.create({
  trigger:'.sc-safe .area1-wrapper .area1-inner',
  start:"0% 100%",
  end:"100% 100%",
  toggleClass:{targets:".sc-safe .area1-wrapper .card-item",className:"on"},
})
ScrollTrigger.create({
  trigger:'.sc-safe .area2-wrapper',
  start:"0% 0%",
  end:"100% 100%",
  toggleClass:{targets:".sc-safe .area2-wrapper .card-item",className:"on"},
})
ScrollTrigger.create({
  trigger:'.sc-safe .area3',
  start:"0% 0%",
  end:"150% 100%",
  toggleClass:{targets:".sc-safe .area3 .card-item",className:"on"},
})
const cardTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-safe .area1-wrapper',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh:true,
  },
})
cardTl1.to('.sc-safe .area1 .horizental',{
  x:function(){
    return document.querySelector('.area1 .headline-area').clientWidth*-1 +100;
  }
})
cardTl1.to('.sc-safe .horizental .card-list .card-item:nth-child(2)',{xPercent:-100},'a')
cardTl1.to('.sc-safe .horizental .card-list .card-item:nth-child(3)',{xPercent:-200},'a')
cardTl1.to('.sc-safe .horizental .card-list .card-item:nth-child(4)',{xPercent:-300},'a')

const cardTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-safe .area1-wrapper',
    start: "30% 0%",
    end: "100% 100%",
    scrub: 1,
  },
})
cardTl2.to('.sc-safe .horizental .card-list .card-item.last .img-container .rock',{opacity:0})
cardTl2.to('.sc-safe .horizental .card-list .card-item.last .img-container .unrock',{opacity:1})
cardTl2.to('.sc-safe .horizental .card-list .card-item.last .img-container .unrock',{opacity:0})

const cardTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-safe .area2-wrapper',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
  },
})
cardTl3.to('.sc-safe .area2-wrapper .card-item .text',{opacity:1});

const cardTl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-safe .area3',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
  },
})
cardTl4.to('.sc-safe .area3 .card-list .card-item:nth-child(2)',{xPercent:-100},'a')
cardTl4.to('.sc-safe .area3 .card-list .card-item:nth-child(3)',{xPercent:-200},'a')
cardTl4.to('.sc-safe .area3 .card-list .card-item:nth-child(4)',{xPercent:-300},'a')
cardTl4.to('.sc-safe .area3 .headline-area',{opacity:1})
cardTl4.to('.sc-safe .area3 .card-list .card-item .gradiant',{opacity:1})



const globalTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-global.layout2',
    start: "0% 70%",
    end: "100% 90%",
    scrub: 1,
  },
  width: 250,
})
globalTl.to('.sc-global.layout2 .headline.left span',{xPercent:-114},'a')
globalTl.to('.sc-global.layout2 .headline.right span',{xPercent:120},'a')
globalTl.to('.sc-global.layout2 .bar',{width:'21%'},'a')

gsap.to('.sc-finance .horizental',{
  scrollTrigger:{
      trigger:".sc-finance",
      start:"0% 0%",
      end:"100% 100%",
      scrub:0,
      invalidateOnRefresh: true, 
  },
  xPercent:-100,
  x:function(){
    return window.innerWidth;
}
})
ScrollTrigger.create({
  trigger:'.sc-finance',
  start:"50% 50%",
  end:"100% 50%",
  onEnter:function(){
    $('.sc-finance .sticky > .group-bottom  .text-area .t1').addClass('on');
  },
  onLeaveBack:function(){
    $('.sc-finance .sticky > .group-bottom  .text-area .t1').removeClass('on');
  }
})
ScrollTrigger.create({
  trigger:'.sc-finance',
  start:"50% 50%",
  end:"100% 100%",
  onEnter:function(){
    $('.sc-finance .sticky > .group-bottom  .text-area .t2').addClass('on');
  },
  onLeaveBack:function(){
    $('.sc-finance .sticky > .group-bottom  .text-area .t2').removeClass('on');
  }
})

gsap.to('.sc-use .horizental',{
  scrollTrigger:{
      trigger:".sc-use",
      start:"0% 0%",
      end:"100% 100%",
      scrub:0,
      invalidateOnRefresh: true, 
  },
  xPercent:-100,
  x:function(){
    return window.innerWidth;
}
})

gsap.to(".sc-creator .bg .text-area",{
  scrollTrigger: {
      trigger: '.sc-creator',
      start: "0% 0%",
      end: "10% 0%",
      scrub: 1,
    },
  opacity: 1,
})


ScrollTrigger.create({
  trigger:'footer',
  start:"0% 100%",
  end:"100% 50%",
  onEnter:function(){
    $('.sc-open-ground .marquee-area').addClass('on');
  },
  onLeaveBack:function(){
    $('.sc-open-ground .marquee-area').removeClass('on');
  }
})


let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();
  if(curr >= ($(window).height() * 6)){
      if(curr>lastScroll){
        $('.btn-top').addClass('show');
    }else{
        $('.btn-top').removeClass('show');
  
    }
    lastScroll = curr;
  }else{
      $('.btn-top').removeClass('show');
  }
      
})

fixEl = document.querySelector('.btn-top');
fixEl.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:"smooth"})
})

ScrollTrigger.create({
  trigger: ".footer",
  start: "0% 100%",
  end: "110% 100%",
  scrub: true,
  markers: false,
  toggleClass:{
      targets:".btn-top", className:"on"
  },
});
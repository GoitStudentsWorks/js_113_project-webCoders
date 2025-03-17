import{A as E,S as k,N as M,K as A,a as P,i as O}from"./assets/vendor-DtJoN_Ey.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();new E(".about-me-list",{duration:500,showMultiple:!0,openOnInit:[0],elementClass:"about-me-item",triggerClass:"about-btn",panelClass:"accordion-content",activeClass:"is-active"});const b=document.querySelector(".skills-slider");b&&new k(b,{modules:[M,A],loop:!0,slidesPerView:2,grabCursor:!0,simulateTouch:!0,touchRatio:1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,speed:500,navigation:{nextEl:".skills-button"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},centeredSlidesBounds:!0});const d=document.querySelector(".prev"),u=document.querySelector(".next"),m=document.querySelectorAll(".project-swiper-slide");let o=0,q=0,S=0;d.addEventListener("click",()=>l(o-1));u.addEventListener("click",()=>l(o+1));function l(e){m[o].classList.remove("active"),e<0?o=m.length-1:e>=m.length?o=0:o=e,m[o].classList.add("active"),B()}function B(){d.disabled=!1,u.disabled=!1,o===0&&(d.disabled=!0),o===m.length-1&&(u.disabled=!0),d.classList.toggle("disabled",d.disabled),u.classList.toggle("disabled",u.disabled)}document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?l(o-1):e.key==="ArrowRight"?l(o+1):e.key==="Tab"&&(e.shiftKey?l(o-1):l(o+1))});const C=document.querySelector(".project-swiper-wrapper");C.addEventListener("touchstart",e=>{q=e.touches[0].clientX});C.addEventListener("touchend",e=>{S=e.changedTouches[0].clientX,x()});function x(){const e=S-q;e>50?l(o-1):e<-50&&l(o+1)}B();document.addEventListener("DOMContentLoaded",function(){console.log("DOM fully loaded");const e=new E(".faq-list",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-open",activeClass:"active",showMultiple:!0,closeOnClickOutside:!0});console.log("Accordion initialized:",e)});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-item").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("open"),t.querySelector(".faq-icon").classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),t=document.querySelector(".marquee");if(!e||!t)return;function n(s){const i=s.getBoundingClientRect();return i.top<window.innerHeight&&i.bottom>0}function r(){n(e)?t.classList.add("marquee-active"):t.classList.remove("marquee-active")}r(),window.addEventListener("scroll",r)});async function V(){try{return(await P.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return O.error({title:"Error",message:"Sorry, something went wrong with reviews."}),[]}}function D(e){const t=document.getElementById("reviews-list");if(t.innerHTML="",!e||e.length===0){t.innerHTML='<p class="error">Not found</p>';return}const n=e.map(r=>`
    <li class="swiper-slide swiper-slide-reviews" id="review">
      <img class="reviewer-image" src="${r.avatar_url}" alt="user photo" width="48" height="48"/>
      <h3 class="reviewer-name">${r.author}</h3>
      <p class="review-text">${r.review}</p>
    </li>
  `).join("");t.insertAdjacentHTML("beforeend",n)}function h(e){const t=document.getElementById("prev"),n=document.getElementById("next");t.classList.toggle("disabled",e.isBeginning),n.classList.toggle("disabled",e.isEnd),t.disabled=e.isBeginning,n.disabled=e.isEnd}document.addEventListener("DOMContentLoaded",async()=>{const e=await V();D(e);const t=new k(".reviews-swiper",{slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:"#next",prevEl:"#prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,loop:!1,on:{init:function(){h(this)},slideChange:function(){h(this)}}});document.getElementById("prev").addEventListener("keydown",function(n){(n.key==="ArrowLeft"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t.slidePrev())}),document.getElementById("next").addEventListener("keydown",function(n){(n.key==="ArrowRight"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t.slideNext())})});const I=document.getElementById("w-t-modal"),T=document.getElementById("w-t-close-btn"),N=document.querySelector(".w-t-modal-backdrop"),g=document.querySelector(".w-t-modal-content");function y(){g.classList.add("closing"),setTimeout(()=>{I.style.display="none",g.classList.remove("closing"),document.body.classList.remove("modal-open")},500)}function R(){I.style.display="flex",g.classList.remove("closing"),document.body.classList.add("modal-open")}T.addEventListener("click",y);N.addEventListener("click",y);document.addEventListener("keydown",e=>{e.key==="Escape"&&y()});const j=document.getElementById("work-together-form");j.addEventListener("submit",function(e){e.preventDefault(),R()});const a=document.getElementById("email"),c=document.getElementById("email-message");a.addEventListener("input",function(){const e=a.value;e===""?(a.classList.remove("valid","invalid"),c.textContent="",c.classList.remove("success","error")):/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(a.classList.remove("invalid"),a.classList.add("valid"),c.textContent="Success!",c.classList.remove("error"),c.classList.add("success")):(a.classList.remove("valid"),a.classList.add("invalid"),c.textContent="Invalid email, try again",c.classList.remove("success"),c.classList.add("error"))});const v=document.querySelector(".menu-btn"),f=document.querySelector(".header-menu-list");v&&f&&(v.addEventListener("click",()=>{f.classList.toggle("active")}),document.addEventListener("click",e=>{!v.contains(e.target)&&!f.contains(e.target)&&f.classList.remove("active")}));const $=document.querySelector(".burger-btn"),z=document.querySelector(".mobile-menu-close-btn"),L=document.querySelector(".mobile-menu"),H=document.querySelectorAll(".mobile-menu-link");function K(){L.classList.add("is-open"),document.body.classList.add("no-scroll")}function w(){L.classList.remove("is-open"),document.body.classList.remove("no-scroll")}$.addEventListener("click",K);z.addEventListener("click",w);H.forEach(e=>{e.addEventListener("click",w)});L.addEventListener("click",function(e){e.target.closest(".mobile-menu-container")||w()});
//# sourceMappingURL=index.js.map

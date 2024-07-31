import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const g="14594113-3565582ddf884392468dadf7f",p="https://pixabay.com/api/";function y(r){const e=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=`${p}?${e}`;return u(!0),fetch(a).then(n=>{if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return n.json()}).then(n=>n.hits).catch(n=>(console.error("Error fetching images:",n),[])).finally(()=>{u(!1)})}function u(r){document.querySelector(".loader").style.display=r?"inline-block":"none",document.querySelector(".gallery").style.display=r?"none":"flex"}function h(r){const e=document.querySelector(".gallery");if(!e){console.error("Gallery container not found");return}e.innerHTML=r.map(L).join(""),w()}function L(r){const{largeImageURL:e,webformatURL:a,tags:n,likes:t,views:o,comments:i,downloads:d}=r;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
          class="gallery-image"
          src="${a}"
          data-source="${e}"
          alt="${n}"
        />
        <div class="image-details">
          ${s("Likes",t)}
          ${s("Views",o)}
          ${s("Comments",i)}
          ${s("Downloads",d)}
        </div>
      </a>
    </li>`}function s(r,e){return`
    <div class="details-element">
      <p class="details-title">${r}</p>
      <p class="details-value">${e}</p>
    </div>`}function w(){const r=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});r.on("show.simplelightbox",function(e){e.preventDefault()}),r.on("error.simplelightbox",function(e){console.log(e)}),r.refresh()}const $=document.querySelector(".search-form"),f=document.querySelector(".search-input"),b=document.querySelector(".gallery"),v=document.querySelector(".loader-wrapper");$.addEventListener("submit",r=>{r.preventDefault();const e=f.value.trim();b.innerHTML="",e===""?(l.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}),c(!1)):(c(!0),y(e).then(a=>{a.length===0?l.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):h(a)}).catch(a=>{console.error("Error:",a),l.error({id:"error",message:"An error occurred while fetching images. Please try again later.",position:"topRight",transitionIn:"fadeInDown"})}).finally(()=>{c(!1),f.value=""}))});function c(r){v.style.display=r?"flex":"none"}
//# sourceMappingURL=commonHelpers.js.map

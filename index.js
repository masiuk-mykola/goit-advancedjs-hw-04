import{a as g,S as L,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const w="https://pixabay.com/api/",v="24752012-6c87264ae8b83647fd23322b3";async function _(o,e=1){const r={q:o,key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await g.get(w,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),d=document.querySelector(".load-more"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const e=o.map(r=>`<li class="gallery__item"><a class="gallery__link" href="${r.largeImageURL}">
        <img class="gallery__image" loading="lazy" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
       <ul class="caption-list">
        <li class="caption-item">
          <p class="caption">Likes</p>
          <p class="caption-value">${r.likes}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Views</p>
          <p class="caption-value">${r.views}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${r.comments}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${r.downloads}</p>
        </li>
      </ul></li>`).join("");c.insertAdjacentHTML("beforeend",e),S.refresh()}function q(){c.innerHTML=""}function p(){u.classList.remove("hidden")}function B(){u.classList.add("hidden")}function I(){d.classList.remove("hidden")}function m(){d.classList.add("hidden")}let f="",a=1;const y=document.querySelector(".form"),$=document.querySelector(".load-more");y.addEventListener("submit",M);$.addEventListener("click",async()=>{a+=1,p(),await h(a);const o=document.querySelector(".gallery__item");if(o){const{height:e}=o.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}});async function h(o){try{const e=await _(f,o);if(!e.hits.length){l.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits),I(),o*15>=e.totalHits&&m()}catch{l.error({title:"❌",message:"Something went wrong!",position:"topRight"})}finally{B()}}function M(o){o.preventDefault(),m(),q();const e=o.target[0].value;e&&(f=e,a=1,y.reset(),p(),h(a))}
//# sourceMappingURL=index.js.map

import{a as p,S as u,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="",m="";function d(s){const o=new URLSearchParams({q:s,key:m,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(f,{params:o}).then(e=>e.data)}const a=document.querySelector(".gallery");document.querySelector(".loader");const g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`<li class="gallery__item"><a class="gallery__link" href="${e.largeImageURL}">
        <img class="gallery__image" loading="lazy" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
       <ul class="caption-list">
        <li class="caption-item">
          <p class="caption">Likes</p>
          <p class="caption-value">${e.likes}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Views</p>
          <p class="caption-value">${e.views}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${e.comments}</p>
        </li>
        <li class="caption-item">
          <p class="caption">Comments</p>
          <p class="caption-value">${e.downloads}</p>
        </li>
      </ul></li>`).join("");a.insertAdjacentHTML("afterbegin",o),g.refresh()}function h(){a.innerHTML=""}function L(){a.classList.add("loading")}function v(){a.classList.remove("loading")}const c=document.querySelector(".form");c.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.target[0].value;L(),d(o).then(e=>{if(!e.hits.length){l.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(),y(e.hits),c.reset()}).catch(e=>l.error({title:"❌",message:"Something went wrong!",position:"topRight"})).finally(()=>{v()})}
//# sourceMappingURL=index.js.map

import{a as E,S as P,i as a}from"./assets/vendor-MjawMu3A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="53252771-146265e1bedbafdc9d92a47ef",M="https://pixabay.com/api/";async function p(t,r){const o={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await E.get(M,{params:o})).data}function m(t){return t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:n,downloads:v})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${r}" alt="${i}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${e}
            </p>
            <p class="info-item">
              <b>Views</b> ${s}
            </p>
            <p class="info-item">
              <b>Comments</b> ${n}
            </p>
            <p class="info-item">
              <b>Downloads</b> ${v}
            </p>
          </div>
        </li>
      `).join("")}const h=document.getElementById("search-form"),l=document.querySelector(".gallery"),g=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let c=1,d="";const q=15,y=new P(".gallery a",{captionsData:"alt",captionDelay:250});function b(){g.classList.remove("is-hidden")}function L(){g.classList.add("is-hidden")}function B(){u.classList.remove("is-hidden")}function f(){u.classList.add("is-hidden")}function w(t){const r=Math.ceil(t/q);c>=r?(f(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):B()}h.addEventListener("submit",async t=>{t.preventDefault();const r=t.currentTarget.elements.searchQuery.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}d=r,c=1,l.innerHTML="",f(),b();try{const o=await p(d,c);if(o.hits.length===0){a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=m(o.hits);l.innerHTML=i,y.refresh(),w(o.totalHits)}catch(o){console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),h.reset()}});u.addEventListener("click",async()=>{c+=1,f(),b();try{const t=await p(d,c),r=m(t.hits);l.insertAdjacentHTML("beforeend",r),y.refresh();const o=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),w(t.totalHits)}catch(t){console.error(t),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map

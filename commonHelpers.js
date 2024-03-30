import{a as y,i as d,S as L}from"./assets/vendor-95dc692e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(i,t){const s="https://pixabay.com/api/",a={key:"43018161-f974b102273f6260f6ed159b0",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};try{return(await y.get(s,{params:a})).data}catch{iziToast.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"})}}function b(i){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:h}=i;return`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            src="${t}"
            alt="${a}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-description">
        <li class="gallery-description-item"><h3>Likes</h3><p>${e}</p></li>
        <li class="gallery-description-item"><h3>Views</h3><p>${r}</p></li>
        <li class="gallery-description-item"><h3>Comments</h3><p>${n}</p></li>
        <li class="gallery-description-item"><h3>Downloads</h3><p>${h}</p></li>
     </ul>
	</a>
</li>`}function u(i){return i.map(b).join("")}const o={formEl:document.querySelector(".input-form"),infoEl:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load-btn")};let m,c=1,g=0;const w=15,l=document.querySelector(".loader");o.formEl.addEventListener("submit",async i=>{if(i.preventDefault(),m=o.formEl.elements.query.value,c=1,m==="")d.warning({color:"yellow",message:"You forgot to describe the image",position:"topRight"});else{o.infoEl.innerHTML="",l.classList.remove("is-hidden");try{const t=await p(m,c);g=Math.ceil(t.totalHits/w);const s=u(t.hits);o.infoEl.innerHTML=s,new L(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),s.length||(d.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("is-hidden"))}catch{d.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"}),o.infoEl.innerHTML=""}finally{l.classList.add("is-hidden"),f()}}});o.btnLoadMore.addEventListener("click",S);async function S(){c+=1,l.classList.remove("is-hidden");try{const i=await p(m,c),t=u(i.hits);o.infoEl.insertAdjacentHTML("beforeend",t)}catch{d.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"})}f(),l.classList.add("is-hidden")}function f(){c>=g?o.btnLoadMore.classList.add("is-hidden"):o.btnLoadMore.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map

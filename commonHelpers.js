import{i as n,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43018161-f974b102273f6260f6ed159b0",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${r}?${s}`;return fetch(i).then(e=>e.json()).catch(e=>{iziToast.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"})})}function u(o){const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:m}=o;return`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            src="${r}"
            alt="${i}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-description">
        <li class="gallery-description-item"><h3>Likes</h3><p>${e}</p></li>
        <li class="gallery-description-item"><h3>Views</h3><p>${t}</p></li>
        <li class="gallery-description-item"><h3>Comments</h3><p>${l}</p></li>
        <li class="gallery-description-item"><h3>Downloads</h3><p>${m}</p></li>
     </ul>
	</a>
</li>`}function f(o){return o.map(u).join("")}const a={formEl:document.querySelector(".input-form"),infoEl:document.querySelector(".gallery")},c=document.querySelector(".loader");a.formEl.addEventListener("submit",o=>{o.preventDefault();const r=a.formEl.elements.query.value;r===""?n.warning({color:"yellow",message:"You forgot to describe the image",position:"topRight"}):(a.infoEl.innerHTML="",c.classList.remove("is-hidden"),p(r).then(s=>{const i=f(s.hits);a.infoEl.innerHTML=i,new d(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),i.length||(n.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.classList.add("is-hidden"))}).catch(s=>{n.error({color:"red",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"}),a.infoEl.innerHTML=""}).finally(()=>{c.classList.add("is-hidden")}))});
//# sourceMappingURL=commonHelpers.js.map

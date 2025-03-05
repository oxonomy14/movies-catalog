/* empty css                      */import{S as h,a as n,i as m}from"./assets/vendor-DR2mlj_v.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const l={lastMovieList:document.querySelector(".last-movie-list"),sectionMovieAbout:document.querySelector(".section-movie-about"),boxAboutMovie:document.querySelector(".about-movie"),categoryMovieList:document.querySelector(".category-movie-list"),topMovieList:document.querySelector(".top-movie-list"),form:document.querySelector("#search-form"),searchTxtLoaderMore:document.querySelector(".search-btn-loader-box-txt"),searchBtnLoadMore:document.querySelector(".search-btn-loadmore"),searchMovieList:document.querySelector(".search-movie-list")};function b(t){const s=t.map(e=>{const o=e.genres?e.genres.join(", "):"Undefined";return`<li class="search-movie-item" id="${e.id}">
              <div class="search-movie-box">
            
                <img
                  class="search-movie-small-img"
                  src="${e.medium_cover_image}"
                  alt="${e.title_english}"
                  title="${e.title_english}"
                />
                <div class ="search-movie-small-img-rt"> <p class="search-movie-descr-txt">IMDb: ${e.rating}</p></div>
                
                <div class="search-movie-descr">
                  <ul class="search-movie-descr-list">
                    <li class="search-movie-descr-item">
                      <h3 class="search-movie-descr-subtitle">${e.title_long}</h3>
                      <p class="search-movie-descr-txt">${o}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`}).join("");l.searchMovieList.insertAdjacentHTML("beforeend",s)}function _(t){const s=t.map(e=>{const o=e.genres?e.genres.join(", "):"Undefined";return`<li class="last-movie-item" id="${e.id}">
              <div class="last-movie-box">
            
                <img
                  class="last-movie-small-img"
                  src="${e.medium_cover_image}"
                  alt="${e.title_english}"
                  title="${e.title_english}"
                />
                <div class ="last-movie-small-img-rt"> <p class="last-movie-descr-txt">IMDb: ${e.rating}</p></div>
                
                <div class="last-movie-descr">
                  <ul class="last-movie-descr-list">
                    <li class="last-movie-descr-item">
                      <h3 class="last-movie-descr-subtitle">${e.title_long}</h3>
                      <p class="last-movie-descr-txt">${o}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`}).join("");l.lastMovieList.insertAdjacentHTML("beforeend",s)}function $(t){l.sectionMovieAbout.style.display="block";const s=t.genres?t.genres.join(", "):"Undefined";console.log("Жанр:",s);const e=t.cast,o=e.length?e.map(c=>`${c.name} as <u>${c.character_name}</u>`).join(", "):"No actors available",i=e.length?e.map(c=>`<img src="${c.url_small_image}" alt="${c.name}" title="${c.name}" class="actor-img">`).join(""):"No actor images available",a=`
      <div class="about-movie-title-box">
        <div>
          <h2 class="about-movie-main-title">${t.title_english}</h2>
        </div>
        <div class="about-movie-title-line"></div>
      </div>
      <div class="about-movie-container">
        <div class="about-movie-img">
          <img src="${t.large_cover_image}" alt="${t.title_english}" title="${t.title_english}" />
          <div class="actor-img-list">
           ${i}
          </div>
        </div>
        <div class="about-movie-box">
          <div class="about-movie-item">
            <h3 class="about-movie-title">${t.title_long}</h3>
              <p class="about-movie-txt"><span>Genres: </span>${s}</p>
            <p class="about-movie-txt"><span>IMDb rating: </span>${t.rating}</p>
            <p class="about-movie-txt"><span>Year: </span>${t.year}</p>
            <p class="about-movie-txt">
              <span>Actors: </span>${o}
            </p>
            <div class="screen-img">
              <ul class="screen-img-list">
                <li class="screen-img-item">
                <a href="${t.large_screenshot_image1}">

                  <img src="${t.medium_screenshot_image1}" alt="${t.title_english}" title="${t.title_english}"/></a>
                </li>
                  <li class="screen-img-item">
                     <a href="${t.large_screenshot_image2}">
                  <img src="${t.medium_screenshot_image2}" alt="${t.title_english}" title="${t.title_english}" /></a>
                </li>
                  <li class="screen-img-item">
                     <a href="${t.large_screenshot_image3}">
                  <img src="${t.medium_screenshot_image3}" alt="${t.title_english}" title="${t.title_english}" /></a>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="about-movie-descr">
        <span>Description: </span>${t.description_full||"Sorry! Movie description not added yet"}       
      </p>`;l.boxAboutMovie.innerHTML=a,new h(".screen-img-list a",{captionsData:"alt",captionDelay:250}).refresh()}function f(t){const s=t.map(e=>{const o=e.genres?e.genres.join(", "):"Undefined";return`<li class="category-movie-item" id="${e.id}">
              <div class="category-movie-box">
            
                <img
                  class="category-movie-small-img"
                  src="${e.medium_cover_image}"
                  alt="${e.title_english}"
                  title="${e.title_english}"
                />
                <div class ="category-movie-small-img-rt"> <p class="category-movie-descr-txt">IMDb: ${e.rating}</p></div>
                
                <div class="category-movie-descr">
                  <ul class="category-movie-descr-list">
                    <li class="category-movie-descr-item">
                      <h3 class="category-movie-descr-subtitle">${e.title_long}</h3>
                      <p class="category-movie-descr-txt">${o}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`}).join("");l.categoryMovieList.insertAdjacentHTML("beforeend",s)}function L(t){const s=t.map(e=>{const o=e.genres?e.genres.join(", "):"Undefined";return`<li class="top-movie-item" id="${e.id}">
              <div class="top-movie-box">
            
                <img
                  class="top-movie-small-img"
                  src="${e.medium_cover_image}"
                  alt="${e.title_english}"
                  title="${e.title_english}"
                />
                <div class ="top-movie-small-img-rt"> <p class="top-movie-descr-txt">IMDb: ${e.rating}</p></div>
                
                <div class="top-movie-descr">
                  <ul class="top-movie-descr-list">
                    <li class="top-movie-descr-item">
                      <h3 class="top-movie-descr-subtitle">${e.title_long}</h3>
                      <p class="top-movie-descr-txt">${o}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`}).join("");l.topMovieList.insertAdjacentHTML("beforeend",s)}async function x(t,s,e){const o="https://movie-database-api1.p.rapidapi.com/list_movies.json",i="",a=new URLSearchParams({limit:s,page:e,quality:"all",genre:"all",minimum_rating:"0",query_term:t,sort_by:"year",order_by:"desc"}),r=`${o}${i}?${a}`,c={"x-rapidapi-key":"0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b","x-rapidapi-host":"movie-database-api1.p.rapidapi.com"};try{const d=await n.get(r,{headers:c}),v=d.data.data.movies,y=d.data.data.movie_count;return{queryMovies:v,totalMovies:y}}catch(d){console.error("Помилка отримання даних:",d)}}async function M(){const t="https://movie-database-api1.p.rapidapi.com/list_movies.json",s="",e=new URLSearchParams({limit:"20",page:"1",quality:"all",genre:"all",minimum_rating:"0",query_term:"0",sort_by:"year",order_by:"desc"}),o=`${t}${s}?${e}`,i={"x-rapidapi-key":"0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b","x-rapidapi-host":"movie-database-api1.p.rapidapi.com"};try{const r=(await n.get(o,{headers:i})).data.data.movies;console.log(r),_(r)}catch(a){console.error("Помилка отримання даних:",a)}}async function S(t){console.log(`Завантажуємо деталі для фільму з id: ${t}`);const s="https://movie-database-api1.p.rapidapi.com/movie_details.json",e="",o=new URLSearchParams({movie_id:t,with_images:"true",with_cast:"true"}),i=`${s}${e}?${o}`,a={"x-rapidapi-key":"0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b","x-rapidapi-host":"movie-database-api1.p.rapidapi.com"};try{const c=(await n.get(i,{headers:a})).data.data.movie;console.log("показуємо опис фільму",c),$(c)}catch(r){console.error("Помилка отримання даних:",r)}}async function j(){const t="https://movie-database-api1.p.rapidapi.com/list_movies.json",s="",e=new URLSearchParams({limit:"5",page:"1",quality:"all",genre:"Comedy",minimum_rating:"0",query_term:"0",sort_by:"date_added",order_by:"desc"}),o=`${t}${s}?${e}`,i={"x-rapidapi-key":"0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b","x-rapidapi-host":"movie-database-api1.p.rapidapi.com"};try{const r=(await n.get(o,{headers:i})).data.data.movies;console.log(r),f(r)}catch(a){console.error("Помилка отримання даних:",a)}}async function q(){const t="https://movie-database-api1.p.rapidapi.com/list_movies.json",s="",e=new URLSearchParams({limit:"5",page:"1",quality:"all",genre:"all",minimum_rating:"8",query_term:"0",sort_by:"year",order_by:"desc"}),o=`${t}${s}?${e}`,i={"x-rapidapi-key":"0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b","x-rapidapi-host":"movie-database-api1.p.rapidapi.com"};try{const r=(await n.get(o,{headers:i})).data.data.movies;console.log(r),L(r)}catch(a){console.error("Помилка отримання даних:",a)}}M();j();q();l.lastMovieList.addEventListener("click",A);l.form.addEventListener("submit",T);l.searchTxtLoaderMore.style.display="none";l.searchBtnLoadMore.style.display="none";let p="",g=1;const u=10;async function T(t){t.preventDefault(),l.searchMovieList.innerHTML="",g=1;let s=0;if(l.searchBtnLoadMore.style.display="none",p=t.currentTarget.elements.query.value.trim(),p){l.searchBtnLoadMoreтзь.style.display="none",l.searchTxtLoaderMore.style.display="block";try{const{totalMovies:e,queryMovies:o}=await x(p,u,g);if(!e)return;b(o),s=Math.ceil(e/u),console.log(`Всього сторінок: ${s}`),s>1?l.searchBtnLoaderBox.style.display="block":m.info({title:"Увага",message:"🔹 Ви досягли кінця результатів пошуку",position:"topCenter",timeout:5e3})}catch{m.error({title:"Помилка",message:"❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}finally{l.searchTxtLoaderMore.style.display="none"}}else{m.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}l.form.reset()}function A(t){const s=t.target.closest(".last-movie-item");if(!s)return;const e=s.id;console.log("Вибраний фільм з id:",e),S(e),B()}function B(){setTimeout(()=>{if(!l.boxAboutMovie)return;const t=document.querySelector(".last-movie-list li");if(!t){console.log("Галерея порожня або ще не завантажилася");return}console.log("Елемент",t);const s=t.getBoundingClientRect().height;console.log("Висота",s),window.scrollBy({top:-s*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map

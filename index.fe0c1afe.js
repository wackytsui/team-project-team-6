new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(n,i,s){return`\n      <div class="swiper-pagination-custom">\n        <span class="slide-count">${(i<10?"0":"")+i}</span>\n        <div class="swiper-pagination-line"></div>\n        <span class="slide-count">${(s<10?"0":"")+s}</span>\n      </div>\n    `}}});
//# sourceMappingURL=index.fe0c1afe.js.map

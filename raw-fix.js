const rawAssets='https://raw.githubusercontent.com/SamStace/workaway-portfolio/1fe6d2a35d7d0920948e4504307508fb87765034/site-assets/';
document.querySelectorAll('img[src^="site-assets/"]').forEach(img=>{const relative=img.getAttribute('src').replace(/^site-assets\//,''); const absolute=rawAssets+relative; img.src=absolute; img.closest('[data-src]')?.setAttribute('data-src',absolute)});


const rawAssets='https://raw.githubusercontent.com/SamStace/workaway-portfolio/main/site-assets/';
document.querySelectorAll('img[src^="site-assets/"]').forEach(img=>{const relative=img.getAttribute('src').replace(/^site-assets\//,''); const absolute=rawAssets+relative; img.src=absolute; img.closest('[data-src]')?.setAttribute('data-src',absolute)});


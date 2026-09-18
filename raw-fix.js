const rawAssets='https://raw.githubusercontent.com/SamStace/workaway-portfolio/1a00be9508b4075f0ee0b7fd8bf0a7ddc1c2d0c6/site-assets/';
document.querySelectorAll('img[src^="site-assets/"]').forEach(img=>{const relative=img.getAttribute('src').replace(/^site-assets\//,''); const absolute=rawAssets+relative; img.src=absolute; img.closest('[data-src]')?.setAttribute('data-src',absolute)});

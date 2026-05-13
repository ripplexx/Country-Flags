const countries = [
  {
    flag: 'https://flagcdn.com/w160/tr.png',
    original: 'https://flagcdn.com/w640/tr.png',
    name: 'Türkiye',
  },
  {
    flag: 'https://flagcdn.com/w160/jp.png',
    original: 'https://flagcdn.com/w640/jp.png',
    name: 'Japonya',
  },
  {
    flag: 'https://flagcdn.com/w160/br.png',
    original: 'https://flagcdn.com/w640/br.png',
    name: 'Brezilya',
  },
  {
    flag: 'https://flagcdn.com/w160/de.png',
    original: 'https://flagcdn.com/w640/de.png',
    name: 'Almanya',
  },
  {
    flag: 'https://flagcdn.com/w160/fr.png',
    original: 'https://flagcdn.com/w640/fr.png',
    name: 'Fransa',
  },
  {
    flag: 'https://flagcdn.com/w160/it.png',
    original: 'https://flagcdn.com/w640/it.png',
    name: 'İtalya',
  },
];


const galleryElems = document.querySelector('.gallery');

galleryElems.innerHTML = countries
.map(({flag,original,name}) =>
    `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" 
            src="${flag}" 
            data-source="${original}" 
            alt="${name}" />
        </a>
    </li>`).join('');


galleryElems.addEventListener('click',event =>{
    event.preventDefault();

    if(event.target.nodeName !== 'IMG'){
        return;
    }

    const largeImg = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${largeImg}">`);

    instance.show();


    function onKeyDown(event){
        if(event.key === 'Escape'){
            instance.close();
        }
        document.removeEventListener('keydown', onKeyDown);
    }

    document.addEventListener('keydown', onKeyDown);
});




const movies = [
  {
    poster: 'https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    original: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    title: 'The Shawshank Redemption',
  },
  
  
  {
    poster: 'https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    original: 'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    title: 'The Dark Knight',
  },
  
  {
    poster: 'https://image.tmdb.org/t/p/w300/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',
    original: 'https://image.tmdb.org/t/p/original/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg',
    title: 'Forrest Gump',
  },
];


const galleryElems = document.querySelector('.gallery');

galleryElems.innerHTML = movies
.map(({poster,original,title}) => 
    `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" 
    src="${poster}" 
    data-source="${original}" alt="${title}" />
  </a>
</li>`).join('');


galleryElems.addEventListener('click', event =>{
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') return;

    const largeImage = event.target.dataset.source;

    const instance =basicLightbox.create(`<img src="${largeImage}">`);

    instance.show();

    function onKeyDown(event){
        if(event.key === 'Escape'){
            instance.close();

            document.removeEventListener('keydown', onKeyDown );
        }
    }
    
    document.addEventListener('keydown',onKeyDown);


});
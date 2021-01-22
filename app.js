const form = document.querySelector('#meme-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const imageUrl = document.querySelector('#image-url');
    const textTop = document.querySelector('#text-top');
    const textBottom = document.querySelector('#text-bottom');
    const imagesContainer = document.querySelector('.images-container');
    const div = document.createElement('div');
    const top = document.createElement('p');
    const bottom = document.createElement('p');
    const img = document.createElement('img');

    top.innerText = textTop.value;
    bottom.innerText = textBottom.value;
    img.setAttribute('src', imageUrl.value);
    div.append(img, top, bottom);
    imagesContainer.appendChild(div);

    top.classList.add('top');
    bottom.classList.add('bottom');
    div.classList.add('image-container');
    form.reset();
});

const sectionElement = document.querySelector('section');
sectionElement.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        event.target.parentElement.remove();
    }
});


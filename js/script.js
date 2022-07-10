const pictures = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    title: 'Chile',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Argentina',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    title: 'Colombia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
];

const gallery = document.querySelector('#carousel .gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let imageElements = '';

pictures.forEach(picture => {
  const {url, title, description} = picture;
  const img = `<img src="${url}" alt="${title}" />`;

  imageElements += `
  <figure>
  ${img}
  <figcaption>
  <h2>${title}</h2>
  <h6>${description}</h6>
  </figcaption>
  </figure>
  `;
})

gallery.innerHTML = imageElements;

const figure = document.querySelectorAll('#carousel figure');

let activeIndex = 0;
figure[activeIndex].classList.add('active');

nextButton.addEventListener('click', function(){
    figure[activeIndex].classList.remove('active');
    activeIndex++;
    if (activeIndex === pictures.length) {
        activeIndex = 0;
    }
    figure[activeIndex].classList.add('active');
});

prevButton.addEventListener('click', function() {
    figure[activeIndex].classList.remove('active');
    activeIndex--;
    if(activeIndex < 0) {
        activeIndex = pictures.length - 1;
    }
    figure[activeIndex].classList.add('active');
});




































// images[activeIndex].classList.add('active');

// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// nextButton.addEventListener('click', function() {

//     activeIndex += 1;

// })

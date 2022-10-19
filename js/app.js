const menuClick = document.getElementById('mobile-menu');
const menuClose = document.querySelector('.closebtnx');
const speakersDiv = document.getElementById('speakers');

const speakers = [
  {
    id: 1,
    name: 'Emmanuel Mhango',
    position: 'Director of Flex at CODE 101 Tutorials',
    description: 'Emmanuel manages the Flex department and is a senior fellow at IEEE',
    img: './images/emmanuel.jpg',
  },
  {
    id: 1,
    name: 'Martin Luther',
    position: 'Dean of Academics, University of Kent',
    description: 'Martin heads the faculty of computer science. He is also the board chair at Berlin Academy of Sciences',
    img: './images/luther.jpg',
  },
  {
    id: 1,
    name: 'Marianela Gonzalez',
    position: 'Consultant of Vue at Nisha Tech',
    description: 'Marianela the senior consultant at Nisha Tech. She is specialised in Vue development and databases',
    img: './images/maria.jpg',
  },
  {
    id: 1,
    name: 'Loniss Odala',
    position: 'HRM Manager at Kika Corp',
    description: 'Loniss is the Human resources manager at Kika Corp. She is speaks about how she recruites developers',
    img: './images/loniss.jpg',
  },
  {
    id: 1,
    name: 'Klaus Chilima',
    position: 'CEO of W3Schools',
    description: 'Klaus heads one the most influencial and widely used tech company as far as online tutorials are concerned',
    img: './images/chilima.jpg',
  },
  {
    id: 1,
    name: 'Shaibou Karim',
    position: 'Developer at XTS Technologies',
    description: 'Shaibou Karim is the lead software engieneer at XTS Technologies. he will speak about coding in Ruby',
    img: './images/shaibou.jpg',
  },
];

menuClick.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('body').style.overflow = 'hidden';
  menuClick.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
  menuClick.style.display = 'block';
  document.getElementById('body').style.overflow = 'visible';
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
  document.getElementById('mobile-menu').style.display = 'none';
  document.getElementById('body').style.overflow = 'visible';
  document.getElementById('myNav').style.width = '0%';
  } else {
  document.getElementById('mobile-menu').style.display = 'block';
  }
});

speakers.forEach((data) => {
  speakersDiv.innerHTML += `
    <div class="speaker">
      <div class="picture">
        <img src="${data.img}" alt="${data.name}" class="img-style">
      </div>
      <div class="speaker-content">
        <ul class="speaker-content-ul">
          <li class="speaker-details-name">${data.name}</li>
          <li class="speaker-details-position">
            ${data.position} <br>
            <span class="line-speaker"></span>
          </li>
          <li class="speaker-details-description">
            ${data.description} 
          </li>
        </ul>
      </div>
    </div>
  `;
});

const btn = document.createElement('button');
btn.setAttribute('class', 'more-speakers mobile');
const para = document.createElement('p');
para.setAttribute('class', 'button-speaker-text');
para.innerHTML += 'MORE &nbsp;<i class="fa fa-angle-down fa-lg colored"></i>';
btn.appendChild(para);
speakersDiv.appendChild(btn);

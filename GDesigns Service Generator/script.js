const btn = document.querySelector('#view_services');
const service_type = document.querySelector('.serviceType');
const service_category = document.querySelector('.serviceCategory');

const services = [
  {
    service_category: 'Graphics Design Services',
    service_type: `Photo Editing
    Illustration
    Branding`,
  },
  {
    service_category: 'Web Development Services',
    service_type: `Static Web Design
    Dynamic Web Design`,
  },
  {
    service_category: 'Training 1 Services',
    service_type: `Graphics design using:
    Photoshop
    Illustrator
    InDesign
    Corel Draw
    UI design using Figma`,
  },
  {
    service_category: 'Training 2 Services',
    service_type: `Web development using:
    Wordpress
    HTML
    CSS
    JavaScript
    React
    Python`,
  },
];

let currentIndex = 0;
btn.addEventListener('click', function() {
  
  const currentService = services[currentIndex];

  service_category.innerText = currentService.service_category;
  service_type.innerText = currentService.service_type;

  currentIndex = (currentIndex + 1) % services.length;
});

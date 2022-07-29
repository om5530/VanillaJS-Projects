// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
console.log(links.classList);
navToggle.addEventListener('click', function () {
  // console.log(links.classList.contains('randodhm')); //it returns false
  // console.log(links.classList.contains('links')); //it returns true

  //method1
  // if (links.classList.contains('show-links')) {
  //   console.log(links.classList);
  //   console.log('removing');
  //   links.classList.remove('show-links');
  // } else {
  //   console.log(links.classList);
  //   console.log('adding');
  //   links.classList.add('show-links');
  // }

  //method2
  links.classList.toggle('show-links');
});

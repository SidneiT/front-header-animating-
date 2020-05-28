const $logo = document.querySelector('.logo');
const $navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar() {
  const pos = window.pageYOffset;

  if (pos >= $logo.offsetHeight && !$navBar.classList.contains('fix-pos')) {
    $navBar.classList.remove('abs-pos');
    $navBar.classList.add('fix-pos');
    return;
  }

  if (pos <= $logo.offsetHeight && !$navBar.classList.contains('abs-pos')) {
    $navBar.classList.remove('fix-pos');
    $navBar.classList.add('abs-pos');
  }
}

document.querySelectorAll('.nav-bar a').forEach((cur, idx) => {
  if (cur.getAttribute('href').getindexOf('http') !== -1) return;

  const section = document.querySelector(cur.getAttribute('href'));

  const params = {
    top: section.offsetTop - $navBar.offsetHeight,
    left: 0,
    behavior: 'smooth'
  };

  cur.addEventListener('click', event => {
    event.preventDefault();
    scrollTo(params);
  });
});

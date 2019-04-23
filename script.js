const profileBtn = document.querySelector('.js-profile-btn');


if (profileBtn) {
  profileBtn.addEventListener('click', (event) => {
    const profileAndActions = event.target.closest('.js-profile-and-actions');

    if (profileAndActions) {
      if (profileAndActions.classList.contains('js-active')) {
        profileAndActions.classList.remove('js-active');
      } else {
        profileAndActions.classList.add('js-active');
      }
    }
  })
}


const rightNews = document.querySelector('.js-right-news');

if (rightNews) {
  rightNews.addEventListener('click', (event) => {
    const target = event.target;



    if(target.classList.contains('link')) {
      if(!target.parentNode.classList.contains('submenu')) {
        const activeElement = rightNews.querySelector('.js-active');

        if (activeElement) {
          activeElement.classList.remove('js-active');
        }

        target.classList.add('js-active');
      }
    }
  })
}

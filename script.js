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

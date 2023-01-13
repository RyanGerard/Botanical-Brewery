const toggleButton = document.getElementById('toggle-Button');
  const navList = document.getElementById('nav-list');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
  }) 
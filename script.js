    window.addEventListener('load', () => {
      document.getElementById('header').classList.add('slide-down');

      setTimeout(() => {
        document.getElementById('mainContent').classList.add('slide-up');
      }, 100);
    });
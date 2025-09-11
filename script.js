    window.addEventListener('load', () => {
      // Slide down header
      document.getElementById('header').classList.add('slide-down');

      // Slide up main content
      setTimeout(() => {
        document.getElementById('mainContent').classList.add('slide-up');
      }, 100);
    });

 const button = document.querySelector('.btn');
 const catImage = document.getElementById('catImage');

 button.addEventListener('mouseenter', () => {
     catImage.style.display = 'block';
 });

 button.addEventListener('mouseleave', () => {
     catImage.style.display = 'none';
 });
  const showVideoBtn = document.getElementById('showVideoBtn');
  const videoContainer = document.getElementById('videoContainer');
  const myVideo = document.getElementById('myVideo');

  showVideoBtn.addEventListener('click', () => {
      if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
          videoContainer.style.display = 'block';
          showVideoBtn.textContent = 'Meow?';
          myVideo.play(); 
      } else {
          videoContainer.style.display = 'none';
          showVideoBtn.textContent = 'Meow.';
          myVideo.pause();
      }
  });

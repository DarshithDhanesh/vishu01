function goToSorry() {
  document.getElementById('mainPage').classList.remove('active');
  document.getElementById('sorryPage').classList.add('active');
}

function goBack() {
  document.getElementById('sorryPage').classList.remove('active');
  document.getElementById('mainPage').classList.add('active');
}

function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById('userPhoto');
    img.src = e.target.result;
    img.style.display = 'block';
    document.getElementById('photoPlaceholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}
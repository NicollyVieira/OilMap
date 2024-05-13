document.getElementById('rj').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  // Fecha a modal1
document.getElementById('closeBtn1').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  // Fecha a modal2
  document.getElementById('closeBtn2').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'none';
  });
  
  // Clique fora da modal para fechar
  document.getElementById('modal').onclick = function(event) {
    if (event.target == this) {
      this.style.display = "none";
    }
  };
  
  // Fecha a modal2
  document.getElementById('modal2').onclick = function(event) {
    if (event.target == this) {
      this.style.display = "none";
    }
  };

//modal-2
  document.getElementById('poço').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'block';
  });

 


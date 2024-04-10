document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var userData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    
    console.log('Datos del usuario:', userData);
    // Aquí puedes agregar el código para enviar los datos al servidor
  });
  
const users = [
    { username: 'franco', password: 'franco123' },
    { username: 'matias', password: 'matias456' },
    { username: 'julieta', password: 'julieta678' }
  ];
  
alert("Bienvenido a mi pagina, por favor ingrese sus datos")

  // funcion Login 
  function login() {
    let intentos = 3;
  
    while (intentos > 0) {
      let username = prompt('Ingrese su usuario:');
      let password = prompt('Ingrese su contraseña:');
  
      let isLoggedIn = false;
  
      for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
          isLoggedIn = true;
          break;
        }
      }
  
      if (isLoggedIn) {
        alert('Bienvenido/a!');
        return; // salida exitosa de funcion login
      } else {
        intentos--;
        alert(`Datos incorrectos. Le quedan ${intentos} intentos.`);
      }
    }
  
    alert('Usted exedio el numero de intentos. Pruebe mas tarde.');
  }
  
  // llamada a la funcion login
  login();
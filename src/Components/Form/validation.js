function validarEmail(email) {
    // Expresión regular para validar el formato de correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar que el correo electrónico cumpla con los requisitos
    if (!email) {
      return false; // El correo electrónico está vacío
    }
    
    if (email.length > 35) {
      return false; // El correo electrónico tiene más de 35 caracteres
    }
    
    if (!regex.test(email)) {
      return false; // El correo electrónico no cumple con el formato válido
    }
    
    return true; // El correo electrónico es válido
  }
  
 

  function validarPassword(password) {
    // Expresión regular para validar la contraseña
    const regex = /^(?=.*[0-9]).{6,10}$/;
    
    // Verificar que la contraseña cumpla con los requisitos
    if (!regex.test(password)) {
      return false; // La contraseña no cumple con los requisitos
    }
    
    return true; // La contraseña es válida
  }
module.exports = {
    validarEmail:validarEmail,
    validarPassword:validarPassword
}
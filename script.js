function validar(form){
    var dniNumber = form.dniNumber.value.trim()
    var dniLetter = form.dniLetter.value.trim()
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var calculatedLetter = letras[dniNumber % 23];

    if (dniNumber < 0 || dniNumber > 99999999) {
        alert('El número proporcionado no es válido');
        return false;
    }

    if(isNaN(dniNumber)){
        alert("Por favor, ingrese un carácter numérico")
        return false
    }

    if (calculatedLetter !== dniLetter) {
        alert('La letra que ha indicado no es correcta');
        return false;
    } else {
        alert('El número y la letra de DNI son correctos');
        return true;
    }
}
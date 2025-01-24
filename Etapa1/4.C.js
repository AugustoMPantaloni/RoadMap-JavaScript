function conversorFahrenheit () {
    let gradosCelsius = parseFloat (prompt ("ingrese su temperatura en celsius:"))
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    alert(`La temperatura es de ${gradosFahrenheit}° Fahrenheit.`)
}

conversorFahrenheit();
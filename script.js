const input = document.getElementById('input')
const output = document.getElementById('output')
const convert = document.getElementById('convert')

convert.addEventListener('click', ()=> {
    calculateBinary()
})

output.addEventListener('dblclick', ()=> {
    navigator.clipboard.writeText(output.value)
})

function calculateBinary () {
    let number = parseInt(input.value)
    let binary = ""
    while (number >= 1) {
        binary = (number % 2) + binary
        number = Math.floor(number / 2)
    }
    output.value = binary
}
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('value')
        getDialog(value)
    })
});

function getDialog(value) {
    const dialog = document.getElementById(value)
    dialog.showModal()
}

/* const closeButtons = document.querySelectorAll('exit-button')
closeButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
})

function closeModal() {

} */
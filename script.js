const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let targetId = button.dataset.target
        const dialog = document.getElementById(targetId)
        if(dialog) dialog.showModal()
    })
});

const closeButton = document.querySelectorAll('dialog button')
closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const dialog = button.closest('dialog')
        if(dialog) dialog.close()
    })
}) 
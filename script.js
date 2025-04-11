/* const buttons = document.querySelectorAll('button')
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
 */
/* const closeButtons = document.querySelectorAll('exit-button')
closeButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
})

function closeModal() {

} */

const dialog = document.querySelector("dialog");
const showButton = document.getElementsByClassName("btn chose")[0];
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
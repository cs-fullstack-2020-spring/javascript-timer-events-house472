// Create a simple form with a fieldset, legend of `Post Text`, textarea, a *hidden* `<h2>` message with the text `Start typing`, and a button that says `Allow Typing`. 

// When the page initially displays, the textarea should be disabled, and the message hidden. When the User clicks the button, display the hidden message, change the text on the button to `Stop Typing`, and enable the textarea so you can type into it. Clicking the button a second time should hide the hidden message, change the text of the button back to `Start Typing`, and disable the textarea. Each press of the button should toggle this behavior.

let disabled_text_el = document.querySelector("#post_body")
let cant_type = (evt) => {
    disabled_text_el = 
}
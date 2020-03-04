console.log("WELP!!!")
// These variables names are giving me a headache lol
// ### Exercise 1: click handler/text
// Create a simple form with a single `checkbox` and the message `DON'T CLICK THIS CHECKBOX!`. When the User tries to click checkbox, change the label for the checkbox to say, `I TOLD YOU NOT TO CLICK THIS!!!`
let chk_box_el = document.querySelector('#ckbx')
console.log(chk_box_el)
let btn_hndlr_el = document.querySelector("#btnHndler")
let ck_bx_el =document.querySelector("#ckbxlbl")
let chk_msg = (evt) => {
   ck_bx_el.innerHTML=('I told you not to click this!!!')
}

chk_box_el.addEventListener("click", chk_msg)
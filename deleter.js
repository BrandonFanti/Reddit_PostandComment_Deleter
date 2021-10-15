
function startClicker (element, timer) {
    setTimeout(element.click(),timer);
}


function delete_items(){
    menu_buttons = document.querySelectorAll('[class*="icon-overflow_horizontal"]')

    menu_buttons.forEach(function fn(element){
        startClicker(element, 0)        

        delete_button = document.querySelectorAll('[class*="icon-delete"]')[0].parentNode.parentNode

        startClicker(delete_button, 2000)

        confirm_button = document.querySelectorAll('[class*="_17UyTSs2atqnKg9dIq5ERg"]')[0]

        startClicker(confirm_button, 4000)

    })
}

delete_items()

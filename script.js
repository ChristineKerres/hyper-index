const openInfoboxButtons = document.querySelectorAll('[data-infobox-target]')
const closeInfoboxButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openInfoboxButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const infobox = document.querySelector(button.dataset.infoboxTarget)
        openInfobox(infobox)
    })
})

overlay.addEventListener('click', () =>{
    const infoboxs = document.querySelectorAll('.infobox.active')
    infoboxs.forEach(infobox =>{
        closeInfobox(infobox)
    })
})

closeInfoboxButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const infobox = button.closest('.infobox')
        closeInfobox(infobox)
    })
})

function openInfobox(infobox){
    if (infobox == null) return
    infobox.classList.add('active')
    overlay.classList.add('active')
}
function closeInfobox(infobox){
    if (infobox == null) return
    infobox.classList.remove('active')
    overlay.classList.remove('active')
}
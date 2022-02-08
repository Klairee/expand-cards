const panels = document.querySelectorAll('.panel')

function removeActive () {
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}

// function addActive () {
//     panels.forEach (panel => {
//         panel.classList.add('active')
//     })
// }
 
panels.forEach (panel => {
    panel.addEventListener ('click', () => {removeActive()
    panel.classList.add('active')
    })

}

)

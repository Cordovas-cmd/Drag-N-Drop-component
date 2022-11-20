const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// for of loop (node list)
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    console.log('Drag Start')
}

function dragEnd() {
    console.log('Drag End')
}

function dragOver() {
    console.log('Drag Over')
}

function dragEnter() {
    console.log('Drag Enter')
}

function dragLeave() {
    console.log('Drag Leave')
}

function dragDrop() {
    console.log('Drag Drop')
}
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
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

// add prevent default as per mdn guidelines ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event

function dragOver(e) {
    e.preventDefault()
    console.log('Drag Over')
}


function dragEnter(e) {
    e.preventDefault()
    this.className+= ' hovered'
    console.log('Drag Enter')
}

function dragLeave() {
    this.className = 'empty'
    console.log('Drag Leave')
}

function dragDrop() {
//    make sure it's empty before we drop.
    this.className= 'empty'
    this.append(fill)
   
}

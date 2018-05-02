export default class DnD {
    constructor (el) {
        let that = this
        this.el = el;
        this.items = Array.from(this.el.children)

        this.items.forEach(item => {
            that.setupitem(item)
        })
        
        console.log('New DragNDrop instance created: ', el);
    }

    setupitem(item) {
        // create parent element and make it droppable
        let newparent = document.createElement('div')
        item.parentNode.insertBefore(newparent, item)
        newparent.appendChild(item)
        // make item draggable
        item.setAttribute('draggable', 'true')

        // set up event handlers
        item.addEventListener('dragstart', this.handledragstart)
        item.addEventListener('dragenter', this.handledragenter)
        item.addEventListener('dragover', this.handledrag)
        item.addEventListener('drop', this.handledrop)

        newparent.addEventListener('dragover', ev => {ev.preventDefault()})
        newparent.addEventListener('dragenter', ev => {ev.preventDefault()})
    }

    handledragstart(ev) {
        ev.dataTransfer.setData('text', '<div>Hello there</div>')
    }

    handledragenter(ev) {
        let target = ev.toElement.parentNode;

        console.log('Target: ', target)
    }

    handledrag(ev) {
        // console.log('Drag: ', ev)
    }

    handledrop(ev) {
        console.log('Drop: ', ev)
        let target = ev.toElement.parentNode
        target.innerHTML = ev.dataTransfer.getData('text')
        
    }
}
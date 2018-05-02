export default class DnD {
    constructor (el) {
        this.el = el;
        this.items = Array.from(this.el.children)

        this.items.forEach(item => {
            item.addEventListener('dragstart', ev => {
                console.log('Event: ', ev)
            }, false)
        })
        
        console.log('New DragNDrop instance created: ', el);
    }
}
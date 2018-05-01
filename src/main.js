export default class DnD {
    constructor (el) {
        this.el = el;
        this.items = Array.from(this.el.children)
        // this.children = 'hello we are children';
        this.items.forEach(function (child) {
            console.log('Child: ', child)
        })
        
        console.log('New DragNDrop instance created: ', el);
    }
}
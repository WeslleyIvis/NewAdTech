export default class Accordion {
    constructor(element, content) {
        this.element = document.querySelectorAll(element);
        this.content = document.querySelectorAll(content);
    }

    handleEvent(element) {
        const events = ['click']
        element.forEach((content, index) => {
            content.addEventListener(events, () => {
                this.toggleElement(index)
            })
        })
    }

    toggleElement(index) {
        this.content[index].classList.toggle('active')
    }

    init() {
        this.handleEvent(this.element)
        return this
    }
}
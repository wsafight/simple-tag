import { El } from '@frameable/el'
import { defineComponent } from 'components-wrapper'

class SimpleTag extends El {
  render(html: Function) {
    return html` <div>123</div> `
  }
}

const installComponent = (prefixName: string) =>
  defineComponent(SimpleTag)(`${prefixName}-tag`)

export {
  SimpleTag
}  

export default installComponent

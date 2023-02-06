import { El } from 'el-ts'
import { defineComponent } from 'components-wrapper'

class SimpleTag extends El {

  render(html: Function) {
    return html`
    <div>123</div>
    `
  }
}
const installComponent = (name: string) => defineComponent(SimpleTag)(name)

export default installComponent
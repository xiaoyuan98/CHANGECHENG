import { ObjectBase } from '../core/ObjectBase'
import { Color } from '../math/Color.js'
class StandardLight extends ObjectBase {
  constructor() {
    super()

    this.type = 'light'

    this.color = new Color(1,1,1)
  }
}

export { StandardLight }

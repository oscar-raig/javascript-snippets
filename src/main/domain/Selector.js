export class Selector {
  constructor({cssSelector}={}) {
    this._cssSelector = cssSelector
    this._elementAndPseudoElement = 0
    this._idAttribute = 0
    this._attributeValueOrAttributeSelectionOrPseudoClass = 0
    this._calculateOrder2()
  }

  _calculateOrder2() {
    this._attributeValueOrAttributeSelectionOrPseudoClass += this._cssSelector.indexOf('.') !== -1 ?  1 :  0
    this._elementAndPseudoElement += this._cssSelector.indexOf('::') !== -1 ?  1 :  0
    this._idAttribute = this._cssSelector.indexOf('#') !== -1 ?  1 :  0
    this._elementAndPseudoElement += ELEMENTS.filter( element =>  this._cssSelector.includes(element)).length
  }

  getOrder() {
    return {
      attributeValueOrAttributeSelectionOrPseudoClass: this._attributeValueOrAttributeSelectionOrPseudoClass,
      idAttribute: this._idAttribute,
      elementAndPseudoElement: this._elementAndPseudoElement
    }
  }
}
const H1 = 'h1'
const BODY = 'body'
const P = 'p'
const EMPHASIS = 'em'
const  ELEMENTS = [H1, BODY, P, EMPHASIS]

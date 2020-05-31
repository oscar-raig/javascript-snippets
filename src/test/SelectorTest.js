import {expect} from 'chai'
import {Selector} from '../main/domain/Selector.js'

describe('Selector Should', () => {
  it('Selector with element h1',() => {
    const selector = new Selector({cssSelector:'h1'})
    const expectedOrder = {
      attributeValueOrAttributeSelectionOrPseudoClass:0,
      idAttribute: 0,
      elementAndPseudoElement: 1
    }
    expect(selector.getOrder()).to.deep.equal(expectedOrder)
  })
  it('Selector with element body',() => {
    const selector = new Selector({cssSelector:'body'})
    const expectedOrder = {
      attributeValueOrAttributeSelectionOrPseudoClass:0,
      idAttribute: 0,
      elementAndPseudoElement: 1
    }
    expect(selector.getOrder()).to.deep.equal(expectedOrder)
  })
  it('Selector with id attribute',() => {
    const selector = new Selector({cssSelector:'#id216'})
    const expectedOrder = {
      attributeValueOrAttributeSelectionOrPseudoClass:0,
      idAttribute: 1,
      elementAndPseudoElement: 0
    }
    expect(selector.getOrder()).to.be.deep.equal(expectedOrder)
  })
  it('Selector with pseudo element',() => {
    const selector = new Selector({cssSelector:'p::first-line'})
    const expectedOrder = {
      attributeValueOrAttributeSelectionOrPseudoClass:0,
      idAttribute:0,
      elementAndPseudoElement: 2
    }
    console.log(selector.getOrder())
    expect(selector.getOrder()).to.deep.equal(expectedOrder)
  })
  it('Selector with two  elements p em',() => {
    const selector = new Selector({cssSelector:'p em'})
    const expectedOrder = {
      attributeValueOrAttributeSelectionOrPseudoClass:0,
      idAttribute:0,
      elementAndPseudoElement: 2
    }
    expect(selector.getOrder()).to.deep.equal(expectedOrder)
  })

  it('Selector with element h2 and a class',() => {
    const selector = new Selector({cssSelector:'h2.grape'})
    const expectedOrder = {
      idAttribute:0,
      attributeValueOrAttributeSelectionOrPseudoClass:1,
      elementAndPseudoElement: 1
    }
    console.log(selector.getOrder())
    expect(selector.getOrder()).to.deep.equal(expectedOrder)
  })
})
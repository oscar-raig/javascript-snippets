import {expect} from 'chai'

describe('SelectorOrder Should', () => {
  it('Simple order between two selectors', () => {


    const selector1 = new Selector('h1')
    const selector2 = new Selector('body h1')
    const selectorOrer = SelectorOrder.order({selectors:[selector1, selector2]})
    expect(true).to.be.false

  })
})
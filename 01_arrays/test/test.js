const expect = require('chai').expect
const sinon = require('sinon')
const utils = require('../arrays')
const reverseSpy = sinon.spy(Array.prototype, 'reverse')
const pushSpy = sinon.spy(Array.prototype, 'push')

describe('Array', function() {
  it('should add an item to the end of the array', function() {
    let array = [] 
    pushSpy.reset()

    array = utils.add(array, 'I')
    array = utils.add(array, 'love')
    array = utils.add(array, 'arrays')

    expect(pushSpy.notCalled).to.equal(true)
    expect(array[0]).to.equal('I')
    expect(array[1]).to.equal('love')
    expect(array[2]).to.equal('arrays')
  })

  it('should reverse the array', function() {
    let array = ['I', 'love', 'arrays']
    reverseSpy.reset()
    pushSpy.reset()
    let reversedArray = utils.reverse(array)

    expect(reverseSpy.notCalled).to.equal(true)
    expect(pushSpy.notCalled).to.equal(true)
    expect(reversedArray).to.deep.equal(['arrays', 'love', 'I'])
  })

  it('should not modify the original array', function() {
    let array = ['I love'] 
    let newArray = utils.add(array, 'arrays')
    utils.reverse(newArray)

    expect(array).to.deep.equal(['I love'])
    expect(newArray).to.deep.equal(['I love', 'arrays'])
  })

})

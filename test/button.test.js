'use strict';

jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
var html = require('fs').readFileSync('./public/index.html').toString();
var sinon = require('sinon');
var onButtonClick = require('../public/javascripts/buttonClick.js')

describe('validateSubmits', function() {

  it('Clicks the button and shows the photo', function() {

    expect(mockCallBack).toHaveProperty('callCount', 1);
  expect($('#img').attr()).toEqual('src, logo.png');
  });
});
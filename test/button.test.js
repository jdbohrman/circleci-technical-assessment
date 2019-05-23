'use strict';

jest
  .dontMock('fs')
  .dontMock('jquery');

var $ = require('jquery');
var html = require('fs').readFileSync('./public/index.html').toString();
var onButtonClick = require('./public/javascripts/buttonClick.js')

describe('validateSubmits', function() {

  it('shows/hides error banner', function() {
    document.documentElement.innerHTML = html; 
    $('button').submit();
  expect(onButtonClick).toBeCalled();
  expect($('#img').attr()).toEqual('src, logo.png');
  });
});
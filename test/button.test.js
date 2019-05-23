'use strict';

import $ from 'onButtonClock';

jest.mock('../onButtonClick');

test('displays a image after a click', () => {
  document.body.innerHTML =
  '<div id="show_logo">' +
  '<button>Show Image</button>' +
  '<img src="logo.png"></img>' +
  '</div>';
  require('../onButtonClick');

  const $ = require('jquery');
  const onButtonClick = require('../onButtonClick');

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(buttonClick).toBeCalled();
  expect($('#img').attr()).toEqual('src, logo.png');
});

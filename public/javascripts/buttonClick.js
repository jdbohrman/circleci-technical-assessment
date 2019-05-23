function onButtonClick () {

$(document).ready(function()    {
  $('button').on('click', ()=>{
          $('img').attr('src', 'logo.png').show();
      });
  }); 
}

module.exports = onButtonClick;
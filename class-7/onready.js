
console.log( 'inside script', $('#printDateTime').length );

$( document ).ready(function(){
  console.log('Document is now ready!!!');
  console.log( 'inside script inside ready', $('#printDateTime').length  );

  /**
   * We are printing out the date time
   * on demand
   */
  $('#printDateTime').on('click', function(){
    console.log('printDateTime button clicked');
    const today = new Date();
    $('#time-display').html(today);
  });

  /**
   * We are going to print out
   * the date time every second
   */
  setInterval(function(){
    const today = new Date();
    $('#clock span').html(today);
  }, 1000);
});







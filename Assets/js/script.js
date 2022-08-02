// basic function
$(document).ready(function () {
    // event listener for save button clicks to save the item to agenda 
    $('.saveBtn').on('click',function () {

      var timeBlock = $(this).parent().attr('id');
      var value = $(this).siblings('.description');

      // save the event in localStorage
      localStorage.setItem(timeBlock, value);
  
      // Show notification that item was saved to local Storage by adding class 'show'
      // referenced: https://htmlcheatsheet.com/jquery/ 
      $('.notification').addClass('show');

      //time out so the message dissapears 
      setTimeout(function () {
      $('.notification').removeClass('show');
      }, 6000);

      // return text to the console log - not working as yet - is it needed?
      $(".description").text();
      console/log("text");
    });
  
    function hourUpdate() {
      // get current time from server
      var currentHour = moment().hours();
  
      // loop over time blocks - cant have
      $('.time-col').each(function (){
        var colHour = parseInt($(this).attr('id').split('-')[1]);
        // if past = grey in CSS, if present = red in CSS, if future = green in CSS
        if (colHour < currentHour) {
          $(this).addClass('.past');
        } else if (colHour === currentHour){
          $(this).removeClass('.past'); // must remove past before inserting present
          $(this).addClass('present');
        } else {
          $(this).removeClass('.past'); //must remove past AND present before including
          $(this).removeClass('.present');
          $(this).addClass('.future');
        }
      });
      
    }
      
  
    hourUpdate();
    // from StackOverflow : https://stackoverflow.com/questions/13313348/jquery-update-time 
    var serverTime = new Date();

    function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    serverTime = new Date(serverTime.getTime() + 1000);
    $('#currentDay').html(serverTime.toGMTString());
    }

    $(function() {
    updateTime();
    setInterval(updateTime, 1000);  //interval to update time 
    })
  
  
    // load any saved data (events) from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  
    // display current day on page - updated to include the time too - links to ID current day HTML
    $('#currentDay').text(moment().format('dddd, MMMM Do, LTS'));
  });
  
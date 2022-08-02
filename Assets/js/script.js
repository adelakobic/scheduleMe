// basic function
$(document).ready(function () {
    // display current day on page - updated to include the time too - links to ID current day HTML
    //$('#currentDay').text(moment().format('dddd, MMMM Do, LTS'));
    var displayDate(){
      $("#currentDay").text(moment().format('dddd, MMM Do, LTS'));
    }

    // event listener for save button clicks to save the item to agenda 
    $('.saveBtn').on('click',function () {
    
    }
  
      // save the event in localStorage
      localStorage.setItem(time, value);
  
      // Show notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
      // Timeout to remove 'notification that is stored' class after 5 seconds - this works already
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);

      // return text to the console log - not working as yet - is it needed?
      $(".description").text();
    });
  
    function hourUpdate() {
      // get current number of hours
      var currentHour = moment().hours();
      //var currentHour = moment.locale();
  
      // loop over time blocks
      $('.time-col').each(function () {
        var colHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        if (colHour < currentHour) {
          $(this).addClass('past');
        } else if (colHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdate();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
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
    //$('#currentDay').text(moment().format('dddd, MMMM Do, LTS'));
  });
  
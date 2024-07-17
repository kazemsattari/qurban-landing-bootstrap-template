// timer configuration
$(document).ready(function () {
  let dayValue = $("#day");
  let hourValue = $("#hour");
  let minuteValue = $("#minute");
  let secondValue = $("#second");
  let day = 14;
  let hour = 7;
  let minute = 8;
  let second = 22;
  let timer = setInterval(function () {
    if (second >= -1) {
      second--;

      if (day < 10) {
        dayValue.html("0" + day);
      } else {
        dayValue.html(day);
      }

      if (hour < 10) {
        hourValue.html("0" + hour);
      } else {
        hourValue.html(hour);
      }

      if (minute < 10) {
        minuteValue.html("0" + minute);
      } else {
        minuteValue.html(minute);
      }

      if (second < 10) {
        secondValue.html("0" + second);
      } else {
        secondValue.html(second);
      }

      if (second === 0 && minute > 0) {
        second = 60;
        minute--;
      }
      if (second === 0 && minute === 0 && hour > 0) {
        second = 60;
        minute = 59;
        hour--;
      }
      if (second === 0 && minute === 0 && hour === 0 && day > 0) {
        second = 60;
        minute = 59;
        hour = 24;
        day--;
      }
    }
    if (second === -1 && minute === 0 && hour === 0 && day === 14) {
      clearInterval(timer);
    }
  }, 1000);
});

//Check to see if the window is top if not then display button
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }
});
// counter for product in website
let executed = true;
$(window).scroll(function () {
  if ($(this).scrollTop() > 1100 && $(this).scrollTop() < 1200) {
    if (executed) {
      let select1 = $("#templatewordpress1 > span:first-child");
      let selectValue1 = 125;
      let select2 = $("#templatewordpress2 > span:first-child");
      let selectValue2 = 125;
      let select3 = $("#graphicdesign > span:first-child");
      let selectValue3 = 35;
      let select4 = $("#webpage > span:first-child");
      let selectValue4 = 65;
      counter(select1, selectValue1);
      counter(select2, selectValue2);
      counter(select3, selectValue3);
      counter(select4, selectValue4);
      executed = false;
    }
  }
  function counter(select, selectValue) {
    let index = 0;
    let dataInterval = setInterval(function () {
      index++;
      $(select).html(index);
      if (index === selectValue) {
        clearInterval(dataInterval);
      }
    }, 60);
  }
});
//Click event to scroll to top
$(".scrollToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

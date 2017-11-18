$(function() {

  // your code will go here
  var $badges = $('#badges');

  $.ajax({
    url: 'https://www.codeschool.com/users/yisus.json',
    dataType: 'jsonp',
    success: function(resp){
      var html = ''
      resp.courses.completed.forEach(element => {
        html += '<div class="course">';
        html += '<h3>' + element.title + '</h3>';
        html += '<img src="' + element.badge + '" />';
        html += '<a href="' + element.url + '" target="_blank" class="btn btn-primary">See Course</a>';
        html += '</div>';
      });

      $badges.html(html);
    }
  });

});

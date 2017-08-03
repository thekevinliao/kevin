const url = 'https://randomuser.me/api/';
function setup(){
    $.getJSON(url, 
    (data) => {
        var userTitle = data.results[0].name.title
        var userFirstName = data.results[0].name.first
        var userLastName = data.results[0].name.last
        var userGender = data.results[0].gender
        var userPicture = data.results[0].picture.large
        var userEmail = data.results[0].email
         var userPhone = data.results[0].phone
        $("body").append("<h1>"+ userTitle +" "+ userFirstName +" "+ userLastName + "</h1>")
        $("body").append("<h2>" + userGender + "</h2>")
        $("body").append("<img src='" + userPicture + "'></img>")
        $("body").append("<h2>" + userEmail + "</h2>")
        $("body").append("<h2>" + userPhone + "</h2>")
    }
    )}

$(document).ready(setup);
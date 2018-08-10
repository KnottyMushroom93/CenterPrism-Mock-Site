let backgrounds = ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0444373dd059057834eff6e6a3e5eaa7&auto=format", "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a6ba9edd5cbfe2c9ed4cf4c4c2a8bb0&auto=format", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d5c6c65f9940b030316c3cdf11b16659&auto=format"];

let backgrounds2 = ["https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fce4ce8856a711cc50a14e03e58783a&auto=format", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a7430d7bd5676bc7b81f2b8bf8f6a75&auto=format", "https://images.unsplash.com/photo-1521623692445-8d613b81e3ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b48a803a1d5aeecf14db41057ffff6c&auto=format"];

let backgrounds3 = ["https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d7cac606b3752d340f2c342f32536727&auto=format", "https://images.unsplash.com/photo-1525857332689-4b3110c2d3f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64092aab3ca44d0dd8f1314166dba348&auto=format", "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db36a7eb03990e6a31df3b8195e0a3a4&auto=format"];
$('#main-container').delay(1000).fadeIn(500, animateBackground());

function animateBackground() {

    window.setTimeout(function(){

        let url = backgrounds[backgrounds.push(backgrounds.shift()) - 1];

        $('#main-container').delay(7000).fadeOut(1000, function(){

            $(this).css("background-image", "url(" + url + ")")

        }).fadeIn(1000, animateBackground())

    });
}

$('#main-container2').delay(1000).fadeIn(400, animateBackground2());

function animateBackground2() {

    window.setTimeout(function(){

        let url2 = backgrounds2[backgrounds2.push(backgrounds2.shift()) - 1];

        $('#main-container2').delay(10000).fadeOut(1000, function(){

            $(this).css("background-image", "url(" + url2 + ")")

        }).fadeIn(1000, animateBackground2())

    });
}



$('#main-container3').delay(1000).fadeIn(400, animateBackground3());

function animateBackground3() {

    window.setTimeout(function(){

        let url3 = backgrounds3[backgrounds3.push(backgrounds3.shift()) - 1];

        $('#main-container3').delay(10000).fadeOut(1000, function(){

            $(this).css("background-image", "url(" + url3 + ")")

        }).fadeIn(1000, animateBackground3())

    });
}
// window.onload = animateBackground();

// console.log(x)
// Overall number of lines thus far, 1586

function initMap() {
        var myLatLng = {lat: -25.363, lng: 131.044};

        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 4
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
      }
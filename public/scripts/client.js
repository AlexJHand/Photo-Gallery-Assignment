// Confirm sourcing
console.log('In js');

// Photo array
var photoArray = [
    {
        image: '../images/IMG_4562.JPG',
        description: 'My father playing with me as a baby.',
        likes: 0
    },
    {
        image: '../images/IMG_4558.JPG',
        description: 'My punk rock phase.',
        likes: 0
    },
    {
        image: '../images/IMG_4557.JPG',
        description: 'Playing in a band.',
        likes: 0
    },
    {
        image: '../images/IMG_4559.JPG',
        description: 'My wedding day.',
        likes: 0
    },
    {
        image: '../images/IMG_4563.png',
        description: 'The day my wife and I rescued him from kitty-jail.',
        likes: 0
    },
    {
        image: '../images/IMG_4560.JPG',
        description: 'Working hard at Prime.',
        likes: 0
    }
] // End photoArray

// Angular module
var myApp = angular.module('myApp', []);

// Controller
myApp.controller('PhotoController', function ($http) {
    console.log('NG');
    // Hold this controller in a variable
    var vm = this;

    // Bring photoArray into controller
    vm.photos = photoArray;
    console.log(vm.photos);

    // Function to display photos
    // vm.displayPhotos() = function () {
    //     console.log('In displayPhotos');
        

    // } // End getPhotos
}); // End PhotoController
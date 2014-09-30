'use strict';

/**
 * @ngdoc function
 * @name invisionappFrontEndChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the invisionappFrontEndChallengeApp
 */
 angular.module('invisionappFrontEndChallengeApp')
 .controller('MainCtrl', function ($scope) {
  $scope.posts = [
  {
    user: {
      name: 'Sam Soffes',
      thumb: 'images/users/thumbs/1.png'
    },
    content: 'How to Get Inspired: the Right Way - Designmodo bit.ly/1lE4uJc Good stuff from @designmodo!',
    postedTime: '1m'
  },
  {
    user: {
      name: 'Meg Robichaud',
      thumb: 'images/users/thumbs/2.png'
    },
    content: 'My view this morning is simply beautiful... instagram.com/p/mV0PUrHRwQ/',
    attachment: 'images/users/i1.png',
    postedTime: '15m'
  },
  {
    user: {
      name: 'Kerem Suer',
      thumb: 'images/users/thumbs/3.png'
    },
    content: '8 Apps to Turn Your Pipe Dreams Into Prototypes on.mash.to/1oubyu8',
    postedTime: '19m'
  },
  {
    user: {
      name: 'Liang Shi',
      thumb: 'images/users/thumbs/4.png'
    },
    content: 'How to get animations out of your head. http://bit.ly/1q7BngO  Funny and useful.',
    postedTime: '22m'
  },
  {
    user: {
      name: 'Vitor Leal',
      thumb: 'images/users/thumbs/5.png'
    },
    content: 'You have to see this bike. It will make your daily commute a absolute joy ride! vimeo.com/p/mV0PUrHRwQ/',
    attachment: 'images/users/i2.png'
  },
  {
    user: {
      name: 'Pallavi Gupta',
      thumb: 'images/users/thumbs/6.png'
    },
    content: 'Need some reading? 11 free ebooks for designers | Creative Bloq bit.ly/1lE5QDM via @netmag'
  },
  {
    user: {
      name: 'Jenny Shen',
      thumb: 'images/users/thumbs/7.png'
    },
    content: 'Perfect day to be outside taking pictures instagram.com/p/mV0PUrHRwQ/',
    attachment: 'images/users/i3.png'
  },
  {
    user: {
      name: 'Jonathan Moreira',
      thumb: 'images/users/thumbs/8.png'
    },
    content: 'Thoughtful brand decisions vs. emotional brand decisions.  ow.ly/vtT2i'
  },

  {
    user: {
      name: 'Jon Brennan',
      thumb: 'images/users/thumbs/9.png'
    },
    content: 'Had some time to play with the interactive portion of inDesignCC bit.ly/1lE5QD'
  },
  {
    user: {
      name: 'Michael Wong',
      thumb: 'images/users/thumbs/10.png'
    },
    content: 'Awesome! Check this out. instagram.com/p/mV0PUrHRwQ/',
    attachment: 'images/users/i4.png'
  },
  {
    user: {
      name: 'Ed Wellbrook',
      thumb: 'images/users/thumbs/11.png'
    },
    content: '#freelancers will enjoy @WDTrends for graphic and web design tips and inspiration.'
  },
  {
    user: {
      name: 'Ignacio Giri',
      thumb: 'images/users/thumbs/12.png'
    },
    content: 'Sponsor // Bootstrap Responsive Templates bit.ly/1qfjLOl #design'
  },
  {
    user: {
      name: 'Lauren Gray',
      thumb: 'images/users/thumbs/13.png'
    },
    content: '7 Servings of Type for a Healthy Head & Body heydesigner.net/yfwnj'
  },
  {
    user: {
      name: 'Buzz Usborne',
      thumb: 'images/users/thumbs/15.png'
    },
    content: 'Road trip!  bit.ly/1hkXFdK',
    attachment: 'images/users/i5.png'},
  {
    user: {
      name: 'Scott Riley',
      thumb: 'images/users/thumbs/15.png'
    },
    content: 'Deal with your problems before they deal with your happiness.'
  },
  {
    user: {
      name: 'Ryan O. Hicks',
      thumb: 'images/users/thumbs/16.png'
    },
    content: 'Excited about @99U Conf lineup this year conference.99u.com'
  },
  {
    user: {
      name: 'Samihah Azim',
      thumb: 'images/users/thumbs/17.png'
    },
    content: 'Love this picture instagram.com/p/mV0PUrHRwQ/',
    attachment: 'images/users/i6.png'
  }
  ];
});

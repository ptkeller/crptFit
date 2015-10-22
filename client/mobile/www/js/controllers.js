angular.module('crptFit.controllers', [])

.controller('LoginCtrl', [function() { }])

.controller('ProfileCtrl', ['Social', function(Social) {
  var self = this;
  // Add a refreshing function here
  self.friendCount = Social.getFriendsLength();
  self.trainerCount = Social.getTrainersLength();
  self.clientCount = Social.getClientsLength();

  self.feed = [
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'}
  ];
 }])
.controller('HomeCtrl', [function() {
  var self = this;
  // Add a refreshing function here
  self.feed = [
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'}
  ];
 }])
.controller('MenuCtrl', [function() { }])
.controller('ProgressCtrl', ['$scope', function($scope) {
  $scope.chartConfig = {
      options: {
          chart: {
              type: 'spline'
          }
      },
      series: [{
          data: [2, 16, 32, -5, 80]
      }],
      title: {
          text: ''
      },
      loading: false
  }
 }])
.controller('MessagesCtrl', ['Message', function(Message) {
  //post and get messages controls here
  var self = this;
  self.messages = Message.messageList();
  self.clickUser = Message.clickUser();
  self.userCli = Message.userMess();
  Message.clickUser();

  self.refreshMessages = function(){

  };
}])
.controller('SocialCtrl', ['Social', function(Social) {
  var self = this;
  // Add a refreshing function here
  self.list = Social.friendsList();

  self.showFriends = function(){
    self.list = Social.friendsList();
  };

  self.showClients = function(){
    self.list = Social.clientsList();
  };

  self.showTrainers = function(){
    self.list = Social.trainersList();
  }
}])

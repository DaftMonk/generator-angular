'use strict'

angular.module '<%= scriptAppName %>'
.controller 'AdminCtrl', ($scope, $http, Auth, User) ->

  # Use the User $resource to fetch all users
  $scope.users = User.query()

  $scope.delete = (user) ->
    User.remove id: user._id
    _.remove $scope.users, user

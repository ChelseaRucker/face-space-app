'use strict';

angular.module('face-space-app').controller('RegisterCtrl', function ($rootScope, $scope, $location, API_URL) {
  var vm = this;

  vm.register = function () {
    var fb = new Firebase(API_URL);

    fb.createUser({
      email: vm.email,
      password: vm.password
    }, function (error, authData) {
      if (error) {
        console.log('Error creating user', error);
      } else {
        console.log('Successful creation', authData.uid);
        vm.login();
      }
    });
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYXV0aC9yZWdpc3Rlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNMLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUV4QixVQUFVLENBQUMsY0FBYyxFQUFFLFVBQVUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLE1BQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxJQUFFLENBQUMsUUFBUSxHQUFHLFlBQVk7QUFDekIsUUFBSSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTlCLE1BQUUsQ0FBQyxVQUFVLENBQUU7QUFDZCxXQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUs7QUFDZixjQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVE7S0FDckIsRUFBRSxVQUFVLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDN0IsVUFBSSxLQUFLLEVBQUU7QUFDVCxlQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO09BQzNDLE1BQU07QUFDTCxlQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRCxVQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDWjtLQUNGLENBQUMsQ0FBQztHQUVKLENBQUM7Q0FDSCxDQUFDLENBQUMiLCJmaWxlIjoic3JjL2Fzc2V0cy9hdXRoL3JlZ2lzdGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG5cdC5tb2R1bGUoJ2ZhY2Utc3BhY2UtYXBwJylcblxuXHQuY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzY29wZSwgJGxvY2F0aW9uLCBBUElfVVJMKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICB2YXIgZmIgPSBuZXcgRmlyZWJhc2UoQVBJX1VSTCk7XG5cbiAgICAgIGZiLmNyZWF0ZVVzZXIgKHtcbiAgICAgICBlbWFpbDogdm0uZW1haWwsXG4gICAgICAgcGFzc3dvcmQ6IHZtLnBhc3N3b3JkXG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNyZWF0aW5nIHVzZXJcIiwgZXJyb3IpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWwgY3JlYXRpb25cIiwgYXV0aERhdGEudWlkKTtcbiAgICAgICAgIHZtLmxvZ2luKCk7XG4gICAgICAgfVxuICAgICB9KTtcblxuICAgfTtcbiB9KTtcbiJdfQ==
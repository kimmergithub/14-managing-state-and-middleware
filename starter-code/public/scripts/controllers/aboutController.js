'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT-DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  //
  // ANSWER === hiding everything except for the about page content... if fired on routes.js and calls retieve and load github Repos.
  //NOTE show - hide function
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);

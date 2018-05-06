/*jshint esversion: 6 */
'use strict';
const qm = new quickMessage()

function postObserverCallback(mutationsArr){
  for(var mutation of mutationsArr){
    if(mutation.type == "childList"){
      var newPosts = [];
      const postArrCurrent = $(qm.getSelector);

      for(var post of postArrCurrent){
        if(!$.inArray(post, qm.getPostArr){
          newPosts.push(post);
        }
      }

      qm.postArr = qm.addPostsToChange(newPosts);
      qm.setNewPosts = newPosts;
    }
  }
}


(function init(){
  qm.postObserver(postObserverCallback);
  qm.consolelog();
})();

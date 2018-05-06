/*jshint esversion: 6 */
'use strict';
const qm = new quickMessage()

function postObserverCallback(mutationsArr){
  for(var mutation of mutationsArr){
    if(mutation.type == "childList"){
      let newPosts = qm.getNewPosts()

      qm.updatePostsArrs = newPosts;
      qm.addMsgButtons = newPosts;
    }
  }
}

(function init(){
  qm.postObserver(postObserverCallback);

  qm.addMsgButtons(qm.getPostsArr);
})();

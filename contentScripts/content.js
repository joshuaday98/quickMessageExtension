/*jshint esversion: 6 */
'use strict';
const qm = new quickMessage()

function postObserverCallback(mutationsArr){
  for(var mutation of mutationsArr){
    if(mutation.type == "childList"){
      let newPosts = qm.getNewPosts()

      qm.updatePosts = newPosts;

      for(let post of )
    }
  }
}

qm.postObserver(postObserverCallback);

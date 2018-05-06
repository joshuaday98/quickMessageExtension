/*jshint esversion: 6 */

class quickMessage {
  constructor(){
    this.postSelector = 'div[id^="hyperfeed_story_id_"]';
    this.postArr = $(this.postSelector);
    this.newPosts = [];
  }

  set setNewPosts(newPosts){
    this.newPosts = newPosts;
  }

  get getPostsArr(){
    return this.postArr;
  }

  get getSelector(){
    return this.postSelector;
  }

  postObserver(callback){
    const targetNode = $("#contentArea div[id^='topnews_main_stream_'] div[id^='more_pager_pagelet'] > div")[0];
    const config = {childList: true};

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
}

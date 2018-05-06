/*jshint esversion: 6 */

class quickMessage {

  constructor(){
    this.postSelector = 'div[id^="hyperfeed_story_id_"]';
    this.postArrTotal = $(this.postSelector);
    this.newPosts = [];

    this.addStyles();
  }

  set updatePostsArrs(newPosts){
    this.postArrTotal.push(newPosts);
    this.newPosts = newPosts;
  }

  get getPostsArr(){
    return this.postArrTotal;
  }

  get getSelector(){
    return this.postSelector;
  }



  buildMessageBtn(){
    const buttonTemplate = $(this).find('._1mto')[0].clone();
    buttonTemplate.addClass("qmBtn");
  }

  postObserver(callback){
    const targetNode = $("#contentArea div[id^='topnews_main_stream_'] div[id^='more_pager_pagelet'] > div")[0];
    const config = {childList: true};

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  getNewPosts(){
    let newPosts = [];
    const currentPosts = $(this.getSelector);

    for(let post of currentPosts){
      if(!$.inArray(post, this.getPostArr)){
        newPosts.push(post);
      }
    }

    return newPosts;
  }

  addStyles(){
    $('head').append('<style>._1mto.qmBtn a{background-position: -19px -211px;}</style>')
  }
}

/*jshint esversion: 6 */

class quickMessage {

  constructor(){
    this.postSelector = '._5jmm';//'div[id^="hyperfeed_story_id_"]';
    this.postArrTotal = $(this.postSelector);

    this.addStyles();
  }

  set updatePostsArrs(newPosts){
    this.postArrTotal.push(newPosts);
  }

  get getPostsArr(){
    return this.postArrTotal;
  }

  get getSelector(){
    return this.postSelector;
  }

  addMsgButtons(postArr){
    for(let post of postArr){
      const btnDict = this.buildMsgBtn(post);
      btnDict.btnParent.append(btnDict.newBtn);
    }
  }

  buildMsgBtn(post){
    const likeBtn = $(post).find('._1mto')[0];

    const btnParent = $(likeBtn).parent();
    const newBtn = $(likeBtn).clone();
    newBtn.addClass("qmBtn");
      
    const msgHref = btnParent.find('._ohe').attr('href');
      console.log(msgHref)
    msgHref.substring(26, msgHref.length - 7)
    console.log(msgHref)
    newBtn.find('a').text("Message").attr('href', '');

    return {btnParent:btnParent,newBtn:newBtn};
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
      if($.inArray(post, this.getPostsArr) !== 0){
        if($(post).find('.qmBtn').length == 0){
          newPosts.push(post);
        }
      }
    }
    this.updatePostsArrs = newPosts;

    return newPosts;
  }

  addStyles(){
    $('head').append('<style>._1mto.qmBtn a:before{background-position: -19px -211px !important;}</style>')
  }
}

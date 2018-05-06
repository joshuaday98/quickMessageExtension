const quickMessage = {
     postObserverCallback: function(mutationsArr){

        for(var mutation of mutationsArr){
            const postsContainer = mutation.addedNodes;
              console.log(postsContainer);

            $.each(postsContainer, function(i){
              if (postsContainer[i]. = "^4ikz"){
                console.log(postsContainer[i])
              }
            });
        }
     },
     postObserver: function(){
        const targetNode = $("#contentArea div[id^='topnews_main_stream_'] div[id^='more_pager_pagelet'] > div")[0];
        const config = {childList: true};

        const observer = new MutationObserver(this.postObserverCallback);
        observer.observe(targetNode, config);
    }
}

const quickMessage = {
     postObserverCallback: function(mutationsArr){

        for(var mutation of mutationsArr){
            let postsContainer = $(mutation.addedNodes[0]);
            console.log(postsContainer)
            postsContainer = postsContainer.find('div[id^="u_fetchstream"]');
            console.log(postsContainer)
        }
     },
     postObserver: function(){
        const targetNode = $("#contentArea div[id^='topnews_main_stream_'] div[id^='more_pager_pagelet'] > div")[0];
        const config = {childList: true};

        const observer = new MutationObserver(this.postObserverCallback);
        observer.observe(targetNode, config);
    }
}

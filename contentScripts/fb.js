const quickMessage = {
     postObserverCallback: function(mutationsArr){
        
        for(var mutation of mutationsArr){
            const postsContainer = mutation.addedNodes;
            
            postsContainer = postsContainer.filter(function(){
                return this.hasClassName("_4ikz") == true
            });
            
            console.log(postContainer)
        }   
     },
     postObserver: function(){
        const targetNode = $("#contentArea div[id^='topnews_main_stream_'] div[id^='more_pager_pagelet'] > div")[0];
        const config = {childList: true};
         
        const observer = new MutationObserver(this.postObserverCallback);
        observer.observe(targetNode, config);
    }
}

function autoJump(id,url)
{
		var urlFrom = localStorage["from"];
    var urlTo = localStorage["to"];
    
    if(!urlFrom || !urlTo)
    {
    	urlFrom="";
    	urlTo="";
    }
    else
    {
			url=url.replace(urlFrom,urlTo);
	  	chrome.tabs.remove(id);
    	chrome.tabs.create({url:url});
    }
}
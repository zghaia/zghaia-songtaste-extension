/*
    <background.html for runing in background of SongTaste Extension.>
    Copyright (C) <2011> <SongTaste Extension Authors :zghaia@gmail.com>
                          All rights reserved.
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details 
                 <http://www.gnu.org/licenses/gpl.html>
*/


/*
var source=document.head.innerHTML;
var REGmatch=/http.*?(?:MP3|Mp3|mp3|wma|Wma|WMA|rar|RAR|ZIP|zip)/;
var URLlink=source.match(REGmatch);

chrome.extension.sendRequest({type:"URL",URLlink:URLlink});
*/
function filter(link)
{
	var REGmatch=/http.*?(?:MP3|Mp3|mp3|wma|Wma|WMA|rar|RAR|ZIP|zip)/;
	var URLlink;
	var xhr = new XMLHttpRequest();
	xhr.open("GET", link, true);
	//xhr.onreadystatechange = function() {
	if (xhr.readyState == 4  && xhr.status == 200)
	{
		var source=xhr.response;
		URLlink=source.match(REGmatch);
	    chrome.extension.sendRequest({type:"URL",URLlink:URLlink});
		return URLlink; 
		console.log('filter(link) URLlink '+ URLlink);
		//download(URLlink);
	}
	//};
	console.log('filter(link) URLlink '+ URLlink);
    xhr.send();
}
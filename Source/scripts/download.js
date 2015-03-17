function download(link)
{	
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/octet-stream");
	//xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
	xhr.open("GET", link, true);
	xhr.responseType = "arraybuffer";
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4  && xhr.status == 200)
		{
			var bb = new (window.BlobBuilder || window.WebKitBlobBuilder)();
			var res = xhr.response;
			if (res)
			{
				var byteArray = new Uint8Array(res);
			}
			bb.append(byteArray.buffer);
			var blob = bb.getBlob("application/octet-stream");
			bb.append(byteArray.buffer);
			var iframe = document.createElement("iframe");
			iframe.style.display = "none";
			iframe.src = window.webkitURL.createObjectURL(blob);
			document.body.appendChild(iframe);
			delete xhr;
			delete blob;
			delete bb;
		}
	    xhr.send(null);
	}
}


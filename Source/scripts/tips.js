function nitiftips(flag) {
	var time=0;
	if(flag){
		time=20000;
		var notification = webkitNotifications.createNotification(
			'icon.png',            
			'download tip', 						
			'OK,Good Luck'      
		);
	}else{
		time=30000;
		var notification = webkitNotifications.createNotification(
			'icon.png',           
			'error tip', 						
			'Oh,Bad Luck'      
		);
	}
	notification.show(); 
	setTimeout(function(){
        notification.cancel();
        }, time);
	
}
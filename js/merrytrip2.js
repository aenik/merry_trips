 $(function(){
    $('.banglore').popover({
        'placement': 'top',
        'content': '<b>Pickup Points:</b><br><br>Kormangla<br>Silk Road<br>ECity',
    });
    $('.salem').popover({
        'placement': 'top',
        'content': '<b>Drop Points:</b><br><br>4 Road Junction<br>Bye-Pass road',
    });
    $('.confirmed').popover({
    	'trigger': 'click',
    	'placement': 'bottom',
    	'content':'<h4>Confirmed Trip:</h4><p style="color: rgb(191, 144, 0);">The host pays us 1 seat&#39;s equivalent fare as an indication of his commitment to the trip immaterial of number of seats getting filled.</p><p style="color: rgb(191, 144, 0);">This gives a high level of assurance to the guest that this trip will be on.</p><p style="color: rgb(191, 144, 0);">See more about <a href="#">Confirmed Trip</a> here</p>',
    });
    $('.pending').popover({
    	'trigger': 'click',
    	'placement': 'bottom',
    	'content':'<h4>Travel Only If Full Trip:</h4><p style="color: rgb(191, 144, 0);">The host pays us 1 seat&#39;s equivalent fare as an indication of his commitment to the trip provided all seats gets filled.</p><p style="color: rgb(191, 144, 0);">Guests can block this trip using a Merry Trip ticket.</p><p style="color: rgb(191, 144, 0);">See more about <a href="#">TIF Trip</a> here</p>',
    });
    $('.green-guests').popover({
    	'trigger': 'click',
    	'placement': 'top',
    	'content': '<b>Green Guests:</b><br><br><p style="color: rgb(191, 144, 0);">Green guests are those users of Merry Trips who belong to a corporate listed with us.</p><p style="color: rgb(191, 144, 0);">This is to ensure the safety of the host and other guests.</p><p style="color: rgb(191, 144, 0);">See more <a href="#">here</a>',
    });
    $('.collapse').collapse();
    $(".modify-search").click(function () {
   		$(this).toggleClass("clicked");
	});
});
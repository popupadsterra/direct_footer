$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	    $(this).removeClass('xepo_ads');

	    //ubah google dengan ads direct link
	    window.open('https://www.google.com', '_blank');
	});
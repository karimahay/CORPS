




	$('#epaule').click(function(){
	$( ".bouton" ).addClass( "rouge" );
  $('.epauletxt').toggle("MasterScroll");
   $('.poignettxt').hide();
   $('.coudetxt').hide();
   $('.presentation').hide();
   $('.chevilletxt').hide();
   $('.genouxtxt').hide();
   $('.hanchetxt').hide();
  
});
	$('#poignet').click(function(){
  $('.poignettxt').toggle("MasterScroll");
  // $(this).css("background", "red");
  $('.coudetxt').hide();
  $('.epauletxt').hide();
  $('.presentation').hide();
  $('.chevilletxt').hide();
  $('.genouxtxt').hide();
  $('.hanchetxt').hide();
});
	$('#coude').click(function(){
  $('.coudetxt').toggle("MasterScroll");
  // $(this).css("background", "red");
  $('.poignettxt').hide();
  $('.epauletxt').hide();
  $('.presentation').hide();
  $('.chevilletxt').hide();
  $('.genouxtxt').hide();
  $('.hanchetxt').hide();
});
	$('#cheville').click(function(){
  $('.chevilletxt').toggle("MasterScroll");
  // $(this).css("background", "red");
  $('.poignettxt').hide();
  $('.epauletxt').hide();
  $('.presentation').hide();
  $('.coudetxt').hide();
  $('.genouxtxt').hide();
  $('.hanchetxt').hide();
});
	$('#genoux').click(function(){
  $('.genouxtxt').toggle("MasterScroll");
  // $(this).css("background", "red");
  $('.poignettxt').hide();
  $('.epauletxt').hide();
  $('.presentation').hide();
  $('.coudetxt').hide();
  $('.chevilletxt').hide();
  $('.hanchetxt').hide();
});
	$('#hanche').click(function(){
  $('.hanchetxt').toggle("MasterScroll");
  // $(this).css("background", "red");
  $('.poignettxt').hide();
  $('.epauletxt').hide();
  $('.presentation').hide();
  $('.coudetxt').hide();
  $('.chevilletxt').hide();
  $('.genouxtxt').hide();
});
	


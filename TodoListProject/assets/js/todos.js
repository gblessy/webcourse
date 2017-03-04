// Check off Specific Todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Adding Todo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//Grabing new Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
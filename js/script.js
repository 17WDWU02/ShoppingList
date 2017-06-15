$(document).ready(function(){


	$("#Submit").click(function(){
		event.preventDefault();
		var value = $("#AddItem").val();
		if(value.length === 0){
			alert("Please enter an Item");
			return;
		}
		$("#NeedToShop").append("<li>"+value+"</li>");
		$("#AddItem").val("");
	})

	$("#NeedToShop, #InTrolley").sortable({
		connectWith: ".lists",
		containment: "#Device"
	});

	$("#InTrolley").droppable({
		accept: "li",
		drop: function (event, ui){
			ui.draggable.removeClass("red").addClass("green");

		}
	})

	$("#NeedToShop").droppable({
		accept: "li",
		drop: function (event, ui){
			ui.draggable.removeClass("green").addClass("red");

		}
	})

	$("#Trash").droppable({
		accept: "li",
		tolerance: "pointer",
		drop: function (event, ui){
			ui.draggable.remove();
		}
	})







})
// Your jQuery goes here

var userData = {name: " ", 
email: " ", 
html: {likes: [], dislikes: []},
css: {likes: [], dislikes: []},
js: {likes: [], dislikes: []},
strengths: {html: " ", css: " ", js: " "},
currentQuestion: "welcome"

};
/*
$("#startBtn").click(function(event){
$("#welcome").hide();
$("#q1").show();
if(userData.name){
	$("#name").val()(userData.name);
}
});
*/

$("#startBtn").click(function(event){
	$("#welcome").hide();
	$("#q1").show();
	if(userData.name){
		$("#name").val()(userData.name);
	}

});

$("#name").change(function(event){
console.log($("#name").val());

});

$("#email").change(function(event){
console.log($("#email").val());
if($("#email").val() && $("#name").val())
$("#q1Next").prop("disabled",false);

});

$("#q1Next").click(function(event){
	userData.name=$("#name").val();
	userData.email=$("#email").val();
$("#q1").hide();
$("#q2").show();
});

$("#htmlQ").click(function(event){
$("#q2").hide();
$("#q2a").show();
});


$("#cssQ").click(function(event){
$("#q2").hide();
$("#q2b").show();
});

$("#jsQ").click(function(event){
$("#q2").hide();
$("#q2c").show();
});

$(".prevQ2").click(function(event){
$("#q2").show();
$(this).parent().parent().parent().hide();
});










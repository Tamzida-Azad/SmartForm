$("#startBtn").click(function(event){

  $("#welcome").fadeOut(500);
  $("#q1").show();

});


function EmailCheck(emailval) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(emailval);
}
function validateName(name){
		var re = /^[A-z ]+$/;
		return re.test(name);
}

$("#q1Next").click(function(event){


  	if(!$("#name").val()){
  		alert("Name Is Empty");
  		return false;
  	}

  	else if(!validateName($("#name").val())){
  	alert("Please enter a valid name using only alphabets");}

		if(!$("#email").val()){
			alert("email Is Empty");
			return false;
		}
		else if(!EmailCheck($("#email").val())){
			alert("Invalid email");
			return false;
		}

  userData.name = $("#name").val();
  userData.email = $("#email").val();
  userData.currentQuestion = "q1";
  localStorage.setItem('userData',JSON.stringify(userData));
  $("#q1").hide();
  $("#q2").show();
});

////////////////////////////////////////(--html--)/////////////////////////////////////////////////////////////////
$("#htmlBtn").click(function(event){
  $("#q2").fadeOut(500);
  $("#q2a").show();
	userData.currentQuestion = "q2a";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$("#htmlnextBtn").click(function(event){



		userData.currentQuestion = "q2";
		userData.position[0]=true;
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));
		$("#htmlBtn").prop("disabled", true);
		  $("#q2").fadeIn(500);
			$("#q2a").fadeOut(500);

			if(userData.position[0]==true && userData.position[1]==true && userData.position[2]==true){
					$("#q2a").fadeOut(500);
					$("#q2").hide();
					$("#q3").show();
					userData.currentQuestion = "q3";
					localStorage.setItem('userData',JSON.stringify(userData));
			}


});

$(".checkbox").click(function(event){
			userData.html.likes=[];

		$.each($("input[name='likesHTML']:checked"), function(){

				userData.html.likes.push(this.id);


		});
		userData.html.dislikes=[];
		$.each($("input[name='DlikesHTML']:checked"), function(){

				userData.html.dislikes.push(this.id);


		});


		userData.currentQuestion = "q2a";
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));


});

/////////////////////////////////////////(--CSS--)/////////////////////////////////////////////////////////////
$("#cssBtn").click(function(event){
  $("#q2").fadeOut(500);
  $("#q2b").show();
	userData.currentQuestion = "q2b";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$("#cssnextBtn").click(function(event){

		userData.currentQuestion = "q2";
		userData.position[1]=true;
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));
		$("#cssBtn").prop("disabled", true);
		  $("#q2").fadeIn(500);
			$("#q2b").fadeOut(500);

			if(userData.position[0]==true && userData.position[1]==true && userData.position[2]==true){
					$("#q2b").fadeOut(500);
					$("#q2").hide();
					$("#q3").show();
					userData.currentQuestion = "q3";
					localStorage.setItem('userData',JSON.stringify(userData));
			}


});

$(".checkbox").click(function(event){
			userData.css.likes=[];

		$.each($("input[name='likesCSS']:checked"), function(){

				userData.css.likes.push(this.id);


		});
		userData.css.dislikes=[];
		$.each($("input[name='DlikesCSS']:checked"), function(){

				userData.css.dislikes.push(this.id);


		});


		userData.currentQuestion = "q2b";
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));


});
/////////////////////////////////////////(--JV--)/////////////////////////////////////////////////////////////

$("#JSBtn").click(function(event){
  $("#q2").fadeOut(500);
  $("#q2c").show();
	userData.currentQuestion = "q2c";
	localStorage.setItem('userData',JSON.stringify(userData));
});

$("#jvnextBtn").click(function(event){

		userData.currentQuestion = "q2";
		userData.position[2]=true;
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));
		$("#JSBtn").prop("disabled", true);
		  $("#q2").fadeIn(500);
			$("#q2c").fadeOut(500);

			if(userData.position[0]==true && userData.position[1]==true && userData.position[2]==true){
					$("#q2c").fadeOut(500);
					$("#q2").hide();
					$("#q3").show();
					userData.currentQuestion = "q3";
					localStorage.setItem('userData',JSON.stringify(userData));
			}


});

$(".checkbox").click(function(event){
			userData.js.likes=[];

		$.each($("input[name='likesJV']:checked"), function(){

				userData.js.likes.push(this.id);


		});
			userData.js.dislikes=[];
		$.each($("input[name='DlikesJV']:checked"), function(){

				userData.js.dislikes.push(this.id);


		});


		userData.currentQuestion = "q2c";
		localStorage.setItem('userData',JSON.stringify(userData));
		userData=JSON.parse(localStorage.getItem('userData'));


});
/////////////////////////////////////////////(Question 3)////////////////////////////////////////////////////////////////
$(".radio").click(function(event){
		userData.strengths.html="";
		userData.strengths.css="";
		userData.strengths.js="";

	$.each($("input[name='HTMLOptions']:checked"), function(){

		userData.strengths.html="#"+this.id;


});


$.each($("input[name='CSSOptions']:checked"), function(){

	userData.strengths.css="#"+this.id;


});
$.each($("input[name='JSOptions']:checked"), function(){

	userData.strengths.js="#"+this.id;


});


userData.currentQuestion = "q3";
localStorage.setItem('userData',JSON.stringify(userData));
userData=JSON.parse(localStorage.getItem('userData'));
});


///////////////////////////////////////////////(Thank you)//////////////////////////////////////////////////////////////

$("#strengthBtn").click(function(event){
	if(userData.strengths.js=="" || userData.strengths.html==""||userData.strengths.css==""){
		alert("Please choose all strength options...");
	}
	else{
  $("#q3").fadeOut(500);
  $("#thanks").show();
	userData.currentQuestion = "thanks";
	localStorage.setItem('userData',JSON.stringify(userData));
	}
});

$("#answer").click(function(event){

  $("#thanks").fadeOut(500);
  $("#ans").show();
	userData.currentQuestion = "thanks";
	localStorage.setItem('userData',JSON.stringify(userData));

	document.getElementById('ansName').innerHTML = "<strong>Name: </strong>"+userData.name;
	document.getElementById('ansEmail').innerHTML = "<strong>Email: </strong>"+userData.email;

		var temp="";var temp2;
		if(userData.html.likes.length===0){
			 temp="No possible likes";
		}
		else{
			for(var i=0; i<userData.html.likes.length; i++){
				temp2="#"+userData.html.likes[i];
			 temp=temp+" </br> "+$(temp2).val();
			}
		}

	document.getElementById('ansHTMLlikes').innerHTML = "<strong>HTML Likes: </strong></br>"+ temp;
	var temp=""
	if(userData.html.dislikes.length===0){
		 temp="No possible dislikes";
	}
	else{
		for(var i=0; i<userData.html.dislikes.length; i++){
			temp2="#"+userData.html.dislikes[i];
		 temp=temp+" </br> "+$(temp2).val();
		}
	}

	document.getElementById('ansHTMLdlikes').innerHTML = "<strong>HTML Dislikes:</strong> </br>"+ temp;
	var temp=""
	if(userData.css.likes.length===0){
		 temp="No possible likes";
	}
	else{
		for(var i=0; i<userData.css.likes.length; i++){
			temp2="#"+userData.css.likes[i];
		 temp=temp+" </br> "+$(temp2).val();
		}
	}
	document.getElementById('ansCSSlikes').innerHTML = "<strong>CSS likes:</strong> </br>"+ temp;
	var temp=""
	if(userData.css.dislikes.length===0){
		 temp="No possible likes";
	}
	else{
		for(var i=0; i<userData.css.dislikes.length; i++){
			temp2="#"+userData.css.dislikes[i];
		 temp=temp+" </br> "+$(temp2).val();
		}
	}
	document.getElementById('ansCSSdlikes').innerHTML = "<strong>CSS dislikes:</strong> </br>"+ temp;
	var temp=""
	if(userData.js.likes.length===0){
		 temp="No possible likes";
	}
	else{
		for(var i=0; i<userData.js.likes.length; i++){
			temp2="#"+userData.js.likes[i];
		 temp=temp+" </br> "+$(temp2).val();
		}
	}
	document.getElementById('ansJSlikes').innerHTML = "<strong>javascript likes:</strong> </br>"+ temp;
	var temp=""
	if(userData.js.dislikes.length===0){
		 temp="No possible dislikes";
	}
	else{
		for(var i=0; i<userData.js.dislikes.length; i++){
			temp2="#"+userData.js.dislikes[i];
		 temp=temp+" </br> "+$(temp2).val();
		}
	}
	document.getElementById('ansJSdlikes').innerHTML = "<strong>javascript dislikes:</strong> </br>"+ temp;
	temp2=userData.strengths.html;
	document.getElementById('HStrength').innerHTML = "<strong>HTML strength level:</strong> </br>"+$(temp2).val();
	document.getElementById('CStrength').innerHTML ="<strong>CSS strength level:</strong> </br>"+$(userData.strengths.css).val();
	document.getElementById('JStrength').innerHTML ="<strong>javascript strength level:</strong> </br>"+$(userData.strengths.js).val();


});

$("#delete").click(function(event){
	delete userData;
	userData = {
	name:"",
	email:"",
	html:{likes:[], dislikes:[]},
	css: {likes:[], dislikes:[]},
	js:{likes:[], dislikes:[]},
	position: [false,false,false],
	strengths:{html:"",css:"",js:""},
	currentQuestion:"welcome"
	};
	$("#htmlBtn").prop("disabled", false);
	$("#cssBtn").prop("disabled", false);
	$("#JSBtn").prop("disabled", false);
	$("#ans").fadeOut(500);
	$("#welcome").show();
	localStorage.setItem('userData', JSON.stringify(userData));
	Data=JSON.parse(localStorage.getItem('userData'));





});







/////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".prevBtn").click(function(event){
  $(this).parent().parent().parent().fadeOut(500);
  $("#q2").fadeIn(500);
	userData.currentQuestion = "q2";
	localStorage.setItem('userData',JSON.stringify(userData));
});
////////////////////////////////////////////////////////////////////////
//var userData={};
if(localStorage.getItem('userData')){
  userData=JSON.parse(localStorage.getItem('userData'));
  $('.question').hide();
  $('#'+userData.currentQuestion).show();
  $("#name").val(userData.name);
  $("#email").val(userData.email);
  $("#q1Next").prop("disabled", false);
	console.log(userData);

	for(var i=0; i<userData.html.likes.length; i++){
			 var temp=userData.html.likes[i];
			 $("#"+temp).prop('checked', true);
	 }

	 for(var i=0; i<userData.css.likes.length; i++){
				var temp=userData.css.likes[i];
				$("#"+temp).prop('checked', true);
		}
		for(var i=0; i<userData.js.likes.length; i++){
 				var temp=userData.js.likes[i];
 				$("#"+temp).prop('checked', true);
 		}

		for(var i=0; i<userData.html.dislikes.length; i++){
				 var temp=userData.html.dislikes[i];
				 $("#"+temp).prop('checked', true);
		 }

		 for(var i=0; i<userData.css.dislikes.length; i++){
					var temp=userData.css.dislikes[i];
					$("#"+temp).prop('checked', true);
			}
			for(var i=0; i<userData.js.dislikes.length; i++){
					var temp=userData.js.dislikes[i];
					$("#"+temp).prop('checked', true);
			}
	 if(userData.position[0]==true){
		 $("#htmlBtn").prop("disabled", true);
	 }
	 if(userData.position[1]==true){
		 $("#cssBtn").prop("disabled", true);
	 }
	 if(userData.position[2]==true){
		 $("#JSBtn").prop("disabled", true);
	 }
	 var temp1;

	 temp1=userData.strengths.html;
	 $(temp1).prop('checked', true);
	 temp1=userData.strengths.css;
	 $(temp1).prop('checked', true);
	 temp1=userData.strengths.js;
	 $(temp1).prop('checked', true);



}
else {
  userData = {
  name:"",
  email:"",
  html:{likes:[], dislikes:[]},
  css: {likes:[], dislikes:[]},
  js:{likes:[], dislikes:[]},
	position: [false,false,false],
  strengths:{html:"",css:"",js:""},
  currentQuestion:"welcome"
  };
  localStorage.setItem('userData',JSON.stringify(userData));
}

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});


	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

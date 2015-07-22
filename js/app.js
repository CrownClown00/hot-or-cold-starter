
//var guess = $("#userGuess").val();


$(document).ready(function () {
    //var guess = $("#userGuess").val();
    // var x = Math.floor((Math.random() * 100) + 1); 
    var y;
    var z = Math.floor((Math.random() * 100) + 1);



    /*--- Display information modal box ---*/




     $(".what").click(function(){
    $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    	$("a.close").click(function(){
    $(".overlay").fadeOut(1000);
    	});


    $(".button").click(function () {
        var y = $("#userGuess").val();
         if(y.trim().length==0){
             alert("Please enter a Number!")
             return false;
         }
          else{
            
            $('#guessList').append('<li>'+ y + '</li>');
                $("#userGuess").val(" ");
            

                             };
      
       
        
        
        gameStart(y);
        return false;









    });
    
    $("#userGuess").keypress(function(e){
        
          if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
   // display error message
        alert("Numbers Only!!");
              return false;
               
   };
        
        
    });

$("a.new").click(function(){
    location.reload();
    
});


});

var z = Math.floor((Math.random() * 100) + 1);

function gameStart(guess) {
    //y = $("#userGuess").val();
    //alert(guess);

    //var count =$("#count");
    //var gameState = true;

    


        console.log(z);


        if (Math.abs(guess - z)<10) {
            //alert("boom")
            $(".logos").html('<h1 class="fire">' + 'ON FIRE' + '</h1>');

            $('#count').html(function (i, val) {
                return val * 1 + 1
            });
            
        } else if (Math.abs(guess - z)<20) {
            //alert("boom")
            $(".logos").html('<h1 class="red">' + 'HOT' + '</h1>');

            $('#count').html(function (i, val) {
                return val * 1 + 1
            });
            
            
        } else if (Math.abs(guess - z)>10) {
            //alert("pow")
            $(".logos").html('<h1 class="blue">' + 'COLD' + '</h1> ');
            $('#count').html(function (i, val) {
                return val * 1 + 1
            });
        } 
            else if (Math.abs(guess - z)>20) {
            //alert("pow")
            $(".logos").html('<h1 class="blue">' + ' ICE COLD' + '</h1> ');
            $('#count').html(function (i, val) {
                return val * 1 + 1
            });
            }
    
    
    
    
    
    
    else if (guess == z) {
            alert("you win");
            gameState = false;
        };
        return guess;

    
};
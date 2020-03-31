
// video from bg
var videoBg = document.querySelector('video');
        videoBg.muted = "true";
        videoBg.play();
           


// Only latin letters in input
$(".latin").on("keypress", function(event) {
    var englishAlphabetAndWhiteSpace = /^[-@./#&+\w\s]*$/;
        var key = String.fromCharCode(event.which);
        if (event.keyCode == 8 || event.keyCode == 37 || event.keyCode == 39 || englishAlphabetAndWhiteSpace.test(key)) {
            return true;
        }
        return false;
    });
// turn of paste 
    $('.latin').on("paste", function(e) {
        e.preventDefault();
    });

    // contacts click animation 

    $(".bth-mob-contacts").click(function(){
        
        $('.contacts').addClass('activeMobContacts');
    });
 
    // menu click animation 

    $(".menu-mob-bth").click(function(){
        
        $('.head').toggleClass('activeMobMenu');
        $('body').toggleClass('noScroll');
    });

    $(".menu ul li a").click(function(){
        
        $('.head').toggleClass('activeMobMenu');
        $('body').toggleClass('noScroll');
    });

// nav bar change effect on scroll
    var top_show = 150; 
    var delay = 1000; 
    var orderBlock = $("#order").offset().top;
    $(document).ready(function() {
      $(window).scroll(function () { 
   
        if ($(this).scrollTop() > top_show && $(this).scrollTop() < orderBlock){
         $('#head').addClass('active-nav');
        }
        else 
        {
            $('#head').removeClass('active-nav');
        }
      });
    });
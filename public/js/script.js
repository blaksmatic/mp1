function highlightThis(a){var b=this.style.backgroundColor;this.style.backgroundColor="yellow",alert(this.className),this.style.backgroundColor=b}for(var divs=document.getElementsByTagName("div"),i=0;i<divs.length;i++)divs[i].addEventListener("click",highlightThis);var $window=$(window),$document=$(document);$document.ready(function(){$window.scroll(function(){var a=$document.scrollTop();a>30?$("nav.navbar").addClass("small"):$("nav.navbar").removeClass("small")})}),$document.ready(function(){$("a[href*=#]").on("click",function(a){("Trail"==this.id||"stor"==this.id||"charac"==this.id||"chrou"==this.id)&&a.preventDefault(),$("body").animate({scrollTop:$(this.hash).offset().top-100},"slow")})}),$document.ready(function(){$("#navIconRight").click(function(){$("#carousel ul").animate({marginLeft:-1280},1500,function(){$(this).find("li:last").after($(this).find("li:first")),$(this).css({marginLeft:0})})})}),$document.ready(function(){$("#navIconLeft").click(function(){$("#carousel ul").animate({marginLeft:1280},1500,function(){$(this).find("li:first").before($(this).find("li:last")),$(this).css({marginLeft:0})})})}),$document.ready(function(){var a=$("#Trailer").offset().top+700,b=$("#story").offset().top+900,c=($(".charPicture").offset().top,$("#carousel").offset().top+800);$window.scroll(function(){var d=$document.scrollTop()+130;d>a&&b>=d?$("#Trail").addClass("isHere"):$("#Trail").removeClass("isHere"),d>b&&c>=d?$("#stor").addClass("isHere"):$("#stor").removeClass("isHere"),d>c&&2350>=d?$("#chrou").addClass("isHere"):$("#chrou").removeClass("isHere"),d>=2350?$("#charac").addClass("isHere"):$("#charac").removeClass("isHere")})});
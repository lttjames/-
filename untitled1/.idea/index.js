$(function(){
    var navH = window.innerHeight;
    $(window).scroll(function(){
        var scroH = $(this).scrollTop();
        if(scroH>=navH){
            $("#top_shadow").css({"display":"block"});
        }else if(scroH<navH){
            $("#top_shadow").css({"display":"none"});
        }
        console.log(scroH==navH);
    })
})
window.onload=function(){
    var color_menu=document.getElementById("nav_color_menu");
    color_menu.onchange=function(){
        var bgcolor=this.value;
        if(bgcolor=="")return;
        var judge=document.getElementById("top_shadow").style.display;
        if(judge="block")document.getElementById("top_shadow").style.background=bgcolor;
        document.getElementById("nav_color_menu").style.background=bgcolor;
    }
}
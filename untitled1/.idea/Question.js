$(document).ready(function(){
    var solutions=document.getElementById("solution_box").getElementsByTagName("li");
    var questions=document.getElementById("question_box").getElementsByTagName("li");
    for(var i=0;i<questions.length;i++){
        questions[i].index=i;
        questions[i].onmousemove=function(){
            for(var i=0;i<questions.length;i++){
                solutions[i].style.display="none";
            }
            solutions[this.index].style.display="block"
        }
    }
    $("#notice_bar_icon1").click(function(){
        $("#tell_something").hide(100);
        $("#notice_change").hide(100);
        $("#question_and_solution").toggle(400);
    });
    $("#notice_bar_icon2").click(function(){
        $("#question_and_solution").hide(100);
        $("#notice_change").hide(100);
        $("#tell_something").toggle(400);
    });
    $("#notice_bar_icon3").click(function(){
        $("#tell_something").hide(100);
        $("#question_and_solution").hide(100);
        $("#notice_change").toggle(400);
    });
    $("#operation_add").click(function(){
        $("#mask").fadeIn(50);
        $("#operation_add_div").fadeIn(200);
    });
    $("#notice_add").click(function(){
        $("#mask").fadeIn(50);
        $("#problem_add_div").fadeIn(200);
    });
});




var notice_change_div_state = 0;
function ID_submit(){
    document.getElementById("ID_div").style.display="none";
    document.getElementById("mask").style.display="none";
    notice_change_div_state = 0;
}
function ID_close(){
    document.getElementById("ID_div").style.display="none";
    document.getElementById("mask").style.display="none";
    if(notice_change_div_state == 1){
        document.getElementById("notice_change_div").style.display="block";
        document.getElementById("mask").style.display="block";
    }
}
function solution_submmit(){
    document.getElementById("ID_div").style.display="block";
    document.getElementById("mask").style.display="block";
}
function notice_change_close(){
    document.getElementById("notice_change_div").style.display="none";
    document.getElementById("mask").style.display="none";
    notice_change_div_state = 0;
}
function notice_change_submmit(){
    document.getElementById("ID_div").style.display="block";
    document.getElementById("mask").style.display="block";
    notice_change_div_state = 1;
    document.getElementById("notice_change_div").style.display="none";
}
function alert_notice_change(){
    notice_change_div_state = 1;
    document.getElementById("mask").style.display="block";
    document.getElementById("notice_change_div").style.display="block";
}





$(document).ready(function(){
    $("#play-breakout").click(function(){
        var a=document.getElementById("ball")
        var area=document.getElementById("breakout")
        var target=document.getElementById("target")
        var le=0;
        var to=0;
        var left=0,l=5;
        var x=1;
        var y=2;
        var count=0;
        var start=setInterval(function(){
            if (count!=0){
                if (to<=0|| (to+a.clientHeight>=area.clientHeight-target.clientHeight && le+a.clientWidth>left && le<left+target.clientWidth)){
                    x=-x;
                }
                if (le<=0 || le+a.clientWidth>=area.clientWidth){
                    y=-y;
                }
                if (to+a.clientHeight>=area.clientHeight)
                {
                    clearInterval(start);
                    target.style.left=0;
                    alert("lose");
                }
            }
            to+=x;
            le+=y;
            count=1;
            a.style.top=to+"px";
            a.style.left=le+"px";
            $("#stop-breakout").click(function(){
                clearInterval(start);
                a.style.top=0;
                a.style.left=0;
                target.style.left=0;
            })
        },1);
        $("*").keydown(function(e){
            if (left< area.clientWidth-target.clientWidth && e.keyCode==83)
            {
                left+=l;
                target.style.left=left + "px";
            }
            if (left> 0 && e.keyCode==65)
            {
                left-=l;
                target.style.left=left + "px";
            }
        })
    })
})

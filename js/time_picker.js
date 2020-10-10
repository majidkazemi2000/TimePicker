$(document).ready(function () {

    var m = parseInt($("#minute").text());
    var h = parseInt($("#hour").text());
    if (h < 10){
        $("#hour").text("0"+h);
        $("#hour-picker").val("0"+h);
    }else{
        $("#hour").text(h);
        $("#hour-picker").val(h);
    }

    if (m < 10){
        $("#minute").text("0"+m);
        $("#minute-picker").val("0"+m);
    }else{
        $("#minute").text(m);
        $("#minute-picker").val(m);
    }



    $("#up_hour").click(function () {
        $("#hour").hide();
        var hour = parseInt($("#hour").text());
        if (hour < 24){
            hour++;
        }else{
            hour = 1;
        }

        if (hour < 10){
            $("#hour").text("0"+hour);
            $("#hour-picker").val("0"+hour);
        }else{
            $("#hour").text(hour);
            $("#hour-picker").val(hour);
        }
        $("#hour").show('clip');

    })
    $("#down_hour").click(function () {
        $("#hour").hide();
        var hour = parseInt($("#hour").text());
        if (hour > 1){
            hour--;
        }else{
            hour = 24;
        }
        if (hour < 10){
            $("#hour").text("0"+hour);
            $("#hour-picker").val("0"+hour);
        }else{
            $("#hour").text(hour);
            $("#hour-picker").val(hour);
        }
        $("#hour").show('clip');

    })

    $("#up_minute").click(function () {
        $("#minute").hide();
        var minute = parseInt($("#minute").text());
        if (minute < 59){
            minute++;
        }else{
            $("#hour").hide();
            minute = 1;
            var hour = parseInt($("#hour").text());
            ++hour;
            if (hour < 10){
                $("#hour").text("0"+hour);
                $("#hour-picker").val("0"+hour);
            }else{
                $("#hour").text(hour);
                $("#hour-picker").val(hour);
            }
            $("#hour").show('clip');
        }
        $("#minute").show('clip');
        if (minute < 10){
            $("#minute").text("0"+minute);
            $("#minute-picker").val("0"+minute);
        }else{
            $("#minute").text(minute);
            $("#minute-picker").val(minute);
        }
    })
    $("#down_minute").click(function () {
        $("#minute").hide();
        var minute = parseInt($("#minute").text());
        if (minute > 1){
            minute--;
        }else{
            $("#hour").hide();
            minute = 59;
            var hour = parseInt($("#hour").text());
            --hour;
            if (hour < 10){
                $("#hour").text("0"+hour);
                $("#hour-picker").val("0"+hour);
            }else{
                $("#hour").text(hour);
                $("#hour-picker").val(hour);
            }
            $("#hour").show('clip');
        }

        $("#minute").show('clip');
        if (minute < 10){
            $("#minute").text("0"+minute);
            $("#minute-picker").val("0"+minute);
        }else{
            $("#minute").text(minute);
            $("#minute-picker").val(minute);
        }


    })


    $("#send").click(function () {
        var hour = $("#hour-picker").val();
        var minute = $("#minute-picker").val();
        alert(hour + ":" + minute)
    })
})

/*
    create by majid kazemi
    github ==> www.github.com/majidkazemi2000
 */
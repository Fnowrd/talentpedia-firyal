$(document).ready(function () {
    $("#add").click(function () {
        $.getJSON("https://fakestoreapi.com/products", function(rs){
            var item = [];
            $.each(rs, function (key, val){
                item.push("<tr>");
                item.push("<td id = '"+key+"'>"+val.id+"</td>");
                item.push("<td id = '"+key+"'>"+val.title+"</td>");
                item.push("<td id = '"+key+"'>"+val.price+"</td>");
                item.push("<td id = '"+key+"'>"+val.description+"</td>");
                item.push("<tr>");
            })
            $("<ul/>", {
                "class": "my-new-list",
                html: item.join("")
            }).appendTo ("body");
          
        })  

    })
})


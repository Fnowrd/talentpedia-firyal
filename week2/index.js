/*$(document).ready(function () {
    $("btn1").click(function () {
        $("#id1").load("https://fakestoreapi.com/products")  
    })
})*/

//$(document).ready(function ()( {
   // $("button").click(function (){
    //    $("li").each(function (){
     //       alert($(this).text())
      //  });
   // });
//});

function appendText () {
    var text1 = "<p>Text dengan HTML</p>"
    var text2 = $("<p></p>").text("Text denga Jquery")
    var text3 = document.createElement("p")
    text3.innerHTML = "Text debgan DOM 344"

    $("body").append(text1,text2,text3)
}

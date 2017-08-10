$( document ).ready(function(){
function main(element){
    element.append(
    $('<img>',{id:'bobarr',src:'https://pbs.twimg.com/profile_images/494498645043982336/UdsPK7AP_400x400.jpeg'})
    );
}


$("p").on("click",function(){
    main($(this));
}
)
})





alert("helooo")
var im= function gitImage(){

    var userOrder;
    var numberOfImage;
    var orderImage = '';
    while(userOrder() !=='wool' && userOrder !=='colored'){
      userOrder = prompt("please enter wool or colored ?")
      numberOfImage = prompt("how many image do you want ?")
for (var i = 0 ; i < numberOfimage ; i++){
      console.log("index is " + i);
      if ( userOrder === "wool"){
          orderImage = orderImage + '<img src="https://previews.123rf.com/images/mitrarudra/mitrarudra1712/mitrarudra171200138/92523177-colorful-decorative-wall-hangings-handicrafts-on-display-with-white-background-during-the-handicraft.jpg">';
      }else if ( userOrder === "colored"){
          orderImage = orderImage + '<img src="https://p0.piqsels.com/preview/222/154/375/model-color-alive-handcrafted.jpg">';
      }console.log(orderImage);
      
     

}return orderImage;
    }      document.write('<h3>' +im() + '<h3>' );
}
$(function() {

  // your js goes in betwen these two things

  // starting cut equal to zero
  var cut = 0;

  // select all of the items
  $(".item").click(function(){
    var amount = $(this).attr("data-amount-cut");

    // this is changing the amount to a number so it can be added up
    var amountNumber = parseInt(amount);
    cut = cut + amountNumber;

    // updates the #cut so far text
    $("#cut-so-far").text(cut);

    //selects the thing we clicked on and adds the class already cut
    $(this).addClass("already-cut");

  }); // end of what happens when item is clicked on


}); // don't delete this
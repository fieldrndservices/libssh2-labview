document.write("<style>");
document.write("body.cssframes {overflow:hidden;margin:0px;padding:0px 0px 0px 5px;}");
document.write("#styleDivTitle {border-bottom:5px solid black;margin-left:-5px;padding:.25em 5px .25em 5px;width:auto;}");
document.write("#styleDivScrolling {overflow:auto; padding:5px 0px 5px 0px;width:100%;}");
document.write("</style>");

document.write("<style media='print'>");
document.write("body.cssframes {overflow:visible;}");
document.write("</style>");

$(window).load(function() {
   
 $("body").has("#styleDivTitle").has("#styleDivScrolling").addClass("cssframes");
 setScrollingDivHeight();
 $(window).resize(setScrollingDivHeight); 
});

function setScrollingDivHeight() {
 //IE in quirks mode doesn't take padding into account correctly. Compensating for that.
 var padding=($.browser.msie && !jQuery.support.boxModel) ? 0 : 10; //Hard-coding the padding to reflect the styles I write above
 $("#styleDivScrolling").height($(window).height()-$("#styleDivTitle").outerHeight()-padding); 
}

function AdjustScroll() {
 setScrollingDivHeight();
}

function adjustScroll() {
 setScrollingDivHeight();
}
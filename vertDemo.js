window.onload = init;

var $currentPanel,
    $wind,
    $winWidth,
    $winHeight,
    $doc,
    $panels,
    $menubar,
    $contentBox;


function init() {
  $currentPanel = 0;
  $wind = $(window);

  $doc = $(document);
  $panels = $(document.getElementsByClassName("panel"));
  $menubar = $(document.getElementsByClassName("menubar"));
  $prev = $(document.getElementById("prevPanel"));
  $contentBox = $(document.getElementsByClassName("contentBox"));

$wind.resize(function () {
  $winHeight = $wind.height();
  $winWidth = $wind.width();

  $contentBox
    .height($winHeight*.85).width($winWidth *.95);
  $menubar.height($winHeight*.1);

  $contentBox
    .hide().show(0);
  console.log($contentBox.height() +"\t"+
            $contentBox.width());

  });

  $winHeight = $wind.height();
  $winWidth = $wind.width();
  $contentBox
    .height($winHeight*.85).width($winWidth *.95)
    .css('z-index', '0');

    $menubar.height($winHeight*.1).css('z-index', '100');


  for ($i =0; $i < $panels.length; $i++)
  {

      $($panels[$i]).css('z-index','-10')
      .height(
        $(document.getElementsByClassName("contentBox"))
        .height()
      ).width (

        $(document.getElementsByClassName("contentBox"))
        .width()-100
      );
      $panels[$i].style.display = "block";

    //  $panels[$i].style.visibility = "visible";

      $h = $($panels[0]).height()  ;

      $h += $menubar.height() +5;

      if ($i!=0)
      {$($panels[$i]).animate({top:  $h  } );}
      else
      {$($panels[$i]).animate({top:  "+=5px" } );}



      if ($currentPanel === $i)
      {
        $panels[$i].style.visibility = "visible";
      }
      else
      {
        $panels[$i].style.visibility = "hidden";
      }

  }


}

function nextButton ()
{
  $currentPanel++;


    if ($currentPanel < $panels.length )
    {
      goToPanel($currentPanel-1);
    }
    else {
      $currentPanel = $panels.length-1;
    }


}


function prevButton ()
{
   $currentPanel--;
    if ($currentPanel > -1)
    {
    //  $currentPanel = $t;
      goToPanel($currentPanel+1);
    }
    else {
      $currentPanel = 0;
    }

}


function goToPanel ($prev)
{

//$panels[$currentPanel].style.display = "block";
//$panelHeight = $panels[$currentPanel].height;
$h;
if ($currentPanel > $prev)
{
  $h = "+=" + ($($panels[$currentPanel]).height())*-1 + "px";

  $($panels[$currentPanel]).children().fadeOut(0);

  $($panels[$currentPanel]).css("visibility","visible")
  .animate({top: $h}, "slow");

  $($panels[$currentPanel]).children().fadeIn("slow");

  $($panels[$prev]).animate({top: $h},"slow", function () {
      $($panels[$prev]).css("visibility", "hidden");
  }) ;

}
else if ($prev > $currentPanel){
  $h = "+=" + ($($panels[$currentPanel]).height()) + "px";

  $($panels[$currentPanel]).children().fadeOut(0);

  $($panels[$currentPanel]).css("visibility","visible")
    .animate({top: $h}, "slow");

  $($panels[$currentPanel]).children().fadeIn("slow");

  $($panels[$prev]).animate({top: $h},"slow", function () {
      $($panels[$prev]).css("visibility", "hidden");

  }) ;

}


}

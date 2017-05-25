window.onload = init;

var $currentPanel,
    $wind,
    $winWidth,
    $winHeight,
    $doc,
    $panels,
    $menubar,
    $menuIcons,
    $contentBox,
    $topSpot;


function init() {
  $currentPanel = 0;
  $wind = $(window);

  $doc = $(document);
  $panels = $(document.getElementsByClassName("panel"));
  $menubar = $(document.getElementsByClassName("menubar"));
  $prev = $(document.getElementById("prevPanel"));
  $contentBox = $(document.getElementsByClassName("contentBox"));
  $menuIcons = $(document.getElementsByClassName("navButton"));


$wind.resize(function () {
  $winHeight = $wind.height();
  $winWidth = $wind.width();


  $('html, body').css({
      overflow: 'hidden',
      height: '100%'
  });

  $contentBox
    .height($winHeight*.9).width($winWidth *.85);

  $menubar.height($winHeight*1).width($winWidth* .08)

  $contentBox
    .hide().show(0);

  for ($i =0; $i< $menuIcons.length; $i++)
  {
    $($menuIcons[$i]).width($menubar.width()*.9).height($menubar.width()*.9);
  }

  });

  $winHeight = $wind.height();
  $winWidth = $wind.width();
  $contentBox
    .height($winHeight*.9).width($winWidth *.85)
    .css('z-index', '0');

  $menubar.height($winHeight*1).width($winWidth* .08)
    .css('z-index', '100');
    console.log($menuIcons.length);
    for ($i =0; $i< $menuIcons.length; $i++)
    {
      $($menuIcons[$i]).width($menubar.width()*.9).height($menubar.width()*.9);
    }

    $h = $winHeight *-1.5 ;
    $topSpot = $($panels[0]).position();

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

      $($panels[$i]).animate({top: $h }, 1 );

      if ($currentPanel === $i)
      {
        $panels[$i].style.display = "block";

      }
      else
      {
        $panels[$i].style.display = "none";
      }

  }

  $($panels[0]).animate({top:  $topSpot.top }, 1 );


}

function homeButton ()
{
  $prevPanel = $currentPanel;
  $currentPanel = 0;

  if ($currentPanel !== $prevPanel)
  {
    goToPanel ($prevPanel);
  }
}

//!!!!!! REMEMBER IDIOT TO REMOVE THESE ONCE MENU IS BUILT !!!!!
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

$h = "-=" + $winHeight * 1.5 ;

  $($panels[$currentPanel]).children().fadeOut(0);


  $($panels[$currentPanel]).css("display","block")
  .animate({  left: $topSpot.left, top:$topSpot.top}, "slow");
//  .animate({top: $h}, "slow");

  $($panels[$currentPanel]).children().fadeIn("slow");

  $($panels[$prev]).animate({top: $h},"slow", function () {
//  $($panels[$prev]).animate({},"slow", function () {
      $($panels[$prev]).css("display","none");
  }) ;




}

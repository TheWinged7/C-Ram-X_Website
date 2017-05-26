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
    $slider,
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
  $slider = $(document.getElementsByClassName("slider"));

 console.log($menuIcons.length);

$wind.resize(function () {
  $winHeight = $wind.height();
  $winWidth = $wind.width();


  $('html, body').css({
      overflow: 'hidden',
      height: $winHeight*.95
  });

  $contentBox.height($winHeight*.9).width($winWidth *.85)
  .css('margin-left', '10%')
  .css('margin-bottom', '0px')
  .css('margin-top', '0px');
  ;

  $menubar.height($winHeight-1).width($winWidth* .08);

  $slider.height($contentBox.height()).width($contentBox.width());

  $contentBox
    .hide().show(0);

  for ($i =0; $i< $menuIcons.length; $i++)
  {
    $($menuIcons[$i]).width($menubar.width()*.9).height($menubar.width()*.9);
  }

  for ($i =0; $i< $panels.length; $i++)
  {
    $($panels[$i]).css('z-index','1')
    .height($slider.height())
    .width ($slider.width()*.92);
  }

  });

  $winHeight = $wind.height();
  $winWidth = $wind.width();

  $contentBox
    .height($winHeight*.9).width($winWidth *.85)
    .css('z-index', '10');

  $slider.height($contentBox.height()).width($contentBox.width());

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

      $($panels[$i]).css('z-index','1')
      .css('padding-right', '10%')
      .height($slider.height())
      .width ($slider.width()*.92);

      $($panels[$i]).animate({top: $h }, 0 );

      if ($currentPanel === $i)
      {
        $panels[$i].style.display = "inline-block";

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


  $($panels[$currentPanel]).css("display","inline-block")
  .animate({  top:$topSpot.top}, "slow");

  $($panels[$currentPanel]).children().fadeIn("slow");
  $($panels[$currentPanel]).focus();
  $($panels[$prev]).animate({top: $h},"slow", function () {
//  $($panels[$prev]).animate({},"slow", function () {
      $($panels[$prev]).css("display","none");
  }) ;




}

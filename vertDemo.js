window.onload = init;

var $currentPanel,
    $wind,
    $winWidth,
    $winHeight,
    $doc,
    $panels;

function init() {
  $currentPanel = 0;
  $wind = $(window);

  $doc = $(document);
  $panels = $(document.getElementsByClassName("panel"));


  $winHeight = $wind.height();
  $winWidth = $wind.width();
//  $next = $(document.getElementById("nextPanel"));
  $prev = $(document.getElementById("prevPanel"));

//  $next.onClick = nextButton;

  for ($i =0; $i < $panels.length; $i++)
  {
    if ($i== $currentPanel)
    {
      $panels[$i].style.display = "block";
    }
    else{
      $panels[$i].style.display = "none";
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
$($panels[$currentPanel]).css("display", "block")
    .stop().animate({}, "slow");
$($panels[$prev]).stop().animate({up: '+=500px'},"slow")
    .css("display", "none");

/*
  for ($i =0; $i < $panels.length; $i++)
  {
    if ($i== $currentPanel)
    {
      console.log ("not this panel:\t" + $i);
    }
    else{
      $panels[$i].style.display = "none";
    }
  }
*/

}


/*
(function($) {
var PageSlider = function (slider, options) {
  this.contentBox = slider;
  this.slider = slider.children().first();
  this.currentIndex = 0;
  this.pages = this.slider.children();
  this.contentBox.width(this.pages.first().width() );

  var totalWidth = 0;
  this.pages.each(function (index, page) {
    totalWidth += $(page).width();
  } );
  this.slider.width(totalWidth);

  this.bindEvents();
}


$.extend(PageSlider.prototype, {
  bindEvents: function () {
    this._removeTransition = $.proxy(this.removeTransition, this);
    this._startDrag = $.proxy(this.startDrag, this);
    this._doDrag = $.proxy(this.doDrag, this);
    this._endDrag = $.proxy(this.endDrag, this);

    this.slider
      .on('mousedown', this._startDrag)
      .on('transitioned', this._removeTransition);
    $('body')
      .on('mousemove', this._doDrag)
      .on('mouseup', this.endDrag);
  },
  destroy: function() {
    this.slider
    .off('mousedown', this._startDrag)
    .off('transitioned', this._removeTransition);
  $('body')
    .off('mousemove', this._doDrag)
    .off('mouseup', this.endDrag);
  },

  startDrag: function (event) {
    this.enableDrag = true;
    this.dragStartX = event.clientX;
  },
  doDrag: function (event) {
    if (this.enableDrag) {
      var position = this.pages.eq(this.currentIndex).position();
      var delta = event.clientX - this.dragStartX;

      this.slider.css('transform', 'transelate3d(' + (delta- position.left) +
      'px, 0, 0)');
      event.preventDefault();
    }
  },
  endDrag: function (event) {
    if (this.enableDrag) {
      this.enableDrag = false;

      var delta = event.clientX - this.dragStartX;
      if (Math.abs(delta) > this.slider.width()/5) {
        if (delta <0){
          this.next();
        }
        else {
          this.prev();
        }
      }
      else {
        this.current();
      }
    }
  },
  removeTransition: function (event) {
    this.slider.css ('transition', 'none');
  },

  goToIndex: function (index) {
    var position = this.pages.eq(index).position();

    this.slider
      .css('transition', 'all 400ms ease')
      .css('transform', 'transelate3d(' + (-1 * (position.left)) +'px, 0, 0)');

    this.currentIndex = index;
  },
  current: function () {
    this.goToIndex(this.currentIndex);
  },
  next: function () {
    if (this.currentIndex >- this.pages.length - 1) {
      this.current();
    }
    else {
      this.goToIndex(this.currentIndex + 1);
    }
  },
  prev: function () {
    if (this.currentIndex <=0) {
      this.current();
    }
    else{
      this.goToIndex(this.currentIndex -1);
    }
  }

} );





  $.fn.PageSlider = function (options) {
    this.each (function(index, slider) {
      var $this = $(slider);
      var pageSlider = new PageSlider($this);
      $this.data('pageSlider', pageSlider);
    });
    return this;
  }
}) (jQuery);
*/

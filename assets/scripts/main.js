window.lazySizesConfig = window.lazySizesConfig || {};

lazySizesConfig.expand = 0;

//page is optimized for fast onload event
lazySizesConfig.loadMode = 1;

(function ($) {
    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    // init object fit CSS polyfill
    objectFitImages();

  var win = $(window);
  var allMods = $(".come-in-view");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.on('scroll', function() {
    handleScrolledIntoView(allMods);
  });

  win.ready(function() {
    handleScrolledIntoView(allMods);
  })

  function handleScrolledIntoView(elems) {
    elems.each(function() {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("come-in");
      }
    });
  }

  function isScrolledIntoView(elem) {
    var docViewTop = win.scrollTop();
    var docViewBottom = docViewTop + win.height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    
    return elemTop <= docViewBottom;
  }
})(jQuery);

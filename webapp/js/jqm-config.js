/**
 * Configuration for jquery mobile to use backbone's router.
 * Kudos to: http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/
 */

(function (factory) {
  'use strict';
  var define = this.define;

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'jquery'
      ], function ($) {
        factory($);
        return $;
      }
    );
  } else {
    // Browser globals
    factory(this.jQuery);
  }

}).call(this, function ($) {

    $(document).on("mobileinit", function () {
      $.debug('mobileinit is triggered');

      $.mobile.ajaxEnabled = false;
      $.mobile.linkBindingEnabled = false;
      $.mobile.hashListeningEnabled = false;
      $.mobile.pushStateEnabled = false;

      // Remove page from DOM when it's being replaced
      /*
      $('div[data-role="page"]').live('pagehide', function (event, ui) {
        $(event.currentTarget).remove();
      });
      */
    });
  }
);
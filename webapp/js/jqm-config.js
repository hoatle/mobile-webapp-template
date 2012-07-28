/**
 * Configuration for jquery mobile to use backbone's router.
 * Kudos to: http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/
 */

define(
  [
    'jquery'
  ],
  function ($) {

    function configure() {

      $(document).on("mobileinit", function () {
        $.mobile.ajaxEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;

        // Remove page from DOM when it's being replaced
        $('div[data-role="page"]').live('pagehide', function (event, ui) {
          $(event.currentTarget).remove();
        });
      });
    }

    return {
      configure: configure
    };
  }
);
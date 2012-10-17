/*
 * Copyright (C) hoatle
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Base jQuery Mobile view
 */
define(
  [
    'jquery',
    'jquery.mobile',
    'underscore',
    'backbone',
    'view/BaseView'
  ],
  function ($, $jqMobile, _, Backbone, BaseView) {

    var appBooted = false;

    // this will exclude external links (starting with http://) or hash link (starting with #)
    // the link href will be used for router's dispatching.
    function attachRouterToLinks() {

      this.$('a:not([href^="http://"])').off('click').on('click', $.proxy(function(e) {
        var link = $(e.currentTarget).attr('href');
        if (link.indexOf('#') === 0) {
          return;
        }
        //if the link start with hash '#' => ignore
        e.preventDefault();
        this.controller.router.dispatch(link, {
          trigger: true
        });

      }, this));
    }

    return BaseView.extend({
      render:function () {

        $.debug('BaseMobileView::this.options', this.options);

        this.beforeRender();

        var c = this.container();
        if (this.appendable) {
          c.append(this.$el);
        } else {
          c.html(this.$el);
        }

        //remove splash screen if app not booted
        if (!appBooted) {
          $('#app-boot').hide();
          appBooted = true;
        }

        attachRouterToLinks.call(this);

        var transition = this.controller.transition,
          reverseTransition = this.controller.getReverseTransition();

        //TODO this is weird to avoid: Uncaught TypeError: Cannot call method 'trigger' of undefined
        //this could be the problem of: jquery mobile is not fully initialized

        if (!$jqMobile.pageContainer) {

          $(window).on('pagecontainercreate', $.proxy(function() {

            $.debug('pagecontainercreate is triggered');

            setTimeout($.proxy(function() {

              $jqMobile.changePage(this.$el, {
                changeHash:false,
                transition: transition
              });

              this.delegateEvents();

              this.afterRender();

              this.rendered = true;

            }, this), 300);

          }, this));

        } else {

          var opts = {
            changeHash: false,
            transition: transition
          };

          if (reverseTransition) {
            opts.reverse = true;
            opts.transition = reverseTransition;
          }

          $jqMobile.changePage(this.$el, opts);

          this.delegateEvents();

          this.afterRender();

          this.rendered = true;

        }

        return this;
      }
    });
  }
);
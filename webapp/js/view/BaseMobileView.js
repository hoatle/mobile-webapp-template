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

    return BaseView.extend({
      render:function () {
        this.beforeRender();

        var c = this.container();
        if (this.appendable) {
          c.append(this.$el);
        } else {
          c.html(this.$el);
        }

        $jqMobile.changePage(this.$el, {changeHash:false});

        this.delegateEvents();

        this.afterRender();

        this.rendered = true;

        return this;
      }
    });
  }
);
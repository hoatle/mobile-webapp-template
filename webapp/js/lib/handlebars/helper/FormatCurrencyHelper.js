/**
 * The format currency handlebars helper.
 *
 * var money = {
 *   amount: 1,
 *   unit: 'USD'
 * };
 *
 * => {{money_display money}}: $1.00
 *
 * var money = {
 *   amount: 20000,
 *   unit: 'VND'
 * };
 *
 * => {{money_display money}}: 20000.00 VND //TODO it's better to have 20,000.00 VND
 *
 */
define(
  [
    'handlebars'
  ],
  function(HandleBars) {
    HandleBars.registerHelper('format_currency', function(price) {
      var result;
      switch (price.price_unit) {
        case 'USD':
          result = '$' + price.price;
          break;

        case 'VND':
          result = price.price + ' VND';
          break;

        //add more case here

        default:
          //do nothing

      }
      return result;
    });

    return HandleBars;
  }
);
/* eslint-disable */

(function () {
  window._conf = {
    ENV: eval('"$ENV"') || 'dev',
    SNELLO_URL: eval('"$FRIEZA_MAIN_URL"') || 'https://api.glamar.io/frieza',
    ASSET_URL:
      eval('"$ASSET_URL"') || 'https://cdn-1.glamar.in/js/assets/v1.0.20',
    MAKEUP_ASSET_URL:
      eval('"$MAKEUP_ASSET_URL"') ||
      'https://cdn-1.glamar.io/glamar_assets/web'
  };
})();

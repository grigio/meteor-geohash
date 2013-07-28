Package.describe({
  summary: "Encode and decode your geo coordinates to geohash"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.add_files('lib/geohash.js', where);
});
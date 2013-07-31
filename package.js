Package.describe({
  summary: "Encode and decode your geo coordinates to geohash"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.add_files('lib/geohash.js', where);
});

Package.on_test(function (api) {
  api.use(['meteor-geohash', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests/geohash_test.js', ['client', 'server']);
});
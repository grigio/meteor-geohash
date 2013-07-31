Tinytest.add('geohash encoding', function (test) {
  test.equal('dqcw4bnrs6s7', geohash.encode(39.0247389581054, -76.5110040642321, 12) );
  test.equal('dqcw4bnrs6s7', geohash.encode(39.0247389581054, -76.5110040642321) );
  test.equal('dqcw4bnrs6',   geohash.encode(39.0247389581054, -76.5110040642321, 10) );
  test.equal('6gkzmg1u',     geohash.encode(-25.427, -49.315, 8) );
  test.equal('ezs42',        geohash.encode(42.60498046875, -5.60302734375, 5) );
  test.equal('u0j2mxtuxgyf', geohash.encode(45.085937, 7.63275, 12) );
  test.equal('u0j2mxtuxgyf', geohash.encode(45.085937, 7.63275) );
});

Tinytest.add('geohash decoding', function (test) {
  test.equal( [39.0247389581054, -76.5110040642321], geohash.decode("dqcw4bnrs6s7") );
  test.equal( [39.0241241455078, -76.5108489990234], geohash.decode("dqcw4bn") );
});

Tinytest.add('geohash neigbors', function (test) {
  test.equal( {"c":"dqcjqc","n":"dqcjqf","e":"dqcjr1","s":"dqcjqb","w":"dqcjq9","ne":"dqcjr4","se":"dqcjr0","sw":"dqcjq8","nw":"dqcjqd"} , geohash.neighbors("dqcjqc") );
  test.equal( {"c":"dqcjr4","n":"dqcjr5","e":"dqcjr6","s":"dqcjr1","w":"dqcjqf","ne":"dqcjr7","se":"dqcjr3","sw":"dqcjqc","nw":"dqcjqg"} , geohash.neighbors("dqcjr4") );
});
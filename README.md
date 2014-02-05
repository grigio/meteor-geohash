# Meteor Geohash

Geohash is a smart way to rapresent a geographic coordinate with different precisions and in one field. Meteor Geohash is avalaible at https://github.com/grigio/meteor-geohash and works on the client and on the server.

[![Build Status](https://travis-ci.org/grigio/meteor-geohash.png)](https://travis-ci.org/grigio/meteor-geohash)

### Usage

```javascript
// Default precision is: 12
geohash.encode(45.085937,7.63275)    // => "u0j2mxtuxgyf"
geohash.encode(45.085937,7.63275, 6) // => "u0j2mx"

geohash.decode('u0j2mxtuxgyf') // => [45.08593705482781, 7.632749956101179]
geohash.decode('u0j2mx')       // => [45.08514404296875, 7.6300048828125]

geohash.neighbors('dqcw4b') // => Object {c: "dqcw4b", n: "dqcw4c", e: "dqcw50", s: "dqctfz", w: "dqcw48"…}

```

### Example

A visual demo can be found at http://geohash.meteor.com

### Installation

```
mrt add meteor-geohash
```

### Test

```
mrt test-packages ./
```

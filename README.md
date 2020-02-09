functify
========
[![NPM Version](http://img.shields.io/npm/v/functify.svg?style=flat)](https://www.npmjs.org/package/functify)
[![NPM Downloads](https://img.shields.io/npm/dm/functify.svg?style=flat)](https://www.npmjs.org/package/functify)
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/braceslab/functify.svg?branch=master)](https://travis-ci.org/braceslab/functify)

A module for stringifying an object with methods

Install
-------
    npm i functify

Usage
-----
    var Functify = require("json-functify")
    var str = Functify.stringify([input object])
    var restored_object = Functify.parse(str)

Example
-------
    var Functify = require("json-functify")
    var fs=require("fs");
    var str = Functify.stringify({id:340, f: function() {return this.id})
    fs.writeFile("file.txt", str, function (err) {
        if (err) return console.log(err);
        console.log('saved object as txt');
    });

    //in a different place
    var Functify = require("json-functify")
    var fs=require("fs");
    fs.readFile("file.tx", function(err, data) {
        var restored_object = Functify.parse(data.toString());
        console.log(restored_object.f()); //340
    });    



Browser Support
---------------
Supported by all browsers that suport JSON.stringify:
- Chrome >=3
- Edge >=12
- Firefox >=3.5
- Internet Explorer >=8
- Opera >=10.5
- Safari >=4

Caveat
------
If your object contains strings that start with "function ()" functify.parse will try to convert them into functions.

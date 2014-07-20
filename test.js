'use strict';
var assert = require('assert');
var requireUncached = require('require-uncached');

beforeEach(function () {
	process.stdout.isTTY = true;
	process.argv = [];
	process.env = {};
});

it('should return false if not TTY', function () {
	process.stdout.isTTY = false;
	assert.equal(requireUncached('./'), false);
});

it('should return false if --no-color flag is used', function () {
	process.argv = ['--no-color'];
	assert.equal(requireUncached('./'), false);
});

it('should return true if --color flag is used', function () {
	process.argv = ['--color'];
	assert.equal(requireUncached('./'), true);
});

it('should return true if `COLORTERM` is in env', function () {
	process.env.COLORTERM = true;
	assert.equal(requireUncached('./'), true);
});

/**
 * dependencies
 */
const assert = require('assert');
const config = require('../config');

/**
 * isObject
 * @param  {object}  obj target object
 * @return {Boolean}     is object or not
 */
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

/**
 * tests
 */
describe('test basic properties of config', () => {
    it('should be an object', () => {
        assert(isObject(config));
    });

    it('should have the "plugins" property', () => {
        assert(config.plugins);
        assert(isObject(config.plugins));
    });

    it('should have the "rules" property', () => {
        assert(config.rules);
        assert(isObject(config.rules));
    });
});

'use strict';

/**
 * test-text router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-text.test-text');

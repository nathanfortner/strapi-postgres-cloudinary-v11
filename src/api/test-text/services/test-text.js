'use strict';

/**
 * test-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-text.test-text');

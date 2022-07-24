'use strict';

/**
 *  test-text controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-text.test-text');

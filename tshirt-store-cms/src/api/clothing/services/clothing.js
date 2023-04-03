'use strict';

/**
 * clothing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clothing.clothing');

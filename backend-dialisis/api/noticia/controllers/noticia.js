'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  async find(ctx) {
    let noticias;
    if (ctx.query._q) {
      noticias = await strapi.services.noticia.search(ctx.query);
    } else {
      noticias = await strapi.services.noticia.find(ctx.query);
    }
    noticias.forEach(noticia => noticia.cuerpo = noticia.cuerpo.replace(`/uploads/`, `${strapi.config.get('server.url')}/uploads/`))
    
    noticias.forEach(noticia => noticia.portada[0].url = noticia.portada[0].url.replace(`/uploads/`, `${strapi.config.get('server.url')}/uploads/`))

    return noticias.map(noticia => sanitizeEntity(noticia, { model: strapi.models.noticia }));
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const noticia = await strapi.services.noticia.findOne({ id });
    noticia.cuerpo = noticia.cuerpo.replace(`/uploads/`, `${strapi.config.get('server.url')}/uploads/`)

    return sanitizeEntity(noticia, { model: strapi.models.noticia });
  }
};
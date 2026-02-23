import type { Schema, Struct } from '@strapi/strapi';

export interface BlogParcalariSlogan extends Struct.ComponentSchema {
  collectionName: 'components_blog_parcalari_slogans';
  info: {
    displayName: 'Slogan';
    icon: 'puzzle';
  };
  attributes: {
    Metin: Schema.Attribute.Text;
    Yazar: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-parcalari.slogan': BlogParcalariSlogan;
    }
  }
}

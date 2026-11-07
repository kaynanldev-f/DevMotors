export interface homeTypes {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      hero: {
        banner: {
          url: string;
          imgix_url: string;
        };
        heading: string;
        cta: string;
        url: string;
      };
      about: {
        heading: string;
        description: string;
        img_about: {
          url: string;
          imgix_url: string;
        };
      };
      services: {
        heading: string;
        service: {
          img_service: {
            url: string;
            imgix_url: string;
          };
          description: string;
        }[];
      };
      contact: {
        email: string;
        phone: string;
        hours: string;
        andress: string;
      };
      cta_contact: {
        cta_contact_heading: string;
        cta_url: string;
      };
    };
  };
}

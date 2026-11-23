export interface PostProps {
  metadata: {
    title: string;

    hero: {
      cta_button: string;

      banner: {
        url: string;
      };
    };

    about: {
      banner: {
        url: string;
      };
      cta_button: string;
      description: string;
      heading: string;
    };
  };
}

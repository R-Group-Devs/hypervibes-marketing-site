import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
}

export const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  title = '',
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: `https://hypervibes.xyz/social-card.png`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: `https://hypervibes.xyz/social-card.png`,
        },
        {
          name: `twitter:creator`,
          content: ``,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

import groq from "groq";

export const PAGE_BY_SLUG = groq`
*[_type == "page" && slug.current == $slug][0]{
    name,
      sections[] {
        _key,
        _type,
        ...select(
          _type == "hero" => {
            heading,
            subHeading,
            ctaText,
            "ctaSlug": ctaLink->{slug},
            image{
              asset->{
                url
              }
            },
            lightColorScheme->{
              baseBg,
              baseText,
              accentBg,
              accentText
            },
            darkColorScheme->{
              baseBg,
              baseText,
              accentBg,
              accentText
            }
          }
        )
      }
    }
      `;
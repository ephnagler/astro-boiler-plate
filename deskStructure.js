import {
  CogIcon,
  ImagesIcon,
  ComposeIcon,
  DocumentIcon,
  CalendarIcon,
  ProjectsIcon,
  VersionsIcon,
  ColorWheelIcon,
} from '@sanity/icons';

export const deskStructure = (S) =>
  S.list()
    .title('Boiler Plate')
    .items([
      S.listItem()
        .id('siteSettings')
        .schemaType('siteSettings')
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.divider(),
      S.listItem()
        .title('Templates')
        .icon(VersionsIcon)
        .child(
          S.documentList().title('Templates').filter('_type == "template"'),
        ),
      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .child(
          S.documentList()
            .title('Pages')
            .filter('_type == "page" && _id != "homePage"'),
        ),
      S.listItem()
        .title('Content')
        .icon(ImagesIcon)
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('blog')
                .title('Blog Posts')
                .icon(ComposeIcon),
              S.documentTypeListItem('event')
                .title('Events')
                .icon(CalendarIcon),
              S.documentTypeListItem('gallery')
                .title('Galleries')
                .icon(ImagesIcon),
              S.documentTypeListItem('project')
                .title('Projects')
                .icon(ProjectsIcon),
            ]),
        ),
      S.listItem()
        .title('Color Schemes')
        .icon(ColorWheelIcon)
        .child(
          S.documentList()
            .title('Color Schemes')
            .filter('_type == "colorScheme"'),
        ),
    ]);

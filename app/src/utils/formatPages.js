export const formatWordpressPage = page => ({
  id: page.id,
  title: page.title.rendered,
  content: page.content.rendered,
  slug: page.slug,
});

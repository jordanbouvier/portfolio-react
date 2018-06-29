export const sortRealisations = (realisations) => {
  const sortedRealisations = realisations.map(realisation => ({
    id: realisation.id,
    title: realisation.title.rendered.toLowerCase(),
    content: realisation.content.rendered,
    thumbnail: realisation['_embedded']['wp:featuredmedia'][0]['source_url'],
    images: realisation.images,
  }));
  return sortedRealisations;
};

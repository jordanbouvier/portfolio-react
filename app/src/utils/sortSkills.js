export const sortSkills = (skills) => {
  const sortedSkills = skills.map(skill => ({
    id: skill.id,
    title: skill.title.rendered.toLowerCase(),
    content: skill.content.rendered,
    thumbnail: skill['_embedded']['wp:featuredmedia'][0]['source_url'],
  }));
  return sortedSkills;
};

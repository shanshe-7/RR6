function slugify(name) {
  return name.toLowerCase().split(" ").join("-");
}

export { slugify };

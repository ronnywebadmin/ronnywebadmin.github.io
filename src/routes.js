export const routes = {
  home: { label: 'Home', className: 'home' },
  books: { label: 'Books & Writing', className: 'books-page' },
  media: { label: 'Media & Assets', className: 'media-page' },
  about: { label: 'About Ronny', className: 'about-page' },
  contact: { label: 'Contact Ronny', className: 'contact-page' },
};

export function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return routes[hash] ? hash : 'home';
}

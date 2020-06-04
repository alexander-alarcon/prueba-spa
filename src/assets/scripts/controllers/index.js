import Home from './home.controller';
import Contact from './contact.controller';
import NotFound from './notFound.controller';

const pages = [
  {
    path: ['#/', ''],
    component: Home,
  },
  {
    path: ['#/contact/add', '#/contact/edit/:id'],
    component: Contact,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export { pages };

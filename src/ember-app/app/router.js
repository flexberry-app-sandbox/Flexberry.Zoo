import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zoo-animal-l');
  this.route('i-i-s-zoo-animal-e',
  { path: 'i-i-s-zoo-animal-e/:id' });
  this.route('i-i-s-zoo-animal-e.new',
  { path: 'i-i-s-zoo-animal-e/new' });
  this.route('i-i-s-zoo-animal-type-l');
  this.route('i-i-s-zoo-animal-type-e',
  { path: 'i-i-s-zoo-animal-type-e/:id' });
  this.route('i-i-s-zoo-animal-type-e.new',
  { path: 'i-i-s-zoo-animal-type-e/new' });
});

export default Router;

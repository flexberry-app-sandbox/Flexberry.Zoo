import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('animal', 'Animals');
inflector.irregular('home', 'Homes');
inflector.irregular('type', 'Types');

export default {};

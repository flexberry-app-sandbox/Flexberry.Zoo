import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  animalType: DS.belongsTo('i-i-s-zoo-animal-type', { inverse: null, async: false }),
  homes: DS.hasMany('i-i-s-zoo-animal-home', { inverse: 'animal', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-zoo-animal.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  animalType: {
    descriptionKey: 'models.i-i-s-zoo-animal.validations.animalType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  homes: {
    descriptionKey: 'models.i-i-s-zoo-animal.validations.homes.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AnimalE', 'i-i-s-zoo-animal', {
    name: attr('Name', { index: 0 }),
    animalType: belongsTo('i-i-s-zoo-animal-type', 'Animal type', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    homes: hasMany('i-i-s-zoo-animal-home', 'Homes', {
      location: attr('Location', { index: 0 })
    })
  });

  modelClass.defineProjection('AnimalL', 'i-i-s-zoo-animal', {
    name: attr('Name', { index: 0 }),
    animalType: belongsTo('i-i-s-zoo-animal-type', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  location: DS.attr('string'),
  animal: DS.belongsTo('i-i-s-zoo-animal', { inverse: 'homes', async: false })
});

export let ValidationRules = {
  location: {
    descriptionKey: 'models.i-i-s-zoo-animal-home.validations.location.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  animal: {
    descriptionKey: 'models.i-i-s-zoo-animal-home.validations.animal.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AnimalHomeE', 'i-i-s-zoo-animal-home', {
    location: attr('Location', { index: 0 })
  });
};

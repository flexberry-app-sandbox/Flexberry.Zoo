import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISZooAnimalLForm from './forms/i-i-s-zoo-animal-l';
import IISZooAnimalTypeLForm from './forms/i-i-s-zoo-animal-type-l';
import IISZooAnimalEForm from './forms/i-i-s-zoo-animal-e';
import IISZooAnimalTypeEForm from './forms/i-i-s-zoo-animal-type-e';
import IISZooAnimalHomeModel from './models/i-i-s-zoo-animal-home';
import IISZooAnimalTypeModel from './models/i-i-s-zoo-animal-type';
import IISZooAnimalModel from './models/i-i-s-zoo-animal';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zoo-animal-home': IISZooAnimalHomeModel,
    'i-i-s-zoo-animal-type': IISZooAnimalTypeModel,
    'i-i-s-zoo-animal': IISZooAnimalModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        zoo: {
          caption: 'zoo',
          title: 'zoo',
          'i-i-s-zoo-animal-l': {
            caption: 'i-i-s-zoo-animal-l',
            title: 'i-i-s-zoo-animal-l'
          },
          'i-i-s-zoo-animal-type-l': {
            caption: 'i-i-s-zoo-animal-type-l',
            title: 'i-i-s-zoo-animal-type-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-zoo-animal-l': IISZooAnimalLForm,
    'i-i-s-zoo-animal-type-l': IISZooAnimalTypeLForm,
    'i-i-s-zoo-animal-e': IISZooAnimalEForm,
    'i-i-s-zoo-animal-type-e': IISZooAnimalTypeEForm
  },

});

export default translations;

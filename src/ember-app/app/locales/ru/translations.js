import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Zoo',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Zoo',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zoo',
          title: 'Zoo'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        zoo: {
          caption: 'Zoo',
          title: 'Zoo',
          'i-i-s-zoo-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-zoo-animal-type-l': {
            caption: 'Animal type',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-zoo-animal-l': IISZooAnimalLForm,
    'i-i-s-zoo-animal-type-l': IISZooAnimalTypeLForm,
    'i-i-s-zoo-animal-e': IISZooAnimalEForm,
    'i-i-s-zoo-animal-type-e': IISZooAnimalTypeEForm
  },

});

export default translations;

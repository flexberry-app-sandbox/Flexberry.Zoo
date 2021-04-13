import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zoo-animal', 'Unit | Model | i-i-s-zoo-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-zoo-animal-home',
    'model:i-i-s-zoo-animal-type',
    'model:i-i-s-zoo-animal',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

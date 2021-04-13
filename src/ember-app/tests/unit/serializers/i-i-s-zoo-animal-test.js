import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zoo-animal', 'Unit | Serializer | i-i-s-zoo-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-zoo-animal',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-zoo-animal-home',
    'model:i-i-s-zoo-animal-type',
    'model:i-i-s-zoo-animal',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

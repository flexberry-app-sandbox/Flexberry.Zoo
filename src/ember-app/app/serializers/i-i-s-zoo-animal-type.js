import { Serializer as AnimalTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zoo-animal-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AnimalTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

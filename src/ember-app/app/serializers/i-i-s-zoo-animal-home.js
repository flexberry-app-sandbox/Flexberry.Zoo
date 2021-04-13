import { Serializer as AnimalHomeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zoo-animal-home';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AnimalHomeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

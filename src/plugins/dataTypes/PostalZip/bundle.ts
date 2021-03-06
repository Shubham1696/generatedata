import { DTDefinition, DTBundle } from '../../../../types/dataTypes';
import { Help } from './PostalZip.ui';
import { generate, getMetadata } from './PostalZip.generate';

const definition: DTDefinition = {
	name: 'Postal / Zip',
	fieldGroup: 'geo',
	fieldGroupOrder: 30,
	processOrder: 3,
	schema: {
		$schema: 'http://json-schema.org/draft-04/schema#',
		type: 'object',
		properties: {
			countries: {
				type: 'array',
				minSize: 1
			}
		},
		required: [
			'countries'
		]
	}
};

const bundle: DTBundle = {
	definition,
	Help,
	generate,
	getMetadata
};

export default bundle;

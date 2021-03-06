import { DTDefinition, DTBundle } from '../../../../types/dataTypes';
import { Help } from './IBAN.ui';
import { generate, getMetadata } from './IBAN.generate';

const definition: DTDefinition = {
	name: 'IBAN',
	fieldGroup: 'human_data',
	fieldGroupOrder: 100
};

const bundle: DTBundle = {
	definition,
	Help,
	generate,
	getMetadata
};

export default bundle;

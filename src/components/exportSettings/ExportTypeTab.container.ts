import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ExportTypeTab, ExportTypeTabProps } from './ExportTypeTab.component';
import * as selectors from '../../core/generator/generator.selectors';
import * as actions from '../../core/generator/generator.actions';

const mapStateToProps = (state: any): Partial<ExportTypeTabProps> => ({
	exportType: selectors.getExportType(state),
	exportSettingsTab: selectors.getExportSettingsTab(state)
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<ExportTypeTabProps> => ({
	onChangeExportType: (exportType: string): any => dispatch(actions.changeExportType(exportType))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExportTypeTab);

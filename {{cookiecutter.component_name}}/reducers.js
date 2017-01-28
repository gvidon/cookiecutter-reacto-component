{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import actions from './actions';
import {handleActions} from 'redux-actions';

export default handleActions({
	[actions.dumbAction]: (state = {}, action{% if cookiecutter.add_flow == "True" %}: {payload?: mixed, type: string}{% endif %}) => state
}, {});

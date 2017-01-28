{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import {createAction} from 'redux-actions';

const
	dumbAction = createAction('NEW_COMPONENT_DUMB_ACTION');

export default {dumbAction};

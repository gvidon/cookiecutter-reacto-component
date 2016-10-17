{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import actions from './actions';
import {reduce} from 'generic/helpers';

export default (state = {}, action{% if cookiecutter.add_flow == "True" %}: {type: string}{% endif %}) => reduce(state, action, {
	[actions.types.DUMB_ACTION]: () => ({
		...state
	})
});

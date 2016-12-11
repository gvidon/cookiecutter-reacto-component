{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import keyMirror from 'keymirror';

const
	dumb = payload => ({
		payload,
		type: types.DUMB_ACTION
	}),

	types = keyMirror({
		DUMB_ACTION: null
	});

export default {dumb, types};

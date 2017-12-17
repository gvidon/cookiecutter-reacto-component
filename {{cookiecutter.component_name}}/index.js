{%- if cookiecutter.add_flow == "True" %}// @flow
{%- if cookiecutter.add_dumb_type == "True" %}
import type {TDumb} from 'typedefs/dumb';
{%- endif %}
{% endif -%}
import {compose} from 'recompose';
import {connect} from 'react-redux';
{% if cookiecutter.has_actions == "True" %}export {default as actions} from './actions';
{% endif -%}
{%- if cookiecutter.has_reducers == "True" %}export {default as reducers} from './reducers';
{% endif -%}
{%- if cookiecutter.has_routes == "True" %}import {Route, Switch} from 'react-router-dom';
{% endif -%}
import React{% if cookiecutter.add_flow != "True" %}, {PropTypes}{% endif %} from 'react';

const
	{{cookiecutter.component_name}} = {% if cookiecutter.add_flow == "True" %}(props: {}){% else %}props{% endif %} => {% if cookiecutter.has_routes == "True" -%}<Switch>
		<Route path="/" render={() => <div>This is dumb component</div>} />
	</Switch>{%- else -%}<div>
		This is dumb component
	</div>{%- endif -%};

{% if cookiecutter.add_flow != "True" %}{{cookiecutter.component_name}}.propTypes = {
};

{% endif -%}
export default compose(
	connect(null),
)({{cookiecutter.component_name}});

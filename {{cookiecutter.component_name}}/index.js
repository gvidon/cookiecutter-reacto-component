{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import {connect} from 'react-redux';
{% if cookiecutter.has_actions == "True" %}export {default as actions} from './actions';
{% endif -%}
{%- if cookiecutter.has_reducers == "True" %}export {default as reducers} from './reducers';
{% endif -%}
{%- if cookiecutter.has_routes == "True" %}export {default as routes} from './routes';
{% endif -%}
import React{% if cookiecutter.add_flow != "True" %}, {PropTypes}{% endif %} from 'react';
import {compose} from 'recompose';

{%- if cookiecutter.add_flow == "True" %}

const
	{{cookiecutter.component_name}} = (props: {}) => <div>
	</div>;

export default compose(
	connect(null)
)({{cookiecutter.component_name}});
{% else %}

const
	{{cookiecutter.component_name}} = props => <div>
	</div>;

{{cookiecutter.component_name}}.propTypes = {
};

export default compose(
	connect(null)
)({{cookiecutter.component_name}});
{% endif -%}

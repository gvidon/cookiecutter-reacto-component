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

{%- if cookiecutter.add_flow == "True" %}

type Props = {
};

export default connect()(({}: Props) => <div>
</div>);
{% else %}

const
	{{cookiecutter.component_name}} = ({}) => <div>
	</div>;

{{cookiecutter.component_name}}.propTypes = {
};

export default connect()({{cookiecutter.component_name}})
{% endif -%}

{%- if cookiecutter.add_flow == "True" %}// @flow
{% endif -%}
import {Route} from 'react-router';
import React from 'react';

export default () => <Route path="{{cookiecutter.route_path}}">
</Route>;

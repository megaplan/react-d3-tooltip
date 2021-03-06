"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  ChartPie,
  Pie
} from 'react-d3-shape';

import d3 from 'd3';
import {Legend} from 'react-d3-core';
import Tooltip from './utils/tooltip';
import pieProps from './commonProps';

export default class PieTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    }
  }

  static defaultProps = pieProps

  _mouseOver(d, i) {
    const contentTooltip = {
      fieldTitle: d.data.name,
      value: d.value,
      color: d.color
    }
    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: contentTooltip
    })
  }

  _mouseOut(d) {
    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {

    const {
      width,
      height
    } = this.props;

    const radius = this.props.radius || Math.min(width - 120, height - 120) / 2;
    const outerRadius = radius - 10;

    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <Legend
          {...this.props}
        />
        <ChartPie
          {...this.props}
          >
          <Pie
            {...this.props}
            radius= {radius}
            outerRadius= {outerRadius}
            onMouseOver={this._mouseOver.bind(this)}
            onMouseOut={this._mouseOut.bind(this)}
            />
        </ChartPie>
      </div>
    )
  }
}

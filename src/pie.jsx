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
      xTooltip: d3.event.layerX,
      yTooltip: d3.event.layerY,
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
      height,
      data,
      chartSeries,
      value,
      name,
      categoricalColors,
      showLegend
      } = this.props;

    const radius = this.props.radius || Math.min(width - 120, height - 120) / 2;
    const outerRadius = radius - 10;

    var legend;
    if(showLegend) legend =
      <Legend
        {...this.props}
        width={width}
        chartSeries={chartSeries}
        categoricalColors={categoricalColors}
      />

    return (
      <div>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        {legend}
        <ChartPie
          {...this.props}
          width={width}
          height={height}
          data={data}
          chartSeries={chartSeries}
          value={value}
          name={name}
        >
          <Pie
            {...this.props}
            radius={radius}
            outerRadius={outerRadius}
            chartSeries={chartSeries}
            onMouseOver={this._mouseOver.bind(this)}
            onMouseOut={this._mouseOut.bind(this)}
          />
        </ChartPie>
      </div>
    )
  }
}

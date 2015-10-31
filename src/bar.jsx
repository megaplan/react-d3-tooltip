"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
} from 'react-d3-core';

import {
  BarChart as BarChart,
  series as series
} from 'react-d3-basic';

import {
  default as TooltipSet
} from './inherit/index';

import {
  default as Tooltip
} from './utils/tooltip';

export default class BarTooltip extends TooltipSet {

  _mouseOver(e) {
    var d = JSON.parse(e.target.getAttribute('data-react-d3-origin'));

    this.setState({
      xTooltip: e.clientX,
      yTooltip: e.clientY,
      contentTooltip: d
    })
  }

  _mouseOut() {
    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    var tooltip = (<Tooltip
      {...this.props}
      {...this.state}
      xScaleSet= {xScaleSet}
      yScaleSet= {yScaleSet}
      dataset= {chartSeriesData}
      />);

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <BarChart {...this.props} {...this.state} onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>
        </Chart>
      </div>
    )
  }
}

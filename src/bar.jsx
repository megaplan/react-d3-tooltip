"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {Legend} from 'react-d3-core';
import {Chart} from 'react-d3-shape';

import BarContainer from './charts/bar';
import Tooltip from './utils/tooltip';
import Focus from './utils/focus';
import BarEvt from './inherit/barEvt';
import CommonProps from './commonProps';

export default class BarTooltip extends BarEvt {

  constructor(props) {
    super(props);
  }

  static defaultProps = CommonProps

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      categoricalColors,
      barClassName
      } = this.props;

    return (
      <div style={{position: 'relative'}}>
        <Tooltip {...this.props} {...this.state}>
          {this.props.children}
        </Tooltip>
        <Legend
          {...this.props}
          width={width}
          margins={margins}
          chartSeries={chartSeries}
          categoricalColors={categoricalColors}
        />
        <Chart
          {...this.props}
          {...this.state}
          width={width}
          height={height}
          data={data}
          chartSeries={chartSeries}
        >
          <BarContainer
            {...this.props}
            {...this.state}
            onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)}
            chartSeries={chartSeries}
            barClassName={barClassName}
          />
        </Chart>
      </div>
    )
  }
}

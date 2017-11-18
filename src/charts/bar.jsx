"use strict";

import {
  default as React,
  Component,
} from 'react';
import * as PropTypes from 'prop-types';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid
} from 'react-d3-core';

import {Bar} from 'react-d3-shape';
import CommonProps from '../commonProps';
import {isTooltipUpdate} from '../utils/tooltipUpdate';

export default class BarContainer extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  static defaultProps = CommonProps

  render() {

    const {
      onMouseOver,
      onMouseOut,
      chartSeries,
      showXGrid,
      showYGrid,
      barClassName,
      xAxisClassName,
      yAxisClassName,
      xWordWrap,
      xGridAxisLineStyle,
      yGridAxisLineStyle
      } = this.props;

    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid {...this.props} gridAxisLineStyle={xGridAxisLineStyle}/>
    if(showYGrid) ygrid = <Ygrid {...this.props} gridAxisLineStyle={yGridAxisLineStyle}/>

    return (
      <g>
        {xgrid}
        {ygrid}
        <Xaxis
          {...this.props}
          xAxisClassName={xAxisClassName}
          xWordWrap={xWordWrap}
          xGridAxisLineStyle={xGridAxisLineStyle}
        />
        <Yaxis
          {...this.props}
          yAxisClassName={yAxisClassName}
          yGridAxisLineStyle={yGridAxisLineStyle}
        />
        <Bar
          {...this.props}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          chartSeries={chartSeries}
          barClassName={barClassName}
        />
      </g>
    )
  }
}

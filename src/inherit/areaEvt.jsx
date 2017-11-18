"use strict"

import {
  default as React,
  Component,
} from 'react'
import * as PropTypes from 'prop-types';

import d3 from 'd3';

export default class AreaEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: -100,
      yTooltip: -100,
      contentTooltip: null
    };
  }

  mouseOut(d, i) {
    this.setState({
      xTooltip: -100,
      yTooltip: -100,
      contentTooltip: null
    })
  }

  mouseOver(d, i, xScaleSet, yScaleSet, stack) {
    var newY = stack ? yScaleSet(d.y + d.y0) : yScaleSet(d.y);
    var fieldTitle = d.name.toString()
    if(this.props.xTickFormat) {
      fieldTitle = this.props.xTickFormat(d.x)
    }
    const contentTooltip = {
      title: d.x.toString(),
      fieldTitle: fieldTitle,
      value: d.y.toString(),
      color: d.color
    };
    var leftMargin = 0;
    var topMargin = 0;
    if(this.props.margins) {
      leftMargin = this.props.margins.left
      topMargin = this.props.margins.top
    }
    this.setState({
      xTooltip: xScaleSet(d.x) + leftMargin,
      yTooltip: newY + topMargin,
      contentTooltip: contentTooltip
    })
  }
}

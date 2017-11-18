"use strict"

import {
  default as React,
  Component,
} from 'react'
import * as PropTypes from 'prop-types';

import d3 from 'd3';

export default class BarEvt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    };
  }

  mouseOut(d, i) {
    const _state = {
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    }
    this.setState(_state)
    if(this.props.onTooltipHide) {
      this.props.onTooltipHide(_state)
    }
  }

  mouseOver(d, i) {
    const contentTooltip = {title: d.name, value: d.y, fieldTitle: d.x, color: d.color};
    const _state = {
      xTooltip: d3.event.layerX,
      yTooltip: d3.event.layerY,
      contentTooltip: contentTooltip
    }
    this.setState(_state)
    if(this.props.onTooltipShow) {
      this.props.onTooltipShow(_state)
    }
  }
}

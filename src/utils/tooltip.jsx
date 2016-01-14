"use strict";
// Please check bottom propTypes to know which props is accepted.
import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as TableTooltipStyle
} from '../tooltip/Table';


export default class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    gravity: 's',
    dist: 15,
    tooltipClassName: 'react-d3-basics__tooltip_utils'
  }

  render() {
    const {
      xTooltip,
      yTooltip,
      contentTooltip,
      dist
      } = this.props;

    let contentTooltipTmpl = null;

    var position = {
      left: xTooltip ? xTooltip + dist : -100,
      top: yTooltip ? yTooltip + dist : -100
    }

    if(contentTooltip) {
      if(this.props.children) {
        contentTooltipTmpl = React.cloneElement(this.props.children, {
          contentTooltip: contentTooltip,
          position: position
        });
      } else {
        contentTooltipTmpl = <TableTooltipStyle contentTooltip={contentTooltip} position={position}/>;
      }
    }

    return contentTooltipTmpl
  }
}

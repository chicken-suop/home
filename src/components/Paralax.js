import PropTypes from 'prop-types';
import React from 'react';

export default class Paralax extends React.Component {
  static propTypes = {
    style: PropTypes.objectOf({}),
    // Pass height and width
    children: PropTypes.node.isRequired,
    // data-staticlayer: PropTypes.bool
    // Set "data-staticlayer" on children to stop movement for that layer
  }

  static defaultProps = {
    style: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      layers: [],
    };

    this.handleMove = this.handleMove.bind(this);
  }

  componentDidMount() {
    this.rootElemWidth = this.root.clientWidth
      || this.root.offsetWidth
      || this.root.scrollWidth;
    this.rootElemHeight = this.root.clientHeight
      || this.root.offsetHeight
      || this.root.scrollHeight;
  }

  allLayers = () => {
    const { children } = this.props;
    return React.Children.map(children, child => child);
  }

  handleMove({ pageX, pageY }) {
    const allLayers = this.allLayers().filter(child => (
      !child.props['data-staticlayer'] // Don't move static layers
    ));

    const layerCount = allLayers ? this.allLayers.length : 0;

    const bodyScrollTop = document.body.scrollTop
      || document.getElementsByTagName('html')[0].scrollTop;
    const bodyScrollLeft = document.body.scrollLeft;
    const offsets = this.root.getBoundingClientRect();
    const xMultiple = 300 / this.rootElemWidth;
    const yMultiple = 500 / this.rootElemWidth;
    const offsetX = (
      0.52 - (pageX - offsets.left - bodyScrollLeft)
      / this.rootElemWidth
    ); // cursor position X
    const offsetY = (
      0.52 - (pageY - offsets.top - bodyScrollTop)
      / this.rootElemHeight
    ); // cursor position Y
    const translateX = index => (
      offsetX * (layerCount - index) * (index / xMultiple)
    );
    const translateY = index => (
      offsetY * (layerCount - index) * (index / yMultiple)
    );

    this.setState({
      layers: allLayers.map((_, index) => ({
        transform: `
          translateX(${translateX(index)}px)
          translateY(${translateY(index)}px)
        `,
      })),
    });
  }

  render() {
    const allLayers = this.allLayers();
    const { style } = this.props;
    const { layers } = this.state;

    return (
      <div
        style={{ ...(style || {}) }}
        // Only listen to mouse events
        onMouseMove={this.handleMove}
        onMouseLeave={() => this.setState({ layers: [] })}
        ref={(node) => { this.root = node; }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        >
          {allLayers && allLayers.map((layer, id) => React.Children.map(layer,
            child => React.cloneElement(child, {
              style: {
                objectFit: 'contain',
                ...(style || {}),
                position: 'absolute',
                width: '104%',
                height: '104%',
                top: '-2%',
                left: '-2%',
                transition: 'all 0.5s ease-out',
                ...(layers[id] ? layers[id] : {}),
                ...child.props.style,
              },
              key: id,
            })))}
        </div>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard as Copy } from 'react-copy-to-clipboard';
import styled from 'styled-components';

class CopyToClipboard extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.state = { copied: false, showTip: false };
  }

  render() {
    const { text, children } = this.props;
    const { copied, showTip } = this.state;

    return (
      <div
        onMouseEnter={() => this.setState({ showTip: true })}
        onMouseLeave={() => this.setState({ showTip: false })}
      >
        <ToolTip showTip={showTip}>
          {copied ? 'Copied!' : 'Copy to clipboard?'}
        </ToolTip>
        <Copy
          text={text}
          onCopy={() => this.setState({ copied: true })}
        >
          {children}
        </Copy>
      </div>
    );
  }
}

const ToolTip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  bottom: 85%;
  left: 85%;
  background: #000;
  text-transform: uppercase;
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: .5rem;
  color: #fff;
  opacity: 0;
  letter-spacing: .05rem;
  transform: scale(0);
  transform-origin: bottom left;
  transition: transform .3s cubic-bezier(.175,.885,.32,1.275),opacity .3s;
  ${props => props.showTip && 'transform: scale(1); opacity: 1;'}
`;

export default CopyToClipboard;

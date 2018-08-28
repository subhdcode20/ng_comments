import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import ActionBack from 'material-ui/svg-icons/hardware/keyboard-backspace';
import {white} from 'material-ui/styles/colors';
import { htmlDecode } from '../../utility';
import MoreButton from './moreButton';

import Styles from './style.scss';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onlyOnce: true
        };
    }

    handleAvtar(e) {
		try {
			if(this.state.onlyOnce) {
                e.target.src = AVTAR;
				this.setState({ onlyOnce: false})
			}
		}catch(e){}
    }

    updateTriggerStamp() {
      console.log("updateTriggerStamp= ");
      // localStorage.setItem("CURRENT_CHAT_LAST_TRIGGERSTAMP", Date.now())
    }

    render() {
        const { action, name, unfriend } = this.props;
		const avtar = this.props.avtar || 'wisp-1024pxcircle.png';

        return (
        	<div className = { Styles.Header } >
            <AppBar
            	style = { {...this.props.style, position: 'fixed' } }
            	iconElementLeft = {
                    <div className={Styles.avtar} onClick={this.updateTriggerStamp}>
                        {
                            action &&
                            action === 'home' &&
                            <Link to="/">
                                <ActionBack color={'white'} />
                            </Link>
                        }
                        <Avatar src={avtar} onError={this.handleAvtar.bind(this)}/>
                    </div>
                }
                title = { htmlDecode(name) }
                iconElementRight = { action==='home' ? <MoreButton unfriend={unfriend} /> : <p/> }
            />
            </div>
        );
    }
}

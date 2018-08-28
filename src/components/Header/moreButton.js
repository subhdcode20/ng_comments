import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {white} from 'material-ui/styles/colors';


export default class MoreButton extends Component {

    constructor(props) {
        super(props);
    }

    unfriendAction() {
        this.props.unfriend();
    }

    fullScreen(element) {
      console.log('in fullScreen= ', element);
      // console.log("document Fullscreen enabled= ", document.webkitFullscreenEnabled, document.fullscreenEnabled );
      if(element.requestFullScreen) {
        element.requestFullScreen();
      } else if(element.webkitRequestFullScreen ) {
        element.webkitRequestFullScreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      }

    }

    goFullScreen() {
      console.log('in goFullScreen');
      var html = document.documentElement;
      this.fullScreen(html);
      // document.webkitRequestFullscreen()
      // document.requestFullscreen()
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton ><MoreVertIcon color={white} /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                <MenuItem primaryText="Unfriend" onClick={this.unfriendAction.bind(this)}/>
                <MenuItem primaryText="Fullscreen" onClick={this.goFullScreen.bind(this)}/>
            </IconMenu>
        );
    }
}

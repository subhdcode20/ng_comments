import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import RaisedButton from 'material-ui/RaisedButton';
import Styles from './styles.scss';

export default class NoFriends extends Component {

	constructor(props) {
		super(props);
	}

	handleClose(e) {
		console.log('closing window');
		window.close()
	}

  	render() {
			let {msg} = this.props
			if(msg == undefined || msg == null) msg = ' ';
	    return (
			<div className={Styles.container}>
				<p>{msg}</p>
				<ReactSVG
					path="noFriends.svg"
					className="class-name"
					wrapperClassName={Styles.img}
			  	/>
				<div onClick={this.handleClose}>
				  	<RaisedButton
						label="CLOSE"
						primary={true}

					/>
				</div>
		  	</div>
    	);
  	}
}

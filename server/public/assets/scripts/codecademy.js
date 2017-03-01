/***********************************************************************/
//Sourcing Objects in Components
var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass({
	render: function(){
    var friend = friends[2];

    return (
    	<div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
});

ReactDOM.render(<Friend/>,document.getElementById('app'));


/***********************************************************************/
//If functions
var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
	render: function(){
    if(fiftyFifty == true){
      var plan = <h1>Tonight I'm going out WOOO</h1>;
    }  else {
      var plan = <h1>Tonight I'm going to bed WOOO</h1>;
    }
		return plan;
  }
});


ReactDOM.render(
  <TonightsPlan/>,
  document.getElementById('app'));


/***********************************************************************/
//Event listener on a component

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },
  render: function () {
    return <button onClick={this.scream}>AAAAAH! </button>;
  }
});
ReactDOM.render(<Button/>,document.getElementById('app'));
/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/



/***********************************************************************/

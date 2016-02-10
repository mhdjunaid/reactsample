var React = require('react');
var ReactDOM = require('react-dom');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require ('jquery');
var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
	
	var myObject = JSON.parse(result);
	console.log(myObject);
      var lastGist = myObject[0];
	  console.log(lastGist);
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

ReactDOM.render(
  <UserGist source="http://localhost:8080/rp-amazon/cbi/diagrams/react-clicks-per-day" />,
  document.getElementById('react')
);


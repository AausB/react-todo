const React = require('react');
const moment = require('moment');

class Todo extends React.Component {
  handleChange = () => {
    //let {id} = this.props;
    //this.props.onToggle(id)
  }

  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;

    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ HH:mm:ss');
    }

    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type='checkbox' onChange={this.handleChange} checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
}

module.exports = {Todo};

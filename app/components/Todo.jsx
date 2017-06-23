const React = require('react');

class Todo extends React.Component {
  handleChange = () => {
    //let {id} = this.props;
    //this.props.onToggle(id)
  }

  render() {
    let {id, text, completed} = this.props;
    return(
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type='checkbox' onChange={this.handleChange} checked={completed}/>
        {text}
      </div>
    );
  }
}

module.exports = {Todo};

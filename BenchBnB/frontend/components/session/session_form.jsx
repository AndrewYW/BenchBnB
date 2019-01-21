import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {

    return (
      <div>
        <h2>{this.props.formType.upcase}</h2>
        <form>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label>Password:
            <input type="text" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <input type="submit" value={this.props.formType} onClick={this.handleSubmit}/>
          {this.props.formType === 'login' ? <Link to='/signup' /> : <Link to='/login' />}
        </form>
      </div>
    )
  }
}

export default SessionForm;
import React from 'react';
import $ from 'jquery';
import Signin from './Signin.jsx';


class MechSignedIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			clientName: '',
			service: '',
			date: ''
		}
		this.handleChanges = this.handleChanges.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChanges(event){
		var name = event.target.name
		var value = event.target.value
		var obj = {}
		obj[name] = value
		this.setState(obj)
		console.log(this.state[name])
	}

handleSubmit(event) {
    
    $.ajax({
      type : 'POST',
      url: '/service',
      data: {
        clientName: this.state.clientName,
		service: this.state.service,
		date: this.state.date
      }, 
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }



	render(){
		return(
			<div>
			<div style={{margin:'10px'}}>
          		<button className="btn btn-danger" onClick={this.props.toggle}>Signout</button>
          	</div>
			<form onSubmit={this.handleSubmit}>
	          <div className="form-group">
	            <label >Client Name:</label>
	            <input type="clientName" className="form-control" id="clientName" placeholder="Enter clientName" name="clientName" value={this.state.clientName} onChange={this.handleChanges}/>
	          </div>
	          <div className="form-group">
	            <label >Service</label>
	            <input type="service" className="form-control" id="service" placeholder="Enter service" name="service" value={this.state.service} onChange={this.handleChanges}/>
	          </div>
	          <div className="form-group">
	            <label >date</label>
	            <input type="date" className="form-control" id="date" placeholder="Enter date" name="date" value={this.state.date} onChange={this.handleChanges}/>
	          </div>
	          <div><button type="submit" className="btn btn-warning" style={{color:'black'}} >Submit</button></div>
          </form>
          
			</div>
			)
	}

}

export default MechSignedIn;
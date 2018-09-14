var NewSkill = createReactClass({

getInitialState: function() {
        return {
            skill: "",
            details: ""
        };
},
    
  handleAddSkill() {
    this.setState({ [event.target.id]: event.target.value});
  },

  handleClick() {
    debugger;

    let name    = this.state.skill;
    let details = this.state.details;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div>
        <input id="skill" value={this.state.skill} onChange={this.handleAddSkill} placeholder='Enter name of skill' />
        <input id="details" value={this.state.details} onChange={this.handleAddSkill}  placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});

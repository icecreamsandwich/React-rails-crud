var NewSkill = createReactClass({

getInitialState: function() {
        return {
            skill: "",
            details: ""
        };
},

  handleAddSkill(event) {
    this.setState({ [event.target.id]: event.target.value});
  },

  handleClick() {
    debugger;

    /*let name    = this.state.skill;
    let details = this.state.details;*/

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: this.state.skill, details: this.state.details } },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div>
        <input id="skill"  value={this.state.skill} onChange={this.handleAddSkill} placeholder='Enter name of skill' type="text"/>
        <input id="details"  onChange={this.handleAddSkill}  placeholder='Details' type="text" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});

var Skill = createReactClass({
  getInitialState() {
    return { editable: false }
  },

  handleUpdateSkill(event) {
    this.setState({ [event.target.name]: event.target.value});
  },

  handleEdit() {
    if (this.state.editable) {
      let skill   = { id: this.props.skill.id,
                      name: this.state.skill,
                      details:  this.state.details }

      this.props.handleEdit(skill);
    }

    this.setState({ editable: !this.state.editable })
  },

  onUpdateLevel(action) {
    if (this.canChangeLevel(action)) {
      let level = this.getNewLevel(action)
      let skill = {id: this.props.skill.id, level: level }

      this.props.handleEdit(skill);
    }
  },

  canChangeLevel(action) {
    let levels  = ['bad', 'halfbad', 'fantastic'];
    let index   = levels.indexOf(this.props.skill.level);

    return action === 'up' && index < 2 ||  action === 'down' && index > 0;
  },

  getNewLevel(action) {
    let levels = ['bad', 'halfbad', 'fantastic'];
    let level  = levels.indexOf(this.props.skill.level);
    let change = action === 'up' ? 1 : - 1;

    return action ? levels[level + change] : this.props.skill.level;
  },

  render() {
    var name = this.state.editable ? <input type='text' name="skill"
                                            onChange={this.handleUpdateSkill} 
                                            defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    let details = this.state.editable ? <textarea type='text' name="details"
                                                  onChange={this.handleUpdateSkill} 
                                                  defaultValue={this.props.skill.details}>
                                        </textarea>
                                      : <p>{this.props.skill.details}</p>
    return (
      <div>
        {name}

        <div className='skill-level'>
          <button type="button"
                  className="btn btn-default btn-sm"
                  onClick={this.onUpdateLevel.bind(this, 'down')}>
            <span className="glyphicon glyphicon-triangle-bottom"></span>
          </button>

            <p><strong>Level:</strong> {this.props.skill.level}</p>

          <button type="button"
                  className="btn btn-default btn-sm"
                  onClick={this.onUpdateLevel.bind(this, 'up')}>
            <span className="glyphicon glyphicon-triangle-top"></span>
          </button>
        </div>

        {details}

        <button onClick={this.props.handleDelete}>
          Delete
        </button>

        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
});

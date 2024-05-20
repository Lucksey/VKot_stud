import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Woo-Hooo'
    }

    activateEditMode() {
        this.setState({
                editMode: true
            }
        );
    }

deactivateEditMode() {
        this.setState({
                editMode: false
            }
        );
    }

    render() {
        return (
            <div>
                {!this.state.editMode && // если не true, то
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode && // если true, то
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
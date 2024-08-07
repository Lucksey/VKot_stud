/*
import React, {ChangeEvent} from "react";
// неиспользуемый файл целиком. оставлен для примера. рабочий файл - ProfileStatusWithHook

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        );
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !== prevState.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }


    render() {
        return (
            <div>
                {!this.state.editMode && // если !не true, то
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode && // если true, то
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;*/

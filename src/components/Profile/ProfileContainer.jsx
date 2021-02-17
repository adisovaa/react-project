import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {  //side-effect делает
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)




//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//let withUrlDataContainerComponent = withRouter(ProfileContainer)
//withRouter - возвращает новую компоненту, в него закинутся еще данные из URL
//withRouter заработал и вернул нам новую компоненту withUrlDataContainerComponent

//export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)
// соnnect-возвращает новую компоненту, которая отрисует эту компоненту(ProfileContainer),но закидывается данные из store в данный компонент
// connect добавляет withUrlDataContainerComponent в глубину
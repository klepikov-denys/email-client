import React from 'react';
import './App.css';
import Navi from './navigation/Navi.jsx'
import ButtonBar from './buttonBar/ButtonBar.jsx'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Compose from './compose/Compose'
import Message from './message/Message.jsx'
import { connect } from 'react-redux'
import MailsList from './mails/MailsList'
import ModalWindow from './modal/Modal.js'
import Login from './login/Login'
import { withRouter } from 'react-router-dom'
import { refreshMails } from './thunkCreators/refreshMails'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filterType: 'INBOX',
      modalIsOpened: false,
    }
    this.closeModal = this.closeModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleNaviClick = this.handleNaviClick.bind(this)
  }  

  componentDidMount(){
    this.props.refreshMailsList()
  }
  handleNaviClick(type){
    switch (type){
      case 'INBOX':
        this.setState({ filterType: 'INBOX'})
        break;
      case 'IMPORTANT':
        this.setState({ filterType: 'IMPORTANT'})
        break;
      case 'SENT':
        this.setState({ filterType: 'SENT'})
        break;
      case 'TRASH':
        this.setState({ filterType: 'TRASH'})
        break;
      default: return this.state
    }
  }

  
  showModal(){
    this.setState({
      modalIsOpened: true 
    })
  }

  closeModal(){
    this.setState({
      modalIsOpened: false
    })
  }

  render(){
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <Link to='/' className={this.props.email ? '' : 'disabled-link-logo'}>
              <img className="app-logo" src="https://img.icons8.com/plasticine/100/000000/email.png" alt="Mail Logo"></img>
            </Link>

            <p className='header-user-email' onClick={this.showModal}>{this.props.email}</p>
            
            <ModalWindow show= {this.state.modalIsOpened} onHide={this.closeModal} />
          </header>
          <div className='main-content-wrapper'>
            <Switch>
              <Route path='/login' component={Login} />
            </Switch>
            <Switch>
              <Route path='/compose' component={Compose} />
              <Route path='/mail/:id' component={Message} />

              <Route exact path ='/'>
                <div className='main-content'>
                  <aside className='main-content-sidebar'>
                      <Navi 
                        handleClick = {this.handleNaviClick}
                        btnState = {this.state.btnState}
                      />
                  </aside>
                  
                  <main className='main-content-main'>
                    <div className='main-button-bar'>
                      <ButtonBar filterType={this.state.filterType} />
                    </div>
                    <hr></hr>
                    <div className='content-main-mails'>
                      <MailsList
                        filterType={this.state.filterType}
                        mails={this.props.mails}
                      />
                    </div>

                  </main>
                </div> 
              </Route>
            </Switch>
          </div>

        </div>
        

        </Router>
      
    );
  }
}


const mapStateToProps = (state) => ({
    mails: state.mailList.allMails,
    email: state.profileReducer.userEmail
  })
const mapDispatchToProps = (dispatch) => ({
  refreshMailsList: () => dispatch(refreshMails())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

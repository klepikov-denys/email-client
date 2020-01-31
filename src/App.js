import React from 'react';
import './App.css';
import Navi from './navigation/Navi'
import ButtonBar from './buttonBar/ButtonBar.jsx'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Compose from './compose/Compose'
import Message from './message/Message.jsx'
import { connect } from 'react-redux'
import MailsList from './mails/MailsList'
import Modal from './modal/Modal.js'
import Login from './login/Login'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filterType: 'INBOX',
      filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'INBOX'),
      modalIsOpened: false,
    }
    this.closeModal = this.closeModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleNaviClick = this.handleNaviClick.bind(this)
    
  }  



  handleNaviClick(type){
    switch (type){
      case 'INBOX':
        this.setState({ filterType: 'INBOX', 
        filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'INBOX')}) 
        break;
      case 'IMPORTANT':
        this.setState({ filterType: 'IMPORTANT',
        filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'IMPORTANT')})
        break;
      case 'SENT':
        this.setState({ filterType: 'SENT',
        filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'SENT')})
        break;
      case 'TRASH':
        this.setState({ filterType: 'TRASH', 
        filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'TRASH')})
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
        <div className="App">
          <header className="App-header">
            <Link to='/' className={this.props.email ? '' : 'disabled'}>
              <img className="App-logo" src="https://img.icons8.com/plasticine/100/000000/email.png" alt="Mail Logo"></img>
            </Link>

            <p className='header-userEmail' onClick={this.showModal}>{this.props.email}</p>
            
            <Modal show= {this.state.modalIsOpened} handleClose={this.closeModal} />
          </header>
          <div>
            <Switch>
              <Route path='/login' component={Login} />
            </Switch>
            <Switch>
              <Route path='/compose' component={Compose} />
              <Route path='/mail/:id' component={Message} />

              <Route exact path ='/'>
                <div className='mainContentWrapper'>
                  <aside className='mainContentSidebar'>
                    <Link to='/'>
                      <Navi 
                        handleClick = {this.handleNaviClick}
                        btnState = {this.state.btnState}
                      />
                    </Link>
                  </aside>
                  
                  <main className='mainContent'>
                    <div className='mainButtonsBar'>
                      <ButtonBar filterType={this.state.filterType} />
                    </div>
                    <hr></hr>
                    <div className='mainContentMails'>
                      <MailsList
                        filterType={this.state.filterType}
                        filteredMails={this.state.filteredMails}
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

export default connect(mapStateToProps, )(App);

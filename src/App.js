import React from 'react';
import './App.css';
import Navi from './navigation/Navi'
import ButtonBar from './buttonBar/ButtonBar'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Compose from './compose/Compose'
import Message from './message/Message.jsx'
import { connect } from 'react-redux'
import MailsList from './mails/MailsList'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filterType: 'INBOX',
      filteredMails: this.props.mails.concat().filter((obj) => obj.type === 'INBOX')
    }

    this.handleNaviClick = this.handleNaviClick.bind(this)
    this.baseState = this.state
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


  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to='/'>
              <img className="App-logo" src="https://img.icons8.com/plasticine/100/000000/email.png" alt="Mail Logo"></img>
            </Link>

            <p className='userEmail'>den@gmail.com</p>
            
          </header>

          <div className='mainContentWrapper'>
            <aside className='mainContentSidebar'>
              <Link to='/'>
                <Navi 
                  handleClick = {this.handleNaviClick}
                  btnState = {this.state.btnState}
                />
              </Link>
            </aside>

            <Switch>
              <Route path='/compose' component={Compose} />
              <Route path='/mail/:id' component={Message} />
            
              <Route exact path ='/'>
                

                <main className='mainContent'>
                  <div className='mainButtonsBar'>
                    <ButtonBar />
                  </div>
                  <hr></hr>
                  <div className='mainContentMails'>
                    <MailsList
                      filterType={this.state.filterType}
                      filteredMails={this.state.filteredMails}
                    />
                  </div>

                </main>
              </Route>
            </Switch>
          </div> 


        </div>
        

        </Router>
      
    );
  }
}


const mapStateToProps = (state) => ({
    mails: state.allMails
  })

export default connect(mapStateToProps, )(App);

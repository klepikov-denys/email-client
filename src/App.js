import React from 'react';
import './App.css';
import Mail from './mails/Mail'
import Navi from './navigation/Navi'
import ButtonBar from './buttonBar/ButtonBar'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Compose from './compose/Compose'
import Message from './message/Massage'

var allMailsArr = require('./mails/mails.json')

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mails: allMailsArr,
      btnState: Array(4).fill(true)
    }

    this.handleNaviClick = this.handleNaviClick.bind(this)
    this.baseState = this.state
  }  

  


  handleNaviClick(arg){
    

    switch (arg){
      case 'INBOX':
        this.setState({mails: this.baseState.mails.filter((obj) => obj.type === 'INBOX'),
          btnState: this.baseState.btnState.map((bool, index) => index === 0 ? !bool : bool)})
        
        break;
      case 'IMPORTANT':
        this.setState({mails:this.baseState.mails.filter((obj) => obj.type === 'IMPORTANT'),
        btnState: this.baseState.btnState.map((bool, index) => index === 1 ? !bool : bool)})
        break;
      case 'SENT':
        this.setState({mails: this.baseState.mails.filter((obj) => obj.type === 'SENT'),
        btnState: this.baseState.btnState.map((bool, index) => index === 2 ? !bool : bool)})
        break;
      default:
        this.setState({mails: this.baseState.mails.filter((obj) => obj.type === 'TRASH'),
        btnState: this.baseState.btnState.map((bool, index) => index === 3 ? !bool : bool)})
    }
  }


  

  render(){
    
    

    let mails = this.state.mails.map((mail, index) =>{
      let textPreview = mail.text.slice(0,42) + '...';
      let id = mail.id
      return(
        <Link to={`/mail/${id}`} key={id} className={'app-link'}>
          <Mail 
            senderName = {mail.sender}
            mailText = {textPreview} 
            type = {mail.type}   
          />
        </Link>
      )
    } 
      
    )

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
              <Navi 
                handleClick = {this.handleNaviClick}
                btnState = {this.state.btnState}
              />
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
                    {mails}
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

export default App;

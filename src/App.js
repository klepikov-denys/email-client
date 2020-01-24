import React from 'react';
import './App.css';
import Mail from './mails/Mail'
import Navi from './navigation/Navi'
import ButtonBar from './buttonBar/ButtonBar'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Compose from './compose/Compose'
import Message from './message/Massage'
import { connect } from 'react-redux'
import {filterMails} from './actions/filteringAction'




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mails: this.props.mails,
      btnState: Array(4).fill(true)
    }

    
    this.handleNaviClick = this.handleNaviClick.bind(this)
    this.baseState = this.state
  }  

  


  handleNaviClick(arg){
    

    switch (arg){
      case 'INBOX':
        this.setState({
          btnState: this.baseState.btnState.map((bool, index) => index === 0 ? !bool : bool)})
        this.props.filterMails('INBOX')
        break;
      case 'IMPORTANT':
        this.setState({
          btnState: this.baseState.btnState.map((bool, index) => index === 1 ? !bool : bool)})
        this.props.filterMails('IMPORTANT')
        break;
      case 'SENT':
        this.setState({
          btnState: this.baseState.btnState.map((bool, index) => index === 2 ? !bool : bool)})
        this.props.filterMails('SENT')
        break;
      case 'TRASH':
        this.setState({
          btnState: this.baseState.btnState.map((bool, index) => index === 3 ? !bool : bool)})
        this.props.filterMails('TRASH') 
        break;
      default: return this.state
    }
  }


  

  render(){
    
    console.log(this.props.mails)

    let mails = this.props.mails.map((mail, index) =>{
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterMails: (prop) => {
      dispatch(filterMails(prop));
    }
  }
}

const mapStateToProps = (state) => {
  return{
    mails: state.allMails
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

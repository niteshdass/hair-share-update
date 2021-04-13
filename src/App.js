import React, { Component,useState,useEffect} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import MyLogin from './MyLogin'
import './css/style.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {

  useEffect(() => {
    
  const myemail = localStorage.getItem('email');

   

  setEmail1(myemail)

  }, [])

 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [email1,setEmail1] = useState("")
    const [error,setError] = useState(false)

    const handleChange = (e) =>{

      setEmail(e.target.value)

}
const handleChange1 = (e) =>{

  setPassword(e.target.value)

}

const closeButton = ()  =>{
  setError(false)
}


const clickSubmit = (e) =>{

  e.preventDefault();

  if(email === "hair-share@gmail.com" && password ==="hair-share" ){
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)

    setPassword("hair-share")
    setEmail1("hair-share@gmail.com")
    setError(false)
  }else{

    setError(true)

  }


  console.log(email)

}

 






    
    const helloApp = ()=>{
       
      return(
        <>

        {
          error?<div class="alert text-center">
          <span class="closebtn" onClick={closeButton} >&times;</span> 
          <strong>Your email or password is invalid !!!</strong>
        </div>:""
        }

        <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Hair Share Shop</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Log In</h2>
        
					</div>
					<div className="row">
						<form control="" className="form-group">
							<div className="row">
              <span className="fa fa-lock">Email</span> 
								<input type="text" onChange={handleChange} placeholder="Email"  id="username" className="form__input" value={email}/>
							</div>
							<div className="row">
								  <span className="fa fa-lock">Password</span>  
								<input type="password" onChange={handleChange1} value={password}   id="password" className="form__input" placeholder="Password"/>
							</div>
						 
							<div className="row">
                <a onClick={clickSubmit} style={{textDecoration: "none"}} className="btn1">Submit</a>
							</div>
						</form>
					</div>
					 
				</div>
			</div>
		</div>
	</div>
  </>
      )
    }
    
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {email1 === "hair-share@gmail.com"?<Route path="/" name="Home" render={props => <TheLayout {...props}/>} />:helloApp()}
             
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
      

            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  
}

export default App;

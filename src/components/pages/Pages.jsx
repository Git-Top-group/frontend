import React, { useContext } from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignUp from '../signup/signup'
import SignIn from '../Login/login';
import Profile from '../Profile/Profile';
import Posts from '../posts/Posts';
import Dashboard from '../dashboard/Dashboard' ;
import NotFound from './404' ; 
import DropDown from '../dropDown/DropDown';
import UserList from "../UserList/UserList"
import UserDetails from "../UserDetails/UserDetails"
import PostDetails from '../PostDetails/PostDetails'
// import {LoginContext} from '../context/context'
import {PostsRoutes ,ProfileRoutes} from '../protectedRoutes/UserRoutes'
const Pages = () => {
  // const auth = useContext(LoginContext)
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/setting' component={DropDown}/>
          <Route exact path='/services' component={Services} />

          <Route exact path='/blog' component={Blog} />
          <ProfileRoutes exact path='/profile' component={Profile} />

          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <PostsRoutes exact path='/posts' component={Posts} />
          <Route path={`/dashboard`} component={Dashboard} />
          <Route exact path="/postdetails/:model/:id" component={PostDetails}/>
          <Route exact path="/userList" component={UserList}/>
          <Route exact path="/userDetails" component={UserDetails}/>
          <Route path="" component={NotFound} /> 

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages

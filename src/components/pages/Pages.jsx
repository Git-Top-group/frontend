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
import Dashboard from '../dashboard/Dashboard'
// import { LoginContext } from '../context/context'
// import PostProvider from '../context/postContext'

const Pages = () => {
  // const auth = useContext(LoginContext)
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          {/* <PostProvider> */}
            <Route exact path='/blog' component={Blog} />
          {/* </PostProvider> */}
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/posts' component={Posts} />
          <Route path={`/dashboard/:id`} component={Dashboard} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages

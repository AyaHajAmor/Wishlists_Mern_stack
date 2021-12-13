import React, { useEffect } from 'react';
import NavBar from './components/navbar.component';
import Footer from './components/footer.component';
import { connect } from 'react-redux';
import { check_authenticated } from './actions/auth_actions';

const Layout = (props) => {
  useEffect(() => {
    props.check_authenticated();
  }, []);

  return (
    <div className="containerMain">
      <NavBar />
      <div style={{ marginBottom: '5%',bottom:'0',width:'100%',height:'90%' }} >
        <div  >
          {props.children}
        </div>
      </div>
      <Footer style={{ position:'fixed',bottom:'0',width:'100%', height:'100px' , background:'#6cf' }} />
    </div>
  );
};

export default connect(null, { check_authenticated })(Layout);
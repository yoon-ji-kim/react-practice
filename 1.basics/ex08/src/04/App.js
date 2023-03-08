import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

//Fragment
function App() {
  // return (
  //   <Fragment>
  //     <Header />
  //     <Content />
  //   </Fragment>
  // );
  return React.createElement(Fragment, null, React.createElement(Header, null), React.createElement(Content, null));
}

export default App;

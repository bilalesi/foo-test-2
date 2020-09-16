import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header';
import Content from './Content'
import LeftMenu from './LeftMenu';
import { HeaderContextProvider } from './Contexts'

function App() {
  return (
    <div className="App">
		<Router>
			<HeaderContextProvider>
				<Header></Header>
				<div className={styles.body}>
					<LeftMenu/>
					<div className={styles.content}>
						<Content/>
						<Content/>
						<Content/>
					</div>
				</div>
			</HeaderContextProvider>

			<Route path='/AccoutSettings'></Route>
			<Route exact path='/'></Route>
		</Router>
    </div>
  );
}

export default App;

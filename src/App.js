import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import { ThemeProvider } from './pages/ThemeContext';
import ThemeSelector from './pages/ThemeSelector';

function App() {
	return (
		<div className={`App`}>
			<ThemeProvider>
				<Router>
					<Routes>
						<Route path = "/" element = {(
							<>
								<Home></Home>
							</>
						)}></Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;

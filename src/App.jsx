import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UserStory from './components/UserStory';
import Hts from './components/Hts';
import Uml from './components/Uml';
import Feedback from './components/Feedback';
import Footer from './components/Footer';


function App() {
	return <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
		<Navbar /> 
		<Hero /> {/*apresentação do trabalho */}
		<UserStory /> {/*user story do trabalho*/}
		<Hts />{/*hta do trabalho */}
		<Uml /> {/*uml de classes*/}
		<Feedback /> {/*feedbacks dos usuarios */}
		<Footer />

	</div>;
}

export default App

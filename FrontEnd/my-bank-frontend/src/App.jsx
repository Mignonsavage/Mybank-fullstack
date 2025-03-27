import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from "./components/SignUp.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Navigation Bar */}
                <nav className="bg-navy-900 py-4 px-6 flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-university text-2xl"></i>
                        <span className="text-xl font-bold">MyBank</span>
                    </div>
                    <div className="space-x-8">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
                        <a href="#" className="hover:text-gray-300">Services</a>
                        <a href="#" className="hover:text-gray-300">About Us</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="flex flex-col items-center justify-center text-center h-[80vh] w-full px-4">
                    <h1 className="text-5xl font-bold mb-4">Welcome to MyBank</h1>
                    <p className="text-xl text-gray-300 mb-8">Your trusted partner in financial success.</p>
                    <div className="flex space-x-4">
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 px-6 py-2 rounded-full font-medium">
                            Get Started
                        </button>
                        <button className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 px-6 py-2 rounded-full font-medium">
                            Learn More
                        </button>
                        <Link to="/signup">
                            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 py-12 px-6 w-full">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect with us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <div className="text-gray-300">
                                <p>Email: support@mybank.com</p>
                                <p>Phone: +1 (555) 123-4567</p>
                                <p>Address: 123 Finance Ave, Money City</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <Routes>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
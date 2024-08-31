import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/profile';
function App() {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

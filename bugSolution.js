```javascript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path=":id" element={<ContactDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

This revised code uses nested routes within the `/contact` route.  This approach provides more control and better manages navigation between different parts of the application.  If you need to handle dynamic segments within the `/contact` section, such as individual contact details, this structure allows that functionality without causing the wildcard-related issues.  Replacing the wildcard path with clearly defined routes that handle dynamic segments using route parameters ensures predictable navigation. If the user tries to navigate away from the `/contact` routes, standard navigation works.
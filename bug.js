```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

This code uses `react-router-dom` v6.  The issue arises when navigating to `/contact` and then trying to navigate to a route that is *not* a child of `/contact`. For example, navigating from `/contact` to `/about` might cause unexpected behavior or prevent navigation altogether.
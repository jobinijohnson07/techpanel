import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from '../components/Filter/filter';

export default function Router() {
   return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Filter/>} />
      </Routes>
    </BrowserRouter>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
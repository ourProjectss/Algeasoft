import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/app.scss';
import { 
  HomePage,
  AboutPage,

} from '../../pages'
import { Footer } from '../../widgets/footer/Footer';
import { Header } from '../../widgets/header/Header'
export const routesArr = [
  {
    path: '/',
    title: "Главная",
    element: <HomePage />
  },
  {
    path: 'AboutPage',
    title: 'О компании',
    element: <AboutPage />
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/app.scss';
import { 
  HomePage,
  AboutPage,
  SupportPage,

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
    path: 'aboutPage',
    title: 'О компании',
    element: <AboutPage />
  },
  {
    path: 'support',
    title: 'Поддержка',
    element: <SupportPage />
  }
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

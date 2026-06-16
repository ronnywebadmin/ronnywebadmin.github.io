import { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import './style-entry.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useRoute } from './hooks/useRoute';
import { AboutPage } from './pages/AboutPage';
import { BooksPage } from './pages/BooksPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { MediaPage } from './pages/MediaPage';
import { routes } from './routes';

const pages = {
  home: HomePage,
  books: BooksPage,
  media: MediaPage,
  about: AboutPage,
  contact: ContactPage,
};

function App() {
  const route = useRoute();
  const Page = useMemo(() => pages[route], [route]);

  useEffect(() => {
    document.body.className = routes[route].className;
    document.title = route === 'home' ? 'Ronald Lex "Ronny" Stout' : `${routes[route].label} | Ronald Lex Stout`;
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <>
      <Header route={route} />
      <Page />
      <Footer route={route} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

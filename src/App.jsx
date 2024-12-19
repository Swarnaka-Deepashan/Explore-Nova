import Nav from "./components/Nav";
import {
  Home,
  Blogs,
  Footer,
  Locations,
  Packages,
  Reviews,
  Tour,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="pb-20 sm:pb-32">
        <Home />
      </section>
      <section className="padding-common">
        <Locations />
      </section>
      <section className="padding-common">
        <Tour />
      </section>
      <section className="padding-common">
        <Packages />
      </section>
      <section className="padding-common">
        <Reviews />
      </section>
      <section className="padding-common">
        <Blogs />
      </section>
      <section className='pb-8 bg-black padding-x padding-t'>
        <Footer />
      </section>
    </main>
  );
};

export default App;

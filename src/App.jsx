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
      <section className="sm:pb-32 pb-20">
        <Home />
      </section>
      <section className="xl:px-24 px-10 sm:pb-32 pb-20">
        <Locations />
      </section>
      <section className="xl:px-24 px-10 sm:pb-32 pb-20">
        <Tour />
      </section>
      <section className="xl:px-24 px-10 sm:pb-32 pb-20">
        <Packages />
      </section>
      <section className="xl:px-24 px-10 sm:pb-32 pb-20">
        <Reviews />
      </section>
      <section className="xl:px-24 px-10 sm:pb-32 pb-20">
        <Blogs />
      </section>
      <section className='pb-8 bg-black padding-x padding-t'>
        <Footer />
      </section>
    </main>
  );
};

export default App;

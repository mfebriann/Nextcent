import {
  Header,
  Jumbotron,
  Clients,
  Community,
  Pixelgrade,
  CallToAction,
  Services,
  Customers,
  Blogs,
  Demo,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Jumbotron />
        <Clients />
        <Community />
        <Pixelgrade />
        <CallToAction />
        <Services />
        <Customers />
        <Blogs />
        <Demo />
      </main>
      <Footer />
    </>
  );
}

export default App;

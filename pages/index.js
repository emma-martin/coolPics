import Button from "../components/ui/button";

function HomePage() {
  const picListLink = "/list";
  return (
    <div>
      <header>
        <h1>CoolPics</h1>
      </header>
      <main>
        <h2>Are you bored?</h2>
        <div>
          <p>
            CoolPics helps you to spend hours of your day scrolling down and
            sharing a big list of random images.
          </p>
        </div>
        <Button href={picListLink} class="start">
          {"Start here".toUpperCase()}
        </Button>
      </main>
    </div>
  );
}

export default HomePage;

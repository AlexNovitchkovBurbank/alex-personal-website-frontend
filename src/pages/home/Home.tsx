import "./home.css";

const Home = () => {
  return (
    <main className="page">
      <h1>Home</h1>
      <section className="home-bio">
        <img
          className="home-picture"
          aria-label="Profile picture"
          role="img"
          src="./Alex.jpg"
          alt="Alex's Profile picture"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fallbackText = e.currentTarget
              .nextElementSibling as HTMLElement;
            if (fallbackText) {
              fallbackText.style.display = "flex";
            }
          }}
        />
        <div className="home-picture-placeholder">Alex's picture</div>
        <h2 className="home-subtitle">
          Hi, my name is Alexander Novitchkov-Burbank. I am a full stack
          engineer specializing in the React, Typescript, and C# stack. I have 2
          years of profession experience and 8 years of building software in
          general. I am currently helping build a donation portal for
          nonprofits. I love cloud and web development.
        </h2>
      </section>
    </main>
  );
};

export default Home;

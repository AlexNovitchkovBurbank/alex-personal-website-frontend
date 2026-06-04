import "./home.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home">
        <h1>Home</h1>
        <img
          className="home-picture"
          aria-label="Profile picture"
          role="img"
          src="path/to/profile.jpg"
          alt="Profile picture"
        />
        <h2 className="home-subtitle">
          Hi, my name is Alexander Novitchkov-Burbank. I am a full stack engineer specializing in the React, Typescript, and
          C# stack. I have 2 years of profession experience and 8 years of
          building software in general. I am currently helping build a donation
          portal for nonprofits. I love cloud and web development.
        </h2>
      </section>
    </main>
  );
};

export default Home;

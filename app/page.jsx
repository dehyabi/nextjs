import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Learn Basic of Next.js
        <br />
        <span className="orange_gradient">Create Full Stack Web App</span>
      </h1>
      <p className="desc text-center">
        Learn full stack web app from scratch in Next.js
      </p>

      <Feed />
    </section>
  );
};

export default Home;

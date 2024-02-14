const LandingPage = () => {
  return (
    <>
      <div
        id="landing-page-container"
        className=" w-full h-[80vh] flex justify-evenly items-center"
      >
        <div id="intro-container" className="w-[35vw]">
          <h1 className="text-[2.5rem]">Welcome to MiTierraMHK👋🏽! !</h1>
          <h2 className="text-[1.5rem]">
            Located in the Aggieville district of Manhattan, KS📍.
          </h2>
        </div>
        <div
          id="img-container"
          className="w-[20vw] flex justify-center items-center"
        >
          <h1 className="border-2">Placeholder</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

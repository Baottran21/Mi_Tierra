const LandingPage = () => {
  return (
    <>
      <div
        id="landing-page-container"
        className=" w-full h-[80vh] flex justify-evenly items-center"
      >
        <div className="w-full flex-row justify-center items-center">
          <h1 className="flex justify-center">
            We Apologize for the inconvenience but we are currently working
            through website maintenance
          </h1>
          <a href="/menu">
            <h1>Menu</h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

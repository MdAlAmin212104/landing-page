const Range = () => {
  return (
    <div className="card card-side bg-[#ECF5FF] container md:w-4/5 md:ml-16">
      <figure>
        <div className="md:mt-24 md:ml-6">
        <h1 className="Montserrat md:text-3xl text-xl font-bold md:text-center">Need a Home Loan?</h1>
        <p>Select How much Home loan you can take</p>
        </div>
      </figure>
      <div className="card-body">
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range mt-8"
          step="25"
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>$20k</span>
          <span>$30k</span>
          <span>$40k</span>
          <span>$50k</span>
          <span>$60k</span>
        </div>
      </div>
    </div>
  );
};

export default Range;

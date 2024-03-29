import Wrapper from "./Wrapper";

function City({ city, temp, type }) {
  // Skelton
  if (!city || !temp || !type) {
    return (
      <div className="animate-pulse">
        <Wrapper>
          <div className="w-[250px] h-[200px] text-3xl flex flex-col justify-around items-center">
            <h2 className="w-40 h-10 bg-blue-300 rounded-full"></h2>
            <h1 className="w-44 h-14 bg-blue-300 rounded-full"></h1>
            <h2 className="w-40 h-10 bg-blue-300 rounded-full"></h2>
          </div>
        </Wrapper>
      </div>
    )
  }
  return (
    <div>
      <Wrapper>
        <div className="w-[250px] h-[200px] text-3xl flex flex-col justify-around items-center">
          <h2>{city}</h2>
          <h1 className="text-5xl font-bold">
            {temp}
            <sup>o</sup> C
          </h1>
          <h2>{type}</h2>
        </div>
      </Wrapper>
    </div>
  );
}

export default City;

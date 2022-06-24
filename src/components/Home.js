import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { FaSearchLocation } from 'react-icons/fa';
import { FcGlobe } from 'react-icons/fc';
import Spinner from './Spinner/Spinner';
import ContinentList from './ContinentList';

const Home = () => {
  const {
    continents,
    totalData: { totalCases, totalDeaths },
  } = useSelector((state) => state.covid);

  return (
    <>
      {!continents.length && <Spinner />}
      {continents.length > 0 && (
        <>
          <div className="globeDetails">
            <FcGlobe className="globe" />
            <div className="count">
              <CountUp
                delay={1}
                end={totalCases}
                separator=","
                prefix="Total Cases: "
                duration={3}
              />
              <CountUp
                delay={1}
                prefix="Total Deaths: "
                end={totalDeaths}
                separator=","
                duration={3}
              />
            </div>
          </div>
          <form className="form">
            <div className="search-bar">
              <FaSearchLocation />
              <div>
                <input
                  className="input-area"
                  type="text"
                  value={null}
                  placeholder="Search Here"
                  onChange={null}
                />
              </div>
            </div>
          </form>
          <ContinentList continents={continents} />
        </>
      )}
    </>
  );
};

export default Home;

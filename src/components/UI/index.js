import { useState, useEffect } from "react";
import axios from "axios";
import {} from "../../asset/scss/UI.scss";

function UI() {
  let [data, setData] = useState();
  const [input, setInput] = useState();

  async function getWeather() {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=220b162ef6574c97ac432326212612&q=${input}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {}, [data]);
  useEffect(() => {}, [input]);

  return (
    <>
      <div className="header">
        <div className="title d-block">
          <div className="text">DEMO LẤY API VỀ THỜI TIẾT</div>
          <div className="search__container">
            <input
              className="search__input"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setInput(() => e.target.value);
              }}
            />
            <button
              type="submit"
              style={{
                border: "1px solid #575756",
                marginLeft: "10px",
                color: "#575756",
                padding: "12px 24px",
                borderRadius: "50px",
                fontSize: "20px",
              }}
              onClick={() => {
                getWeather();
              }}
            >
              Tìm Kiếm
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className={data ? "content d-block" : "content d-none"}>
        <div className="row w-100">
          <div className="col-6">
            <div className="name-local">
              <div className="h2-text">{data?.location?.name}</div>
              <h3 style={{ textAlign: "center" }}>
                {data?.location?.localtime.slice(0, 10)}
              </h3>
              <h4 style={{ textAlign: "center" }}>
                {data?.location?.localtime.slice(-5)}
              </h4>
            </div>
          </div>

          <div className="col-6">
            <div className="temp">
              {data?.current?.temp_c}
              <sup className="sup-temp">o</sup>
              <div className="line"> </div>
              <div className="text-temp">
                It's {data?.current?.condition?.text}
                <img src={data?.current?.condition?.icon} className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row w-100 pb-5">
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">MAIN</div>
              <table className="information-weather-main">
                <tbody>
                  <tr>
                    <th>Temp_c:</th>
                    <td>{data?.current?.temp_c}</td>
                  </tr>
                  <tr>
                    <th>Temp_f:</th>
                    <td>{data?.current?.temp_f}</td>
                  </tr>
                  <tr>
                    <th>Last update:</th>
                    <td>{data?.current?.last_updated}</td>
                  </tr>
                  <tr>
                    <th>Cloud:</th>
                    <td>{data?.current?.cloud}</td>
                  </tr>
                  <tr>
                    <th>Humidity:</th>
                    <td>{data?.current?.humidity}</td>
                  </tr>
                  <tr>
                    <th>Condition:</th>
                    <td>{data?.current?.condition?.text}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">WIND:</div>
              <table className="information-weather-main">
                <tbody>
                  <tr>
                    <th>MPH:</th>
                    <td>{data?.current?.wind_mph}</td>
                  </tr>
                  <tr>
                    <th>KPH</th>
                    <td>{data?.current?.wind_kph}</td>
                  </tr>
                  <tr>
                    <th>Degree:</th>
                    <td>{data?.current?.wind_degree}</td>
                  </tr>
                  <tr>
                    <th>Dir:</th>
                    <td>{data?.current?.wind_dir}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-4">
            <div className="box-information">
              <div className="title-information">PRESSURE</div>
              <table className="information-weather-main">
                <tbody>
                  <tr>
                    <th>MB:</th>
                    <td>{data?.current?.pressure_mb}</td>
                  </tr>
                  <tr>
                    <th>IN:</th>
                    <td>{data?.current?.pressure_in}</td>
                  </tr>
                  <tr>
                    <th>MM:</th>
                    <td>{data?.current?.precip_mm}</td>
                  </tr>
                  <tr>
                    <th>IN:</th>
                    <td>{data?.current?.precip_in}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UI;

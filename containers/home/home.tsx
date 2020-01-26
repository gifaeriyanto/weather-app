import React, { useState, useEffect } from 'react';
import { Wrapper, Table, Icon, Info } from './home.styles';
import { Dropdown } from '../../components';
import { fetchData } from './actions/fetchData';

const Home = () => {
  const [city, setCity] = useState<string>('Jakarta');
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  let averageTemp = 0;
  let averageTempDif = 0;

  useEffect(() => {
    if (city) {
      setIsError(false);
      setIsFetching(true);
      setData([]);
      fetchData(city)
        .then((payload: []) => {
          setData(payload);
        })
        .catch(error => {
          setIsError(error);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [city]);

  const items = data.map(item => {
    const { dt, dt_txt, main, weather } = item;
    const tempDif = main.temp_max - main.temp_min;
    averageTemp += main.temp;
    averageTempDif += tempDif;

    return (
      <tr key={dt}>
        <td>{dt_txt.substr(0, 10)}</td>
        <td>
          <Icon
            src={`//openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].main}
          />
        </td>
        <td align='center'>{Math.round(main.temp)}&#176;C</td>
        <td align='center'>{tempDif.toFixed(1)}&#176;C</td>
      </tr>
    );
  });

  return (
    <Wrapper>
      <h1>Iklim</h1>
      <Dropdown>
        <Dropdown.Toggle>{city}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={setCity} active={city === 'Jakarta'}>
            Jakarta
          </Dropdown.Item>
          <Dropdown.Item onClick={setCity} active={city === 'Singapore'}>
            Singapore
          </Dropdown.Item>
          <Dropdown.Item onClick={setCity} active={city === 'Bangkok'}>
            Bangkok
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {isFetching && <Info>Loading...</Info>}
      {isError && <Info>Maaf terjadi kesalahan</Info>}
      {Boolean(data.length) && (
        <Table cellSpacing='0' cellPadding='0'>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th></th>
              <th align='center'>Suhu</th>
              <th align='center'>Perbedaan</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Rata-rata</td>
              <td align='center'>
                {Math.round(averageTemp / data.length)}&#176;C
              </td>
              <td align='center'>
                {(averageTempDif / data.length).toFixed(2)}&#176;C
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </Wrapper>
  );
};

export default Home;

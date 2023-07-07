import { createServer } from 'http';
import fetch from 'node-fetch';

const appHttp = createServer((req, res) => {
  if (req.url === '/asteroids') {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-04&end_date=2023-07-07&api_key=DEMO_KEY')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const asteroids = data.near_earth_objects['2023-07-06'];
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Asteroids</h1>`);
        asteroids.forEach(asteroid => {
          res.write(`<h2>Name: ${asteroid.name}</h2>`);
          res.write(`<p>Diameter: ${asteroid.estimated_diameter.meters.estimated_diameter_max} meters</p>`);
          res.write(`<p>Close Approach Date: ${asteroid.close_approach_data[0].close_approach_date_full}</p>`);
          res.write(`<p>Relative Velocity: ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>`);
          res.write(`<p>Distance from Earth: ${asteroid.close_approach_data[0].miss_distance.kilometers} km</p>`);
          res.write('<hr>');
        });
        res.end();
      });
  };
});

const config = {
  hostname: '127.6.9.10',
  port: 3000
};

appHttp.listen(config, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});

//https://api.nasa.gov/planetary/apod?api_key=MKqimqmj0hGovEQyRD7L52XEwqNOBGrx2PdfKZqE
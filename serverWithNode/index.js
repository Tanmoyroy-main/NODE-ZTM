const http = require('http');

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Sir Issac',
  },
  {
    id: 1,
    name: 'Nikola Tesla',
  },
];
//Try below in console of browser of this page
// fetch('http://localhost:3000/friends', {
//   method: 'POST',
//   body: JSON.stringify({ id: 2, name: 'Tanmoy Roy' }),
// })
//   .then((response) => response.json())
//   .then((friend) => console.log(friend));

const server = http.createServer((req, res) => {
  const items = req.url.split('/');
  // /friends/2 => ['', 'friends', '2']
  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      const friend = data.toString();
      console.log('Request:', friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === 'GET' && items[1] === 'friends') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Issac</li>');
    res.write('<li>What are your thoughts on astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

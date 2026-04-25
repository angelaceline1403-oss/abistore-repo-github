const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Semua route arahkan ke index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('\n✅ SIA Auladi Baktir Ikhwan berjalan!');
  console.log('🌐 Buka browser: http://localhost:' + PORT);
  console.log('\nTekan Ctrl+C untuk menghentikan server\n');
});

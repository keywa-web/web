const fetch = require('node-fetch');

module.exports = async function() {
  try {
    // GANTI DENGAN URL API GOOGLE SHEETS ANDA
    const response = await fetch('https://script.google.com/macros/s/AKfycbz0WLtX9jx7fb4skLSXNcl6NrDfKLGMICtOdNIPuIqvuxjC0sU6O7y_0WbF5cXjuiOs/exec');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengambil data dari Google Sheets:", error);
    return []; // Kembalikan array kosong jika gagal
  }
};
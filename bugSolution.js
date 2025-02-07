Here's the corrected code using the `fetch` API:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Process data
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
}

fetchData();
```
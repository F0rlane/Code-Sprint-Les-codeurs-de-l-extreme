const BASE_URL = "https://opentdb.com/api.php?amount=11";
const TOTAL_CATEGORIES_URL = "https://opentdb.com/api_category.php";
let index = 0;
let score = 0;

// fetches the raw data from the API
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
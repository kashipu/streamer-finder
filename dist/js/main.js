import { allPlatforms } from "./Platform.js";
import { createDataPlatforms } from "./data/platformsData.js";
const createData = () => {
    createDataPlatforms();
};
createData();
// Ver datos en consola
console.log(allPlatforms);

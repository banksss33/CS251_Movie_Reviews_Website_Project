const cloudinary = require("cloudinary").v2;
const axios = require("axios");
const { updateImageLink } = require("../server/app");

cloudinary.config({
  cloud_name: "drn8zqbqe",
  api_key: "665658437384969",
  api_secret: "CqsG6yYKTasDch5Vs5UA2IkhuRs",
});

async function uploadImageToCloudinary(url) {
  try {
    const response = await cloudinary.uploader.upload(url, {
      folder: "MovieImage", // Upload images to the 'MovieLink' folder
    });
    console.log(`Image uploaded: ${response.secure_url}`);
    return response.secure_url;
  } catch (error) {
    console.error(`Failed to upload image: ${error.message}`);
    return null;
  }
}

async function fetchImageUrls() {
  try {
    const response = await axios.get("http://localhost:3001/Moviepage");
    const imageUrls = response.data.map((item) => item);
    return imageUrls;
  } catch (error) {
    console.error(`Error fetching image URLs: ${error.message}`);
    return [];
  }
}

async function main() {
  const imageData = await fetchImageUrls();

  if (imageData.length > 0) {
    for (const data of imageData) {
      const uploadedUrl = await uploadImageToCloudinary(data.ImageLink);

      if (uploadedUrl) {
        await updateImageLink(data.MovieID, uploadedUrl);
      }
    }
  } else {
    console.log("No image URLs to upload.");
  }
}

main();

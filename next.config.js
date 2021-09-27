module.exports = {
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL: "mongodb://localhost/page_with_google_addsense",
    // MONGODB_URL:
    // "mongodb://admin:admin123@167.99.145.171:27017/HomePage?authSource=admin",
    ACCESS_TOKEN_SECRET: "Jhon_Cessar_Page",
    REFRESH_TOKEN_SECRET: "Refresh_token_",
  },
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    // domains: ["images-assets.nasa.gov"],
    domains: ["res.cloudinary.com", "cdn.pixabay.com"],
    path: "/_next/image",
    loader: "default",
  },
  // domains: [], // <--- Aqui se pone los links de las images que se va usar en nextjs
};

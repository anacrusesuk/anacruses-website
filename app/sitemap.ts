export default function sitemap() {
  const baseUrl = 'https://www.anacruses.co.uk'
  
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/sectors`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/sectors/technology`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sectors/construction`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sectors/manufacturing`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sectors/laboratory`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sectors/financial`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/sectors/healthcare`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
  ]
}

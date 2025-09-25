import { MetadataRoute } from 'next'

/**
 * یک آرایهٔ نقشه‌سایت شامل ورودی ریشهٔ وب‌سایت تولید می‌کند.
 *
 * @returns یک `MetadataRoute.Sitemap` که شامل یک ورودی با `url` برابر 'https://www.medogram.ir'، `lastModified` برابر تاریخ فعلی، `changeFrequency` برابر 'daily' و `priority` برابر 1 است.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.medogram.ir'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
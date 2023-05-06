import NewsCard from '@/components/NewsCard'
import { NewsResponse } from '@/models/NewsArticles'

async function getArticle(): Promise<NewsResponse> {
  // Dynamic Data Fetching
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${process.env.COUNTRY}&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function BreakingNews() {
  const data = await getArticle()

  return (
    <main className='container mx-auto'>
      <h1 className='text-5xl my-6'>Breaking News</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.articles.map((article, index) => (
          <div key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </main>
  )
}

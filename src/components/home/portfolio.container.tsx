import PortfolioSection from './portfolio'

async function PortfolioContainer() {
  const res = await fetch(
    'https://api.mpakravan.com/api/collections/portfolio/records?sort=-created',
    {
      next: {
        revalidate: 10,
      },
      cache: 'force-cache',
    },
  )
  const resp = await res.json()

  return <PortfolioSection portfolios={resp.items} />
}

export default PortfolioContainer

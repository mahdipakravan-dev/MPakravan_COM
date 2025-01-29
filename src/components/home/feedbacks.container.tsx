import FeedbacksSection from './feedbacks'

async function FeedbacksContainer() {
  const res = await fetch('https://api.mpakravan.com/api/collections/feedbacks/records', {
    next: {
      revalidate: 10,
    },
    cache: 'force-cache',
  })
  const resp = await res.json()

  return <FeedbacksSection feedbacks={resp.items} />
}

export default FeedbacksContainer

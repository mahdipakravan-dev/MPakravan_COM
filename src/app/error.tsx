'use client'

import BaseLayout from '@/components/base-layout'
import Link from 'next/link'

function NotFound() {
  return (
    <BaseLayout locale={'en'}>
      <div className="w-screen h-screen bg-primary">
        <h1>Errored !</h1>
        <Link href={'/'}>Back To Website</Link>
      </div>
    </BaseLayout>
  )
}

export default NotFound

'use client'

function FeedbackDescription({ description }: { description: string }) {
  return (
    <p
      className=" text-secondary block mt-16 leading-6 overflow-hidden overflow-wrap break-word h-[120px]"
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  )
}

export default FeedbackDescription

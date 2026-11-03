export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      {children}
    </div>
  )
}

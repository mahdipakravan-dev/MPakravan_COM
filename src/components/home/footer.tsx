const FooterSection = ({ t }: { t: Record<string, any> }) => {
  return (
    <footer className="bg-[rgba(0,0,0,.6)] mt-24">
      <div className="container flex flex-col md:flex-row hidden">
        <div className="w-full md:w-3/5 flex flex-col">
          <span className="font-semibold text-lg py-6">{'<MPakravan />'}</span>

          <p className="opacity-80">{t['description']}</p>
        </div>

        <div className="w-full md:w-1/5 flex flex-col">
          <span className="font-semibold text-lg pt-6 pb-4">{t['col2Title']}</span>

          <ul className="opacity-80 leading-9">
            <li>Website Development</li>
            <li>Website Security</li>
            <li>Website Design</li>
            <li>Mentorship</li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 flex flex-col">
          <span className="font-semibold text-lg pt-6 pb-4">{t['col2Title']}</span>

          <ul className="opacity-80 leading-9">
            <li>Website Development</li>
            <li>Website Security</li>
            <li>Website Design</li>
            <li>Mentorship</li>
          </ul>
        </div>
      </div>

      <div className="border border-l-0 border-r-0 border-b-0 mt-4">
        <div className="flex flex-row justify-between gap-2 container opacity-80 pt-6 pb-4">
          <span>{t['copyRight']}</span>
          <span className="text-xs">{t['version']}</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

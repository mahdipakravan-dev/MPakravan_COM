import { LogoEn, LogoFa } from '@/components/logo'
import NavbarContainer from '@/components/shared/navbar.container'
import StarryBackground from '@/components/shared/StarryLayout'
import useLang from '@/hooks/useLang'
import { ChevronDownIcon, ChevronLeft, PenIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
type Props = {
  params: any
}

export default function Page({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const lang = useLang()
  const t = useTranslations()

  return (
    <>
      <StarryBackground clipped={false} rootClassName="h-[160vh]">
        <header className="absolute w-full top-4 md:top-12 z-[4] ">
          <div className="container flex justify-between items-center ">
            {lang === 'en' ? <LogoEn /> : <LogoFa />}

            <NavbarContainer />
          </div>
        </header>
      </StarryBackground>

      <div className="container relative -translate-y-[140vh]">
        <Breadcrumb className="pb-4 px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl">
                <Link href="/">خانه</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronLeft size={14} />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl">
                <Link href="/components">نمونه کار ها</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronLeft size={14} />
            <BreadcrumbItem className="text-xl">
              <BreadcrumbPage>پروژه آیگپ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Image
          src="/images/shallows/shallow-green.png"
          alt="logo"
          width={1500}
          height={1000}
          className="absolute inset animate-shallow z-[-1]"
        />
        <Image
          width={1000}
          height={1000}
          src="/images/movie-preview.png"
          alt="header"
          className="w-full"
        />

        <h1 className="text-3xl font-bold mt-8">پروژه وب آیگپ نسخه ۳</h1>

        <div className="flex mt-8 pb-16">
          <div className="w-1/3 flex justify-center items-start gap-6 flex-col">
            {Array.from({ length: 4 }).map(() => (
              <div className="flex justify-start items-start gap-2">
                <div className="border border-gray-200 rounded-full flex justify-center items-center size-14">
                  <PenIcon />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-lg font-bold">شرکت کیان ایرانیان</span>
                  <span>کارفرما</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-2/3">
            <section
              className="w-full bg-[rgba(110,125,135,0.1)] relative p-4 rounded-md"
              id="feedback"
            >
              <p className="leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

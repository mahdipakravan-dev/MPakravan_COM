'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { LogoFa } from '@/components/logo'
import NavbarContainer from '@/components/shared/navbar.container'
import FooterContainer from '@/components/home/footer.container'

const days = ['سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه', 'یکشنبه', 'دوشنبه']
const habits = ['2 تمرین CSS/HTML', 'استریک زبان', 'اینستا ۳ تا ۵ دقیقه', '1 پادکست حداقل']

export default function WeeklyHabitsChecklist() {
  const [checks, setChecks] = useState(
    days.reduce((acc, day) => {
      acc[day] = habits.reduce((hAcc, habit) => {
        hAcc[habit] = false
        return hAcc
      }, {} as Record<string, boolean>)
      return acc
    }, {} as Record<string, Record<string, boolean>>),
  )

  const toggleHabit = (day: string, habit: string) => {
    setChecks((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [habit]: !prev[day][habit],
      },
    }))
  }

  return (
    <>
      <div className="min-h-screen p-6">
        <header className={clsx('absolute w-full top-4 md:top-10 z-[4] ')}>
          <div className="container flex justify-between items-center ">
            <LogoFa />

            <NavbarContainer />
          </div>
        </header>
        <section className="container">
          <div className="font-bold text-center mb-8 mt-24">
            <h1 className="text-4xl my-4">چک‌لیست عادت هفتگی</h1>
            <h3>تارگت : 1 هفته دوری از اینستا</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day) => (
              <div key={day} className="bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4 text-primary">{day}</h2>
                <ul className="space-y-2 text-[#000]">
                  {habits.map((habit) => (
                    <li
                      key={habit}
                      onClick={() => toggleHabit(day, habit)}
                      className={clsx(
                        'cursor-pointer p-2 rounded transition-colors',
                        checks[day][habit] ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100',
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checks[day][habit]}
                        onChange={() => toggleHabit(day, habit)}
                        className="mx-4 px-4"
                      />
                      {habit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <FooterContainer />
    </>
  )
}

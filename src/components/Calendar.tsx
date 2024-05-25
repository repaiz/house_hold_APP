import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from '@fullcalendar/core/locales/ja'
import '../calender.css';
import { EventContentArg } from '@fullcalendar/core';
import { calculateDailyBalance } from '../utils/financeCalculations';
import { Balance, CalenderContent, Transaction } from '../types';
import { formatCurrency } from '../utils/formatting';
import { DatesSetArg } from '@fullcalendar/core'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'

 interface CalenderProps {
 monthlyTransactions: Transaction[],
 setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>,
 setCurrentDay: React.Dispatch<React.SetStateAction<string>>,
 }

const Calendar = ({monthlyTransactions,setCurrentMonth,setCurrentDay}:CalenderProps) => {
  const events = [
    { title: 'Meeting', start: new Date() }
  ]


  const dailyBalance = calculateDailyBalance(monthlyTransactions);
  console.log(dailyBalance);


  const createCalenderEvents = (dailyBalance: Record<string, Balance>):CalenderContent[] => {
    return Object.keys(dailyBalance).map((date) =>{
      const {income,expense,balance} = dailyBalance[date]
      return{
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance),
      }
    })

  }

  const calenderEvents = createCalenderEvents(dailyBalance)
  console.log(calenderEvents);


  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className='money' id ='event-income' >
          {eventInfo.event.extendedProps.income}
        </div>

        <div className='money' id ='event-expense' >
          {eventInfo.event.extendedProps.expense}
        </div>

        <div className='money' id ='event-balance' >
        {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  const handleDateSet = (datesetInfo: DatesSetArg) => {
    setCurrentMonth(datesetInfo.view.currentStart)
  };

  const handleDateClick = (dateInfo: DateClickArg) => {
    setCurrentDay(dateInfo.dateStr);
    
  }
  return (
    <FullCalendar
    locale={jaLocale}
    plugins={[dayGridPlugin,interactionPlugin]}
    initialView='dayGridMonth'
    events={calenderEvents}
    eventContent={renderEventContent}
    datesSet={handleDateSet}
    dateClick ={handleDateClick}
    />
  )
}

export default Calendar
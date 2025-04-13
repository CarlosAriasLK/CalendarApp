import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, Navbar } from "../"

import { localizer, getMessageES } from '../../helpers';
import { useState } from 'react';

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Carlos'
  }
}];

export const CalendarPage = () => {
  
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const eventStyleGetter = ( event, start, end, isSlected ) => {

    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ padding: '50px', height: 'calc( 100vh - 80px )' }}
        messages={ getMessageES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent,
        }}
        view={view}
        onView={setView}
        date={date}
        onNavigate={setDate}
      />
    </>
  )
}

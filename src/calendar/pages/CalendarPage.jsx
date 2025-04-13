import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from "../"

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
  
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );
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

  const onDoubleClik = (event) => {
    console.log({ doubleClik: event});
  }

  const onSelect = (event) => {
    console.log({ click: event});
  }

  const onViewChange = (event) => {
    localStorage.setItem( 'lastView', event );
    setLastView( event );
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ padding: '50px', height: 'calc( 100vh - 80px )' }}
        messages={ getMessageES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={ onDoubleClik }
        onSelectEvent={ onSelect }
        onView={ onViewChange }



        view={ lastView }
        date={date}
        onNavigate={setDate}
      />
      <CalendarModal />
    </>
  )
}

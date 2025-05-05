import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDeleteNew, Navbar } from "../"

import { localizer, getMessageES } from '../../helpers';
import { useEffect, useState } from 'react';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';



export const CalendarPage = () => {
  
  const { openDateModal } = useUiStore();
  const { user } = useAuthStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );
  const [date, setDate] = useState(new Date());

  const eventStyleGetter = ( event, start, end, isSlected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid ); 

    const style = {
      backgroundColor: isMyEvent ? '#347cf7' : '#465660',
      borderRadius: '4px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  const onDoubleClik = () => {
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent( event );
  }

  const onViewChange = (event) => {
    console.log({ onView: event});
    localStorage.setItem( 'lastView', event );
    setLastView( event );
  }

  useEffect(() => {
    startLoadingEvents();
  }, []);

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

      <FabAddNew />
      <FabDeleteNew />
    </>
  )
}

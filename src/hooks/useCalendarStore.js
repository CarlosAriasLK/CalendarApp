import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent } from '../store/calendar/calendarSlice';


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async( calendarEvent ) => {
        // Llegará al backend

        // Todo bien

        if( calendarEvent.id ) {
            // Actualizando
        } else {
            // Creando
            dispatch( onAddNewEvent({ ...calendarEvent, id: new Date().getTime() }) );
        }
    }




    return {
        // Propiedades
        events,
        activeEvent,

        // Metodos
        setActiveEvent,
        startSavingEvent,
    }
}

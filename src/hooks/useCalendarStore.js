import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import Swal from 'sweetalert2';


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }


    const startSavingEvent = async( calendarEvent ) => {
        try {
            // Actualizando
            if( calendarEvent.id ) {
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent );
                dispatch( onUpdateEvent({ ...calendarEvent, user }) );
                return;
            }
            
            // Creando
            const { data } = await calendarApi.post( '/events', calendarEvent );
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user: user }) );

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar el evento', error.response.data.msg, 'error');    
        }
    
    }

    
    const startDeletingEvent = async() => {
        
        try {
            await calendarApi.delete(`/events/${ activeEvent.id }`);   
            dispatch( onDeleteEvent() );
            Swal.fire('Evento eliminado correctamente', '', 'success');
   
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar el evento', error.response.data.msg, 'error');
        }
    }


    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events');
            const events = convertEventsToDateEvents( data.eventos );
            dispatch( onLoadEvents( events ) );

        } catch (error) {
            console.log('Error Cargando Eventos');
            console.log(error)
        }
    }


    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Metodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}

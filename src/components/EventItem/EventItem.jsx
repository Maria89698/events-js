export const EventItem = ({name, location,
    iconLocation: CiLocationOn, iconTime: CiAlarmOn,
    speaker, type, time,
    iconCalendar: CiCalendarDate, iconSpeaker: FaPerson}) => {
    return(
        <li>
            <h2>{name}</h2>
            <p><CiLocationOn/> {location}</p>
            <p><FaPerson/> {speaker}</p>
            <p><CiCalendarDate/> {type}</p>
            <p><CiAlarmOn/> time</p>
        </li>
    ) 
}

const getTime = (start, end) => {
    const dateStart = new Date(start);
    const dateEnd = new Date(end);
    const startTime = dateStart.getHours() + dateStart.getMinutes() / 60;
    const endTime = dateEnd.getHours() + dateEnd.getMinutes() / 60;
    return endTime - startTime;
}

const getDate = (start) => {
    const date = new Date(start);
    return date.toLocaleString();
}
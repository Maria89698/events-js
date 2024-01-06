import { EventItem } from "../EventItem/EventItem"
import { CiAlarmOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export const EventList = ({events}) => {
    return(
        <ul>
            {events.map((event) => {
                return <EventItem
                key={event.name}
                name = {event.name}

                iconLocation = {CiLocationOn}
                iconSpeaker = {FaPerson}
                iconCalendar = {CiCalendarDate}
                iconTime = {CiAlarmOn}

                location = {event.location}
                speaker = {event.speaker}
                type = {event.type}
                time = {event.time}/>
            })}
        </ul>
    )
}
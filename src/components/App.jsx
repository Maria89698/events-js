/*
  Container
  Title
  EventList - event: array
  EventItem - name: string
              location: string
              speaker: string
              type: string ['free', 'vip', 'paid']
              time: object
  Container
*/
import { Container } from "./Container/Container";
import { EventList } from "./EventList/EventList";
import data from "../upcoming-events.json";

export const App = () => {
  return (
    <Container>
      <EventList events={data}/>
    </Container>
  )
}
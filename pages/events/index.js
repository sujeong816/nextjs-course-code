import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from 'next/router';

/** 이벤트들 나열하는 파일 */
/** 단일 이벤트에 쓰일 중첩된 라우트에 필요하기 때문에 폴더 - index.js 형태 사용 */
function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;

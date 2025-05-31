import React from 'react';
import styles from './Events.module.css';

// Import event images
import coffeeTastingImage from '../../images/EventsImages/CoffeeTastingWorkshop.png';
import latteArtImage from '../../images/EventsImages/LatteArtCompetition.png';
import brewingWorkshopImage from '../../images/EventsImages/CoffeeBrewingWorkshop.png';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: "coffee-tasting",
    title: "Coffee Tasting Workshop",
    date: "June 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Downtown Store",
    description: "Join our master baristas for an evening exploring the subtle flavors of our premium coffee selections.",
    imageUrl: coffeeTastingImage
  },
  {
    id: "latte-art",
    title: "Latte Art Competition",
    date: "July 10, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Westside Store",
    description: "Watch local baristas compete or enter yourself to show off your skills creating beautiful latte art.",
    imageUrl: latteArtImage
  },
  {
    id: "brewing-workshop",
    title: "Coffee Brewing Workshop",
    date: "August 20, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Eastside Store",
    description: "Learn the art of brewing coffee at home with our expert instructors. Discover different brewing methods and get hands-on experience with our favorite techniques.",
    imageUrl: brewingWorkshopImage
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventImageContainer}>
        <img src={event.imageUrl} alt={event.title} className={styles.eventImage} />
      </div>

      <div className={styles.eventDetails}>
        <h2 className={styles.eventTitle}>{event.title}</h2>
        <div className={styles.eventMetadata}>
          <div className={styles.metadataItem}>
            <span className={styles.metadataLabel}>Date:</span> {event.date}
          </div>
          <div className={styles.metadataItem}>
            <span className={styles.metadataLabel}>Time:</span> {event.time}
          </div>
          <div className={styles.metadataItem}>
            <span className={styles.metadataLabel}>Location:</span> {event.location}
          </div>
        </div>
        <p className={styles.eventDescription}>{event.description}</p>
        <button className={styles.registerButton}>Register</button>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Upcoming Events</h1>
      <div className={styles.eventsGrid}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

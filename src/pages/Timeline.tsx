
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

type TimelineEvent = {
  title: string;
  time: string;
  date: string;
  description: string;
  type: 'workshop' | 'activity' | 'deadline' | 'main';
};

const events: TimelineEvent[] = [
  {
    title: 'Kickoff & Opening Ceremony',
    time: '5:00 PM',
    date: 'August 30, 2024',
    description: 'Welcome to Recess Hacks 4.0! Join us for the official opening ceremony where we\'ll introduce the theme, sponsors, and prizes.',
    type: 'main',
  },
  {
    title: 'Hacking Begins',
    time: '6:00 PM',
    date: 'August 30, 2024',
    description: 'Start building your projects! The 48-hour countdown begins now.',
    type: 'main',
  },
  {
    title: 'Introduction to Web Development',
    time: '7:00 PM',
    date: 'August 30, 2024',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first web application.',
    type: 'workshop',
  },
  {
    title: 'Team Formation',
    time: '8:00 PM',
    date: 'August 30, 2024',
    description: 'Still looking for teammates? Join our team formation activity to find the perfect match!',
    type: 'activity',
  },
  {
    title: 'Machine Learning Workshop',
    time: '10:00 AM',
    date: 'August 31, 2024',
    description: 'Discover the fundamentals of machine learning and how to implement AI in your projects.',
    type: 'workshop',
  },
  {
    title: 'Mentor Office Hours',
    time: '2:00 PM',
    date: 'August 31, 2024',
    description: 'Get one-on-one help from industry experts and mentors.',
    type: 'activity',
  },
  {
    title: 'Mobile App Development',
    time: '4:00 PM',
    date: 'August 31, 2024',
    description: 'Learn how to build mobile applications using React Native.',
    type: 'workshop',
  },
  {
    title: 'Game Night',
    time: '8:00 PM',
    date: 'August 31, 2024',
    description: 'Take a break and join us for some fun online games!',
    type: 'activity',
  },
  {
    title: 'Project Submissions Due',
    time: '3:00 PM',
    date: 'September 1, 2024',
    description: 'Submit your projects on Devpost before the deadline!',
    type: 'deadline',
  },
  {
    title: 'Project Judging',
    time: '3:30 PM',
    date: 'September 1, 2024',
    description: 'Judges will review all submitted projects.',
    type: 'main',
  },
  {
    title: 'Closing Ceremony & Awards',
    time: '5:00 PM',
    date: 'September 1, 2024',
    description: 'Join us for the closing ceremony where we\'ll announce the winners and celebrate everyone\'s achievements!',
    type: 'main',
  },
];

const Timeline = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  const typeColors = {
    main: 'bg-hackathon-orange text-white',
    workshop: 'bg-hackathon-yellow text-black',
    activity: 'bg-orange-300 text-orange-900',
    deadline: 'bg-red-500 text-white',
  };

  const typeBorderColors = {
    main: 'border-hackathon-orange',
    workshop: 'border-hackathon-yellow',
    activity: 'border-orange-300',
    deadline: 'border-red-500',
  };

  return (
    <div className="min-h-screen flex flex-col bg-orange-100">
      <Navbar />
        <div>
          <section id="timeline" className="py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Timeline</h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Join us for an action-packed weekend filled with workshops, activities, and opportunities to connect with fellow hackers!
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <button 
                    onClick={() => setFilter('all')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      filter === 'all' 
                        ? "bg-hackathon-orange text-white" 
                        : "bg-muted text-foreground/70 hover:bg-muted/80"
                    )}
                  >
                    All Events
                  </button>
                  <button 
                    onClick={() => setFilter('main')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      filter === 'main' 
                        ? "bg-hackathon-orange text-white" 
                        : "bg-muted text-foreground/70 hover:bg-muted/80"
                    )}
                  >
                    Main Events
                  </button>
                  <button 
                    onClick={() => setFilter('workshop')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      filter === 'workshop' 
                        ? "bg-hackathon-yellow text-black" 
                        : "bg-muted text-foreground/70 hover:bg-muted/80"
                    )}
                  >
                    Workshops
                  </button>
                  <button 
                    onClick={() => setFilter('activity')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      filter === 'activity' 
                        ? "bg-orange-300 text-orange-900" 
                        : "bg-muted text-foreground/70 hover:bg-muted/80"
                    )}
                  >
                    Activities
                  </button>
                  <button 
                    onClick={() => setFilter('deadline')}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      filter === 'deadline' 
                        ? "bg-red-500 text-white" 
                        : "bg-muted text-foreground/70 hover:bg-muted/80"
                    )}
                  >
                    Deadlines
                  </button>
                </div>
              </div>

              <div className="max-w-4xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-500 transform md:-translate-x-0.5"></div>
                
                <div className="space-y-12">
                  {filteredEvents.map((event, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className={cn(
                        "absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 bg-white transform -translate-y-1/2 md:-translate-x-1/2 z-10",
                        typeBorderColors[event.type]
                      )}></div>
                      
                      {/* Content card */}
                      <div className={cn(
                        "ml-12 md:ml-0 md:w-5/12",
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                      )}>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                          <div className="flex flex-wrap justify-between items-center mb-3">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                            <span className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium mt-1",
                              typeColors[event.type]
                            )}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                          </div>
                          <div className="text-sm text-foreground/60 mb-2">
                            {event.time} · {event.date}
                          </div>
                          <p className="text-sm text-foreground/80">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      <Footer />
    </div>
  );
};

export default Timeline;
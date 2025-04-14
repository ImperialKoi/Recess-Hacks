
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who can participate in Recess Hacks?",
    answer: "Recess Hacks is designed for high school students from around the world. If you're currently enrolled in high school or equivalent secondary education, you're eligible to participate regardless of your programming experience or skill level."
  },
  {
    question: "Do I need to have coding experience?",
    answer: "Not at all! Recess Hacks welcomes participants of all skill levels, from complete beginners to experienced programmers. We'll have workshops and mentors available to help you learn and develop your skills during the event."
  },
  {
    question: "How much does it cost to participate?",
    answer: "Recess Hacks is completely free to participate in! There are no registration fees or hidden costs."
  },
  {
    question: "What kind of projects can I build?",
    answer: "You can build any kind of software project that interests you - web applications, mobile apps, games, AI/ML projects, hardware hacks, and more. We'll announce specific themes and challenge tracks closer to the event date."
  },
  {
    question: "How do teams work?",
    answer: "You can participate solo or form a team of up to 4 members. We encourage team participation as it enhances the learning experience and allows you to build more complex projects. Don't worry if you don't have a team - we'll have team formation activities at the beginning of the hackathon."
  },
  {
    question: "What platform will the hackathon be hosted on?",
    answer: "The hackathon will be hosted virtually across multiple platforms. Discord will be our main communication hub, Zoom for workshops and ceremonies, Devpost for project submissions, and Instagram for updates and highlights."
  },
  {
    question: "Will there be prizes?",
    answer: "Yes! We'll have exciting prizes for winning teams in various categories. Prize details will be announced closer to the event date."
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on criteria such as innovation, technical complexity, design, functionality, and presentation. Our panel of judges will include industry professionals and educators in the tech field."
  },
  {
    question: "I have a question that's not answered here!",
    answer: "Feel free to reach out to us at team@recesshacks.com or message us on Instagram @recesshacks. We're happy to help!"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/80">
            Have questions about Recess Hacks? We've got answers! If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 px-6"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

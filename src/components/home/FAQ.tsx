import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/ui/scroll-reveal';

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
    question: "Will this hackathon be hosted virtually?",
    answer: "No, this year our hackathon will be hosted entirely in person."
  },
  {
    question: "I have a question that's not answered here!",
    answer: "Feel free to reach out to us at team@recesshacks.com or message us on Instagram @recesshacks. We're happy to help!"
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <ScrollReveal delay={50}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-foreground/80">
              Have questions about Recess Hacks? We've got answers! If you don't find what you're looking for, feel free to contact us.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {faqItems.map((item, index) => (
              <ScrollReveal delay={(index + 1) * 150} key={index} className="w-full md:w-[calc(50%-0.5rem)] transition-all duration-500 ease-in-out hover:-translate-y-2 relative">
                <Accordion type="single" collapsible className="h-full">
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-100 px-6 relative before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-500 before:opacity-0 hover:before:opacity-100 before:bg-blue-800/10 before:-z-10 before:translate-y-4 hover:before:translate-y-2"
                  >
                    <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
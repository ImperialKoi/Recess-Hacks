import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const LocationMap = () => {
  return (
    <section id='location'>
        <div className="w-full rounded-xl overflow-hidden text-black bg-transparent p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <ScrollReveal delay={900}>
                    <div className="order-2 md:order-1">
                        <Card className="overflow-hidden border-sm shadow-xl">
                            <CardContent className="p-0">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.704498383707!2d-80.54399518452214!3d43.47229767912818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f3c9ffb8c7%3A0xee2bdca958266095!2sEngineering%207%20(E7)%2C%20University%20of%20Waterloo!5e0!3m2!1sen!2sca!4v1713819329921!5m2!1sen!2sca" 
                                width="100%" 
                                height="400" 
                                style={{ border: 0 }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hackathon Location Map"
                                className="w-full"
                            ></iframe>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollReveal>
            
                <div className="order-1 md:order-2">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center space-x-4">
                            <ScrollReveal delay={100}>
                                <h2 className="text-4xl md:text-5xl font-bold text-black font-mono">
                                    Join Us
                                </h2>
                            </ScrollReveal>
                        </div>
                    </div>
                    
                    <ScrollReveal delay={300}>
                        <h3 className="text-2xl font-bold mb-4 text-center">
                            Augest Date
                        </h3>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={500}>
                        <div className="bg-purple-300/30 p-4 ml-4 rounded-lg mb-4 flex items-start gap-3">
                            <MapPin className="text-black mt-1 flex-shrink-0" />
                            <p className="text-lg">
                            <span className="font-bold">Engineering 7 (E7)</span><br />
                            University of Waterloo
                            200 University Ave W | Waterloo, ON N2L 3G1
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={700}>
                        <p className="text-black/90 leading-relaxed pl-4">
                            The University of Waterloo continues to support RecessHacks, building the next generation of innovators, 
                            entrepreneurs, and creators. Step into Canada's largest engineering school — a pipeline for
                            engineering talent for the world's leading companies.
                            Ranked among the top 50 engineering schools globally, the school's reputation for excellence is built
                            on the foundation of co-op education and a bold history of innovation.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LocationMap;
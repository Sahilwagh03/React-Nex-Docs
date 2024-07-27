import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/Accordion/Accordion';

const Faq_2 = () => {
    return (
        <div className="faq-section-2 p-0 md:p-6 rounded-lg shadow-md">
            <div className='flex flex-col gap-2 items-center'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center dark:text-white">FAQ</h2>
                <p className="text-center text-base md:text-lg lg:text-lg mb-6 max-w-[500px] text-gray-700 dark:text-gray-300">
                    Start with our free plan and switch to premium as you grow. Best value for individuals and small businesses.
                </p>
            </div>
            <Accordion type="single">
                <AccordionItem>
                    <AccordionTrigger value="q1">
                        How do I create an account?
                    </AccordionTrigger>
                    <AccordionContent value="q1">
                        <p>
                            Creating an account is simple. Click on the "Sign Up" button on the top right corner of the homepage, fill in the required details, and submit the form.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger value="q2">
                        What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent value="q2">
                        <p>
                            We accept various payment methods including credit/debit cards, PayPal, and Apple Pay. More options may be available depending on your location.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger value="q3">
                        How do I track my order status?
                    </AccordionTrigger>
                    <AccordionContent value="q3">
                        <p>
                            After placing an order, you will receive a confirmation email with a tracking number. You can use this number to track your order on our website or the carrier's site.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger value="q4">
                        How can I contact customer service?
                    </AccordionTrigger>
                    <AccordionContent value="q4">
                        <p>
                            You can contact our customer service via email at support@example.com or call us at (123) 456-7890. Our support team is available 24/7.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Faq_2;

export const Faq1 = `
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/Accordion/Accordion';

const Faq_1 = () => {
  return (
    <div className="faq-section p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
      <Accordion type="single">
        <AccordionItem>
          <AccordionTrigger value="q1">
            What is your return policy?
          </AccordionTrigger>
          <AccordionContent value="q1">
            <p>
              Our return policy allows returns within 30 days of purchase. Items must be in original condition and packaging.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger value="q2">
            How long does shipping take?
          </AccordionTrigger>
          <AccordionContent value="q2">
            <p>
              Shipping usually takes 5-7 business days within the continental US. International shipping may vary.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger value="q3">
            Do you offer customer support?
          </AccordionTrigger>
          <AccordionContent value="q3">
            <p>
              Yes, we offer 24/7 customer support through our support portal. You can also reach us via email or phone during business hours.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger value="q4">
            Can I track my order?
          </AccordionTrigger>
          <AccordionContent value="q4">
            <p>
              Yes, once your order is shipped, you will receive a tracking number via email.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq_1;
`


export const Faq2 = ` 
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
`
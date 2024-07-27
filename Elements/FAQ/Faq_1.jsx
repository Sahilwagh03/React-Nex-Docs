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

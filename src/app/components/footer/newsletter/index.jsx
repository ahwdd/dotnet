import React from "react";
import AnimatedSection from "./animated-section";
import NewsletterForm from "./form";

function NewsLetter() {
  return (
    <div className="w-full  flex items-center xs:justify-between justify-center relative py-6 flex-wrap gap-[10%] gap-y-4">
      <div className="space-y-1">
        <p className="text-small">واحصل على خصم 5%</p>
        <p className="text-large font-bold">اشترك في النشرة الإخبارية</p>
      </div>
      <NewsletterForm />
      <div className="lg:w-1/3 w-1/2 absolute h-full top-0 lg:-right-[15vw] right-0">
        <AnimatedSection />
      </div>
    </div>
  );
}

export default NewsLetter;

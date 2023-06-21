import React from "react";
import pricing from "../../../dummy/pricing";
import CardPricing from "../../atoms/CardPricing";

export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricing.map((pricingValue) => (
            <CardPricing
              title={pricingValue.title}
              desc={pricingValue.desc}
              price={pricingValue.price}
              item1={pricingValue.item1}
              item2={pricingValue.item2}
              item3={pricingValue.item3}
              item4={pricingValue.item4}
              item5={pricingValue.item5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

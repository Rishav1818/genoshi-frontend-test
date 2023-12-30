import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Basic Plan',
      cost: '$4/month/user',
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      name: 'Pro Plan',
      cost: '$8/month/user',
      features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
    },
    {
      name: 'Enterprise Plan',
      cost: 'Contact for price',
      features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto mt-8 bg-transparent  p-8 rounded-lg text-gray-900 dark:text-white ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`border p-6 rounded-lg ${selectedPlan === plan ? 'border-blue-500' : 'border-gray-700'}`}>
            <input
              type="radio"
              id={`plan-${index}`}
              name="pricingPlan"
              value={plan.name}
              checked={selectedPlan === plan}
              onChange={() => handleSelectPlan(plan)}
              className={`${selectedPlan === plan ? 'text-black' : ''}`}
            />
            <label
              htmlFor={`plan-${index}`}
              className={`ml-2 text-2xl font-bold ${selectedPlan === plan ? 'text-blue-500' : ''}`}
            >
              {plan.name}
            </label>
            <p className="text-gray-700 mb-4">{plan.cost}</p>
            <ul className="list-disc ml-6 mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-4 border rounded-lg border-gray-700">
          <h2 className="text-xl font-bold mb-4">Selected Plan: {selectedPlan.name}</h2>
          <p className="text-gray-700 mb-4">{selectedPlan.cost}</p>
          <ul className="list-disc ml-6 mb-4">
            {selectedPlan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pricing;

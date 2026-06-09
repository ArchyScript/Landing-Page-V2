export type LegalSubsection = {
  title: string;
  paragraphs: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
};

export const termsSections: LegalSection[] = [
  {
    title: 'Agreement to Terms',
    paragraphs: [
      'Welcome to Greep. These Terms and Conditions govern your use of the Greep website at https://greep.io and all related services. By accessing or using the services, you agree to be bound by these Terms. If you do not agree, you must not access or use the services.',
      'Greep Payments Inc. is a company registered in the State of Delaware. You may contact us by phone at (855) 234-5020, by email at info@greep.io, or by post at Greep Payments Inc., 8 The Grn Ste B, Dover, DE 19901.',
      'These Terms constitute the agreement between you and Greep concerning the services.',
    ],
  },
  {
    title: '1. Use of Services',
    paragraphs: [
      'Subject to these Terms, Greep grants you a limited, non-exclusive, non-transferable, and revocable licence to access and use the services for lawful personal or business purposes.',
    ],
    bullets: [
      'Do not use the services for any illegal or unauthorised purpose.',
      'Do not modify, adapt, hack, or falsely imply that another service is associated with Greep.',
      'Do not reproduce, duplicate, copy, sell, resell, or exploit any part of the services without written permission.',
      'Do not use robots, spiders, or other automated devices to access the services.',
      'Do not interfere with the services, servers, or connected networks.',
      'Do not attempt to bypass security measures implemented by Greep.',
    ],
  },
  {
    title: '2. Account Registration',
    paragraphs: [
      'Some features require an account. You agree to provide accurate, current, and complete information during registration and to keep that information updated. You are responsible for safeguarding your credentials and for activity performed through your account.',
    ],
  },
  {
    title: '3. Intellectual Property',
    paragraphs: [
      'The services, their original content, features, and functionality belong to Greep and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. You may not modify, reproduce, distribute, create derivative works from, publicly display, or otherwise exploit that material without written permission.',
      "Greep's name, logo, product names, service names, designs, and slogans are trademarks of Greep or its affiliates and licensors. You may not use those marks without prior written permission.",
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    title: 'Introduction',
    paragraphs: [
      'Thank you for choosing our products and services. This Privacy Policy applies to Greep Ltd and its affiliated entities, collectively referred to as Greep, we, us, or our.',
      'By accessing or using our products or services, you acknowledge that you have read and agreed to the practices described in this policy and that you have obtained any consent required from people whose personal data you provide to us.',
      'We may update this policy on our website, applications, or through direct communication. Continued use after an update signifies acceptance of the revised policy.',
    ],
  },
  {
    title: 'What Personal Data We Collect',
    paragraphs: [
      'We may collect, process, and retain information that identifies or can be linked to you and relevant people connected with your account, including beneficial owners, directors, officers, authorised signatories, employees, representatives, and guarantors.',
      'The information may be collected through onboarding, your use of our services, events, cookies, and other technologies used on our platforms.',
    ],
    bullets: [
      'Full legal name, previous names, and translations where applicable.',
      'Identification type and number, gender, date and place of birth, and nationality.',
      'Residential address and country or state of residence.',
      'Employment, occupation, business, source of wealth, income, and source of funds.',
      'Account purpose, expected activity, transaction history, and usage patterns.',
      'Contact details, bank account details, blockchain wallet addresses, and geolocation data.',
      'Credit information and any additional documentation required for compliance.',
    ],
  },
  {
    title: 'How We Use Your Personal Data',
    bullets: [
      'To assess, open, maintain, and manage your access to our products and services.',
      'To deliver, operate, secure, improve, and personalise our services.',
      'To process payments and transactions and provide receipts, invoices, and statements.',
      'To monitor use, investigate issues, prevent fraud, and resolve technical problems.',
      'To conduct risk, credit, anti-money laundering, compliance, and audit reviews.',
      'To communicate service updates, offers, events, surveys, and research where permitted.',
      'To comply with legal, tax, regulatory, and law-enforcement obligations.',
      'To protect and enforce the rights, property, and interests of Greep and its users.',
    ],
  },
  {
    title: 'How We Share Personal Data',
    paragraphs: [
      'We share personal data only where needed to operate our services, satisfy legal obligations, or carry out the purposes described in this policy.',
    ],
    bullets: [
      'Service providers supporting identity verification, blockchain analytics, banking, card networks, payments, hosting, technology, communications, and data processing.',
      'Greep affiliates and personnel subject to confidentiality obligations.',
      'Professional advisers, auditors, marketing partners, and authorised representatives.',
      'Regulators, tax authorities, courts, law-enforcement agencies, and other parties where disclosure is legally required.',
      'A proposed or completed purchaser, assignee, or transferee of Greep or its business.',
      'Aggregated or anonymised information that does not directly identify you.',
    ],
  },
  {
    title: 'International and Cross-Border Transfers',
    paragraphs: [
      'Your personal data may be transferred to, stored in, or processed in countries outside your location, including through third-party cloud infrastructure. Those countries may apply different data protection laws.',
      'We take reasonable steps to ensure transferred data is handled securely and in accordance with this policy, applicable United States privacy law, and applicable Nigerian data protection requirements.',
    ],
  },
  {
    title: 'Data Retention',
    paragraphs: [
      'We retain personal data only for as long as reasonably necessary for the purposes described in this policy and to satisfy legal, regulatory, accounting, and compliance requirements.',
    ],
  },
  {
    title: 'Marketing Communications and Cookies',
    paragraphs: [
      'We send marketing communications only where permitted or where you have provided consent. You can opt out by emailing support@greep.io with the subject MARKETING OPT OUT. Essential security, account, and legal messages cannot be disabled.',
      'We may use cookies to improve your experience, understand service usage, and detect security risks. You can adjust cookie settings in your browser, although disabling cookies may affect some service features.',
    ],
  },
  {
    title: 'Information Security',
    paragraphs: [
      'We use measures including encryption, two-factor authentication, access controls, and periodic security reviews to protect personal data. No internet transmission or electronic storage system can be guaranteed to be completely secure.',
    ],
  },
  {
    title: 'Third-Party Sites and Services',
    paragraphs: [
      'Our services may link to third-party websites or products. Their privacy practices are governed by their own policies, and Greep is not responsible for their content or data handling.',
    ],
  },
  {
    title: 'Children and Minors',
    paragraphs: [
      'We do not knowingly collect personal data from children or minors as defined by applicable law. If we learn that such information has been collected, we will take appropriate steps to remove or restrict it.',
    ],
  },
  {
    title: 'User Interactions',
    paragraphs: [
      'You are responsible for your interactions with other users. Greep may monitor those interactions where permitted, but is not obligated to do so.',
    ],
  },
  {
    title: 'Your Privacy Rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access, correct, delete, restrict, object to, or receive a portable copy of your personal data, and to withdraw consent where processing relies on consent.',
      'Under applicable Nigerian data protection law, you may request access, correction, portability, restriction, or objection and may withdraw consent. Residents of California and other applicable United States states may also have rights concerning sensitive data and may appoint an authorised agent to submit a request.',
    ],
  },
  {
    title: 'Contact Us About Privacy',
    paragraphs: [
      'For privacy questions or requests to access, correct, or delete personal data, contact support@greep.io or Divine@greep.io. We may verify your identity before completing a request and may retain information where the law requires it.',
      'If translated versions of this policy conflict, the English version prevails.',
    ],
  },
];

export const savingsDisclosureSections: LegalSection[] = [
  {
    title: '1. What the Savings Feature Is',
    paragraphs: [
      'The Savings Feature allows you to earn yield on your funds by deploying them into decentralised lending pools on the Stellar blockchain. Your funds are deployed directly from your own wallet address. Greep Pay facilitates this on your behalf through third-party blockchain infrastructure. At no point does Greep Pay take possession of your funds.',
      'The Savings Feature is not a bank deposit product and is not offered by a licensed bank. Funds held through this feature are not covered by any government deposit protection scheme, including the FDIC in the United States or any equivalent body elsewhere.',
    ],
  },
  {
    title: '2. How Yield Works',
    paragraphs: [
      'When you use the Savings Feature, your funds are put to work earning yield. The yield you earn comes from interest paid by borrowers in decentralised lending pools. Because borrower demand and market conditions change continuously, the rate of yield you earn will also change over time.',
      'Greep Pay does not set or guarantee a fixed yield rate. Rather than showing you a percentage that may not reflect what you actually earn, we show you your real earned balance in the app at all times. What you see is what you have earned after all applicable fees have been deducted. There are no hidden deductions after that figure.',
      'Yield may be higher at some times and lower at others. In unusual market conditions it could be very low. You should use the Savings Feature with that in mind.',
    ],
  },
  {
    title: '3. Your Savings Products',
    subsections: [
      {
        title: '3.1 Vault (Locked Savings)',
        paragraphs: [
          'You choose a date to lock your savings until. Your funds earn yield for that entire period. If you need to withdraw before your chosen date, you can do so. An early withdrawal fee will apply and will be shown clearly in the app before you confirm.',
        ],
      },
      {
        title: '3.2 Goal (Target Savings)',
        paragraphs: [
          'You set a savings target. Your funds earn yield as you save toward it. You can withdraw at any time without penalty. Any yield earned up to the point of withdrawal is credited to your balance.',
        ],
      },
      {
        title: '3.3 Flex (Flexible Savings)',
        paragraphs: [
          'Deposit and withdraw whenever you like, with no lock-up and no withdrawal fees. Withdrawals are processed as quickly as possible.',
        ],
      },
      {
        title: '3.4 Auto-Save',
        paragraphs: [
          'Auto-Save is optional and can be activated inside any savings product. You can round up each transaction to the nearest dollar, save a set percentage of each transaction, or use both. Auto-Save can be turned on or off at any time, and saved amounts earn yield in the same way as your other savings.',
        ],
      },
    ],
  },
  {
    title: '4. Technology and Product Risk',
    paragraphs: [
      'Your funds interact with automated smart contracts on the Stellar blockchain. These contracts operate independently and cannot be modified once deployed. Greep Pay does not control them.',
      'The underlying protocols have been independently reviewed by third-party security firms. Even so, no technology is completely free of risk. A technical failure or exploit could affect some or all funds in an impacted pool. Greep Pay would work promptly to protect your interests but cannot guarantee full recovery.',
      'External price feeds and third-party infrastructure providers are also required for the feature to operate. If a provider experiences downtime or ceases operations, Greep Pay will take reasonable steps within its control to redirect or recover funds and communicate with you.',
      'These scenarios are not common. Under normal operating conditions, your full saved balance is available for withdrawal along with yield earned to date.',
    ],
  },
  {
    title: "5. Your Funds Are Separate From Greep Pay's",
    paragraphs: [
      "Your savings are held separately from Greep Payments Inc.'s operational funds. Greep Pay does not use your savings for any business purpose. Funds are deployed from your own wallet address into yield-generating infrastructure on your behalf and are not pooled into a Greep Pay-controlled account.",
    ],
  },
  {
    title: '6. Who Can Use This Feature',
    paragraphs: ['By activating the Savings Feature, you confirm that:'],
    bullets: [
      'You are not a United States person, including a US citizen, permanent resident, tax resident, or entity organised under US law.',
      'You are not resident in Canada, the United Kingdom, a European Union member state, Australia, or Singapore.',
      'Using the feature is lawful in your country of residence, and you are responsible for confirming this.',
      'You are at least 18 years old.',
      "You have completed Greep Pay's full identity verification.",
    ],
  },
  {
    title: '7. Taxes',
    paragraphs: [
      'Yield may be considered taxable income in your country. Greep Pay does not provide tax advice, calculate your tax, or file anything on your behalf. You are responsible for understanding and meeting your tax obligations.',
    ],
  },
  {
    title: '8. Not Financial Advice',
    paragraphs: [
      'Nothing Greep Pay communicates in this document, in the app, or elsewhere is financial or investment advice. Decisions about how much to save, for how long, and which product to use are entirely yours.',
    ],
  },
  {
    title: '9. Liability',
    paragraphs: ['To the extent permitted by law, Greep Payments Inc. is not liable for losses resulting from:'],
    bullets: [
      'Technical failures in blockchain infrastructure or third-party protocols.',
      'Changes in yield rates caused by market conditions.',
      'Withdrawal delays caused by the Stellar network.',
      'Tax obligations arising from your use of the feature.',
      'Use of the feature from a jurisdiction where it is unavailable.',
    ],
  },
  {
    title: '10. Changes to These Terms',
    paragraphs: [
      'Greep Pay may update this Agreement from time to time. Material changes will be communicated through the app. Continued use after a change takes effect means you accept the updated terms. If you do not accept a change, withdraw your funds and discontinue use before it takes effect.',
    ],
  },
  {
    title: '11. Governing Law',
    paragraphs: [
      'This Agreement is governed by the laws of the State of Delaware, United States of America, except where mandatory laws in your country of residence apply.',
    ],
  },
];

export const consentItems = [
  'You have read this Agreement in full.',
  'You understand the Savings Feature is not a bank deposit and is not government-insured.',
  'You understand yield is variable and the app displays your actual earned balance after fees.',
  'You understand technology risk exists and recovery cannot be guaranteed after a protocol-level failure.',
  'You are not a US person and are not resident in a restricted jurisdiction.',
  'You understand that your tax obligations are your responsibility.',
  'You are at least 18 years old and accept these terms freely.',
];

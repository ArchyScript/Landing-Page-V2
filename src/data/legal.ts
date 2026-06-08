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

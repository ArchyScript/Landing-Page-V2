export type NavLink = {
  label: string;
  href: string;
};

export type Audience = 'individual' | 'merchant';

export type Feature = {
  title: string;
  descriptions: string[];
  imageSrc: string;
  imageAlt: string;
};

export type Step = {
  title: string;
  isBullet?: boolean;
  descriptions?: string[];
  extraText?: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
};

export type Testimonial = {
  quote: string;
  text: string;
  author: string;
  rating: number;
};

export type UseCase = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
};

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Cards', href: '#cards' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export const individualFeatures: Feature[] = [
  {
    title: 'Get Your Virtual Card',
    descriptions: [
      'Get a Visa or Mastercard and top it up with whatever you have.',
      'Use local fiat, stablecoins, or peer-to-peer transfers.',
    ],
    imageSrc: '/images/feat/virtual-card.webp',
    imageAlt: 'GreepPay virtual card stack',
  },
  {
    title: 'Shop Across Borders',
    descriptions: [
      'Find services or products you require as a user, and directly pay from the app.',
    ],
    imageSrc: '/images/feat/shop-explore.webp',
    imageAlt: 'GreepPay shopping and explore app screen',
  },
  {
    title: 'Get A Virtual Account',
    descriptions: [
      'Hold a USD, EUR, or GBP virtual account in your name. Receive money without opening a traditional bank account.',
    ],
    imageSrc: '/images/feat/virtual-account.webp',
    imageAlt: 'GreepPay virtual account app screen',
  },
  {
    title: 'Get Yields On Your Savings',
    descriptions: [
      "Track your savings, set goals, and build better financial habits with Greep Pay's smart savings tools.",
    ],
    imageSrc: '/images/feat/goal-details.webp',
    imageAlt: 'GreepPay savings goal app screen',
  },
];

export const merchantFeatures: Feature[] = [
  {
    title: 'List your business on the market place',
    descriptions: [
      'Showcase your products or services on our in-app marketplace and start selling to a customer base actively looking for you.',
    ],
    imageSrc: '/images/feat/business-marketplace.webp',
    imageAlt: 'GreepPay merchant payment screen',
  },
  {
    title: 'Accept payments in any currency',
    descriptions: [
      'Take payment in Naira, Cedi, Rand, Shilling, USDC, USDT, and more.',
    ],
    imageSrc: '/images/feat/payment-currency.webp',
    imageAlt: 'GreepPay merchant market screen',
  },
  {
    title: 'Get a business virtual account',
    descriptions: [
      'Receive payments from clients and partners worldwide with a USD, EUR, or GBP account in your business name.',
    ],
    imageSrc: '/images/feat/business-virtual-account.webp',
    imageAlt: 'GreepPay merchant virtual cards',
  },
  {
    title: 'Instant settlements in your preferred currency',
    descriptions: [
      'Settle your earnings in USD, EUR, GBP, or your local currency, instantly. No more waiting days for cross-border transfers to clear.',
    ],
    imageSrc: '/images/feat/preferred-currency.webp',
    imageAlt: 'GreepPay merchant reporting screen',
  },
];

export const steps: Step[] = [
  {
    title: 'Sign up and Verify',
    isBullet: true,
    descriptions: [
      'Download the app,',
      'create your account,',
      'complete a quick KYC.',
    ],
    extraText: 'Most users are verified within minutes.',
    imageSrc: '/images/steps/image-1.webp',
    imageAlt: 'Person signing up for GreepPay',
    imageLabel: 'Signup photo',
  },
  {
    title: 'Fund your Wallet',
    isBullet: false,
    descriptions: [
      'Top up the way that works for you. ',
      'Bank transfer, card, or crypto.',
    ],
    extraText: 'Your money lands in your wallet, ready to move.',
    imageSrc: '/images/steps/image-2.webp',
    imageAlt: 'GreepPay fund wallet app screen',
    imageLabel: 'Fund wallet image',
  },
  {
    title: 'Spend, Send, Save, or Sell',
    isBullet: false,
    descriptions: [
      'Create cards, send money, and',
      'manage payments instantly.',
    ],
    imageSrc: '/images/steps/image-3.webp',
    imageAlt: 'Person using GreepPay after funding wallet',
    imageLabel: 'Spend and send photo',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Customer support that truly cares.',
    text: 'Every time I had a question, they were quick to respond and very helpful.',
    author: 'Sarah L.',
    rating: 5,
  },
  {
    quote: 'The budgeting tools are a game changer.',
    text: 'I never knew managing my finances could be so straightforward. GreepPay helps me plan ahead with ease.',
    author: 'Mark T.',
    rating: 5,
  },
  {
    quote: 'I love the mobile app.',
    text: 'It allows me to check my budget on the go, which keeps me accountable.',
    author: 'Carlos M.',
    rating: 5,
  },
  {
    quote: 'A seamless experience from start to finish.',
    text: 'I can easily link my bank account and manage all my transactions effortlessly.',
    author: 'David K.',
    rating: 5,
  },
  {
    quote: 'Customer support is always there for me.',
    text: 'Whenever I have a question, the team is quick to respond and help me resolve any issues. It feels great to have support.',
    author: 'Emily R.',
    rating: 5,
  },
  {
    quote: 'Transformative experience.',
    text: 'This tool has changed how I view my finances and plan for the future.',
    author: 'Sarah W.',
    rating: 5,
  },
  {
    quote: 'Security features that give me peace of mind.',
    text: 'I love knowing my financial information is safe and secure.',
    author: 'Priya S.',
    rating: 5,
  },
  {
    quote: 'Switching to GreepPay was the best decision.',
    text: 'The user-friendly interface and features have transformed how I handle my finances. I wish I had switched sooner.',
    author: 'James P.',
    rating: 5,
  },
  {
    quote: 'Highly recommended for anyone.',
    text: 'It caters to all levels of financial literacy and adjusts to my needs.',
    author: 'Tom H.',
    rating: 5,
  },
  {
    quote: 'A must-have tool for anyone who handles money.',
    text: 'This app has transformed the way I manage my finances for the better.',
    author: 'Jordan M.',
    rating: 5,
  },
  {
    quote: 'I appreciate the security features.',
    text: 'Knowing my cards are protected from fraud makes me feel safe while shopping online. GreepPay has my back.',
    author: 'Emily N.',
    rating: 5,
  },
  {
    quote: 'Finally found my budgeting solution.',
    text: 'The features are exactly what I need to stay organized and focused.',
    author: 'Emily N.',
    rating: 5,
  },
];

export const useCases: UseCase[] = [
  {
    title: 'Paying tuition abroad without losing 8% to FX',
    imageSrc: '/images/uses/5.webp',
    imageAlt: 'Student paying tuition abroad',
    imageLabel: 'Tuition use-case photo',
  },
  {
    title: 'Sending money home in 60 seconds',
    imageSrc: '/images/uses/4.webp',
    imageAlt: 'Person sending money with GreepPay',
    imageLabel: 'Send money use-case photo',
  },
  {
    title: 'Paying for products in any store globally',
    imageSrc: '/images/uses/1.webp',
    imageAlt: 'Customer paying for products globally',
    imageLabel: 'Products use-case photo',
  },
  {
    title: 'Receiving freelance payments in USD without a US bank',
    imageSrc: '/images/uses/2.webp',
    imageAlt: 'Freelancer receiving USD payments',
    imageLabel: 'Freelance payments photo',
  },
  {
    title: 'Paying for Netflix, Spotify, AWS from your Naira balance',
    imageSrc: '/images/uses/3.webp',
    imageAlt: 'Customer paying for online subscriptions',
    imageLabel: 'Subscriptions use-case photo',
  },
];

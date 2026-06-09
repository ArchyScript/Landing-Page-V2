export type AvailableCurrency = {
  code: string;
  icon_extension: 'svg' | 'webp';
  symbol: string;
};

export const availableCurrencies: AvailableCurrency[] = [
  { code: 'NGN', icon_extension: 'svg', symbol: '₦' },
  { code: 'KES', icon_extension: 'svg', symbol: 'KSh' },
  { code: 'UGX', icon_extension: 'svg', symbol: 'USh' },
  { code: 'GHS', icon_extension: 'svg', symbol: '₵' },
  { code: 'ZAR', icon_extension: 'svg', symbol: 'R' },
  { code: 'RWF', icon_extension: 'webp', symbol: 'RF' },
  { code: 'BIF', icon_extension: 'svg', symbol: 'FBu' },
  { code: 'XAF', icon_extension: 'webp', symbol: 'FCFA' },
  { code: 'CDF', icon_extension: 'svg', symbol: 'FC' },
  { code: 'SLE', icon_extension: 'svg', symbol: 'Le' },
  { code: 'XOF', icon_extension: 'svg', symbol: 'FCFA' },
  { code: 'TZS', icon_extension: 'svg', symbol: 'TSh' },
  { code: 'MWK', icon_extension: 'webp', symbol: 'MK' },
  { code: 'MZN', icon_extension: 'svg', symbol: 'MT' },
  { code: 'BWP', icon_extension: 'webp', symbol: 'P' },
  { code: 'SZL', icon_extension: 'svg', symbol: 'E' },
  { code: 'EGP', icon_extension: 'svg', symbol: 'E£' },
  { code: 'SLL', icon_extension: 'svg', symbol: 'Le' },
  { code: 'ETB', icon_extension: 'svg', symbol: 'Br' },
  { code: 'PKR', icon_extension: 'svg', symbol: '₨' },
  { code: 'ZWL', icon_extension: 'svg', symbol: '$' },
  { code: 'ZMW', icon_extension: 'svg', symbol: 'ZK' },
  { code: 'MAD', icon_extension: 'svg', symbol: 'DH' },
  { code: 'SSP', icon_extension: 'svg', symbol: '£' },
  { code: 'SDG', icon_extension: 'svg', symbol: 'SD' },
  { code: 'XLM', icon_extension: 'svg', symbol: 'XLM' },
  { code: 'TRY', icon_extension: 'svg', symbol: '₺' },
  { code: 'USD', icon_extension: 'svg', symbol: '$' },
  { code: 'CAD', icon_extension: 'svg', symbol: '$' },
  { code: 'EUR', icon_extension: 'svg', symbol: '€' },
  { code: 'COP', icon_extension: 'svg', symbol: '$' },
  { code: 'INR', icon_extension: 'svg', symbol: '₹' },
  { code: 'USDC', icon_extension: 'svg', symbol: '$' },
  { code: 'USDT', icon_extension: 'svg', symbol: '$' },
];

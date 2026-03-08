export type ContactFormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

type CountryRule = {
  code: string;
  label: string;
  min: number;
  max: number;
};

export const COUNTRY_CODE_RULES: CountryRule[] = [
  { code: "+1", label: "US (+1)", min: 10, max: 10 },
  { code: "+44", label: "UK (+44)", min: 10, max: 10 },
  { code: "+61", label: "Au (+61)", min: 9, max: 9 },
  { code: "+65", label: "SG (+65)", min: 8, max: 8 },
  { code: "+91", label: "IN (+91)", min: 10, max: 10 },
  { code: "+971", label: "UAE (+971)", min: 9, max: 9 },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizePhone(input: string): string {
  return input.replace(/\D/g, "");
}

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function validatePhoneByCountry(countryCode: string, phone: string): boolean {
  const rule = COUNTRY_CODE_RULES.find((item) => item.code === countryCode);
  const digits = normalizePhone(phone);

  if (!rule) {
    return false;
  }

  return digits.length >= rule.min && digits.length <= rule.max;
}

export function validateContactForm(form: ContactFormData): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.countryCode.trim()) {
    errors.countryCode = "Country code is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!validatePhoneByCountry(form.countryCode, form.phone)) {
    const rule = COUNTRY_CODE_RULES.find((item) => item.code === form.countryCode);
    if (rule) {
      errors.phone = `Phone number must be ${rule.min}-${rule.max} digits for ${rule.code}.`;
    } else {
      errors.phone = "Please select a valid country code.";
    }
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

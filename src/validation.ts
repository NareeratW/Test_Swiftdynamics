export type Values = Record<string, string>;
export function validate(values: Values, register: boolean) {
  const errors: Values = {};
  const fields = register ? ['firstName', 'lastName', 'email', 'company', 'position', 'password', 'confirm'] : ['identity', 'password'];
  for (const field of fields) if (!values[field]?.trim()) errors[field] = 'required';
  const email = register ? 'email' : 'identity';
  if (values[email]?.trim() && (register || values[email].includes('@')) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[email].trim())) errors[email] = 'email';
  if (!register && values.identity?.trim() && !values.identity.includes('@') && !/^[a-zA-Z0-9._-]{3,}$/.test(values.identity.trim())) errors.identity = 'username';
  if (register && values.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(values.password)) errors.password = 'password';
  if (register && values.confirm && values.confirm !== values.password) errors.confirm = 'match';
  if (register && values.postal?.trim() && !/^\d{5}$/.test(values.postal.trim())) errors.postal = 'postal';
  if (register && values.phone?.trim() && !/^\+?\d{9,15}$/.test(values.phone.trim().replace(/[\s()-]/g, ''))) errors.phone = 'phone';
  if (register && values.accountNumber?.trim() && !/^\d{6,20}$/.test(values.accountNumber.trim().replace(/[ -]/g, ''))) errors.accountNumber = 'account';
  if (register && ['bank','accountName','accountNumber'].some(name => values[name]?.trim())) {
    for (const name of ['bank','accountName','accountNumber']) if (!values[name]?.trim()) errors[name] = 'bankRequired';
  }
  return errors;
}

import { $ } from '@wdio/globals';

export const AuthSel = {
  username: 'username',
  password: 'password',
  loginBtn: 'login-button',
  error: 'error',
} as const;

export const byTid = (id: string) => $(`[data-test="${id}"]`);

import { describe, it, expect } from 'vitest';
import { validate } from './validation';
const valid = {firstName:'Jane',lastName:'Doe',email:'jane@example.com',company:'Studio',position:'Marketing',password:'Password1',confirm:'Password1'};
describe('staff registration validation', () => {
 it('requires all staff fields and rejects whitespace',()=>{expect(Object.keys(validate({},true))).toHaveLength(7);expect(validate({...valid,firstName:'  '},true).firstName).toBe('required');});
 it('accepts a complete form including Thai names',()=>expect(validate({...valid,firstName:'สมใจ',lastName:'ดีมาก'},true)).toEqual({}));
 it('rejects malformed email',()=>expect(validate({...valid,email:'jane@'},true).email).toBe('email'));
 it('requires a strong password',()=>{for(const password of ['short','password1','PASSWORD1','Password'])expect(validate({...valid,password},true).password).toBe('password');});
 it('requires matching confirmation',()=>expect(validate({...valid,confirm:'Other123'},true).confirm).toBe('match'));
});
describe('login validation',()=>{
 it('accepts email and username',()=>{expect(validate({identity:'jane@example.com',password:'secret'},false)).toEqual({});expect(validate({identity:'staff.jane',password:'secret'},false)).toEqual({});});
 it('rejects missing fields, malformed emails and invalid usernames',()=>{expect(Object.keys(validate({},false))).toHaveLength(2);expect(validate({identity:'a@',password:'secret'},false).identity).toBe('email');expect(validate({identity:'a b',password:'secret'},false).identity).toBe('username');});
});

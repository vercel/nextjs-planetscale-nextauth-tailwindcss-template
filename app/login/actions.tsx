import { z } from 'zod';
import uilchilgee from '@/lib/uilchilgee';
import { redirect, RedirectType } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/auth';
import { aldaaBarigch } from '@/components/aldaaBarigch';

const loginSchema = z.object({
  utas: z.string().trim(),
  nuutsUg: z.string().trim()
});

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    };
  }

  const { utas, nuutsUg } = result.data;

  try {
    const response = await uilchilgee().post('/khariltsagchNevtrey', {
      utas,
      nuutsUg
    });
    const token = response.data?.token;

    await createSession(token);

    redirect('/dashboard', RedirectType.push);
  } catch (e) {
    console.log('error luu orson:', e);
    aldaaBarigch(e);
  }
}

export async function logout(): Promise<void> {
  deleteSession();
  redirect('/login', RedirectType.push);
}

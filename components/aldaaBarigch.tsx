'use client';
import { toast } from 'sonner';

export const aldaaBarigch = (e: any) => {
  if (
    e?.response?.data?.aldaa === 'jwt expired' ||
    e?.response?.data?.aldaa === 'jwt malformed'
  ) {
    window.location.href = '/';
  } else if (!!e?.response?.data?.aldaa)
    toast.error(`${e?.response?.data?.aldaa}`);
  else if (!!e?.response?.errors)
    toast.error(`${JSON.stringify(e?.response?.errors)}`);
  else toast.error(`${JSON.stringify(e)}`);
};

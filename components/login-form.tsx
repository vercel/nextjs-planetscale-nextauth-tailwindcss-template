'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from 'app/login/actions';
import { aldaaBarigch } from './aldaaBarigch';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <form
      action={loginAction}
      onError={(error) => {
        aldaaBarigch(error);
      }}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Нэвтрэх</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Та утасны дугаараа оруулан нэвтэрнэ үү.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="Утас">Утас</Label>
          <Input
            id="utas"
            name="utas"
            type="text"
            placeholder="12345678"
            required
          />
        </div>
        {/* {state?.errors?.utas && (
          <p className="text-red-500">{state.errors.utas}</p>
        )} */}
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Нууц үг</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Нууц үгээ мартсан уу?
            </a>
          </div>
          <Input id="nuutsUg" name="nuutsUg" type="password" required />
        </div>
        {/* {state?.errors?.nuutsUg && (
          <p className="text-red-500">{state.errors.nuutsUg}</p>
        )} */}
        <SubmitButton />
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Эсвэл
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Нэг удаагийн кодоор нэвтрэх
        </Button>
      </div>
      <div className="text-center text-sm">
        Хаяг байхгүй бол?{' '}
        <a href="#" className="underline underline-offset-4">
          Шинээр бүртгүүлэх
        </a>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full">
      Login
    </Button>
  );
}

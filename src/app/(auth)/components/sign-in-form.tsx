"use client";

import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import * as Form from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import signInForm, { SignInData } from "@/lib/forms/sign-in";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  return (
    <Card.Card className="min-w-96">
      <Card.CardHeader>
        <Card.CardTitle>Авторизация</Card.CardTitle>
        <Card.CardDescription>
          Пожалуйста, войдите в систему.
        </Card.CardDescription>
      </Card.CardHeader>
      <Card.CardContent>
        <SignInFormContent id="form-sign-in" />
      </Card.CardContent>
      <Card.CardFooter>
        <Button className="w-full" type="submit" form="form-sign-in">
          Вход
        </Button>
      </Card.CardFooter>
    </Card.Card>
  );
}

function SignInFormContent({
  className,
  ...props
}: HTMLAttributes<HTMLFormElement>) {
  const form = useForm<SignInData>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: SignInData) => {
    console.log(data);
  };

  return (
    <Form.Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("space-y-2", className)}
        {...props}
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Логин</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="admin@admin.ru" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Пароль</Form.FormLabel>
              <Form.FormControl>
                <Input type="password" placeholder="●●●●●●●●" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
      </form>
    </Form.Form>
  );
}

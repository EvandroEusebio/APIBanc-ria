import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import gif from '@/assets/gifs/Telecommuting.gif';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { handleRegister } from '@/service/apiRoutes/client';

// Definindo o esquema de validação com Zod
const schema = z.object({
  name: z.string({ required_error: 'Informe o nome' }),
  cpf: z.string({ required_error: 'Informe o cpf' }),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

type Inputs = z.infer<typeof schema>;

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await handleRegister(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erro de ao enviar: ', error);
      });
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Formulário */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center h-full">
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-title-h1 font-semibold">Faça Parte</h1>
          <h3 className="text-title-h6">Venha e gerencie os seus pixs</h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu nome"
                      autoComplete="off"
                      className="h-[55px] rounded-2xl bg-[rgb(255,255,255)]  focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cpf </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu cpf"
                      autoComplete="off"
                      className="h-[55px] rounded-2xl bg-[rgb(255,255,255)]  focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palavra-passe</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      className="h-[55px] rounded-2xl  bg-[rgb(255,255,255)]  focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
                      placeholder="Insira sua palavra passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-cerulean-blue-500 h-[55px] rounded-2xl hover:bg-cerulean-blue-600 shadow-none"
            >
              Registrar
            </Button>
            <div>
              <p>
                Já tem um conta?{' '}
                <Link
                  to={{
                    pathname: '/',
                  }}
                >
                  <span className="text-cerulean-blue-500">Login</span>
                </Link>{' '}
              </p>
            </div>
          </form>
        </Form>
      </div>

      {/* Imagem */}
      <div className="w-full lg:w-1/2 p-4 hidden lg:flex lg:justify-center lg:items-center">
        <img
          src={gif}
          alt="ss"
          className="h-full 
           object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

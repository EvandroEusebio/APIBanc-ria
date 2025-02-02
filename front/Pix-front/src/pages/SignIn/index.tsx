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
import { useToast } from '@/hooks/use-toast';
import { handleLogin } from '@/service/apiRoutes/client';
import { setCookie } from '@/utils/cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

// Definindo o esquema de validação com Zod
const schema = z.object({
  cpf: z.string({
    required_error: 'Insira o seu cpf',
  }),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

export default function SignIn() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //console.log(data);
    await handleLogin(data)
      .then((response) => {
        console.log(response.data.user);
        setCookie('uid', response.data.token);
        setCookie('client', response.data.user);
        toast({
          title: 'Autendicado com sucesso',
          description: `Cliente: ${response.data.user.name}\nCPF: ${response.data.user.cpf}`,
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('Erro de ao enviar: ', error.response.data);
        toast({
          variant: 'destructive',
          title: 'Não foi possível Autenticar',
          description: 'Mensagem: ' + error.response.data.message,
        });
      });
  };

  return (
    <div className="flex min-h-screen bg-[#ffff] flex-col lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center items-center">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-title-h1 font-semibold">Comece Agora</h1>
          <h3 className="text-title-h6">
            Entre com as suas credenciais para acessar a sua conta
          </h3>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu CPF"
                      autoComplete="off"
                      className="h-[55px] rounded-2xl bg-[rgb(255,255,255)] focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
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
                      className="h-[55px] rounded-2xl bg-[rgb(255,255,255)] focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
                      placeholder="Insira sua palavra-passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-cerulean-blue-500 h-[55px] rounded-2xl hover:bg-cerulean-blue-600 shadow-none hover:shadow-md transition duration-300"
            >
              Login
            </Button>
            <div>
              <p>
                Não tem uma conta?{' '}
                <Link
                  to={{
                    pathname: '/signup',
                  }}
                >
                  <span className="text-cerulean-blue-500">Registrar</span>
                </Link>{' '}
              </p>
            </div>
          </form>
        </Form>
      </div>

      <div className="w-full lg:w-1/2 p-4 hidden lg:flex lg:justify-center lg:items-center">
        <img src={gif} alt="ss" className="h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}

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
import { handleCreatePix } from '@/service/apiRoutes/client';
import { getCookie } from '@/utils/cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '../ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const schema = z.object({
  pix_key: z.string({
    required_error: 'Insira a chave pix',
  }),
  description: z.string().max(160),
  amount: z.string({
    required_error: 'Insira o valor que deseja enviar',
  }),
});

type Inputs = z.infer<typeof schema>;

export default function FormAddPix() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let realData = {
      clientId: getCookie('client').id,
      pix_key: data.pix_key,
      destination: 'to_enterprise',
      description: data.description,
      amount: Number(data.amount),
    };

    handleCreatePix(realData)
      .then((resp) => {
        console.log(resp.data);
        toast({
          title: 'Enviado com sucesso!',
          description: "O seu PIX foi enviado com sucesso"
        });
        navigate(0);
      })
      .catch((err) => {
        console.error('Erro ao criar o Pix', err.response.data.message);
        toast({
          variant: 'destructive',
          title: 'Não foi possível Enviar o pix',
          description: "Mensagem: " + err.response.data.message
        });
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5  items-start  px-5 sm:px-0"
      >
        <FormField
          control={form.control}
          name="pix_key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chave Pix</FormLabel>
              <FormControl>
                <Input
                  placeholder="Insira a chave Pix"
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
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  type="number"
                  className="h-[55px] rounded-2xl  bg-[rgb(255,255,255)]  focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
                  placeholder="Insira valor"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Insira uma descrição deste PIX..."
                  className="resize-none h-[55px]   bg-[rgb(255,255,255)]  focus:outline-none focus:border-cerulean-blue-400 shadow-none focus:shadow-lg focus:shadow-cerulean-blue-200"
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
          Enviar
        </Button>
        <div>
          <p></p>
        </div>
      </form>
    </Form>
  );
}

import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import UserDropMenu from '@/components/UserDropMenu';
import { BsSendArrowUp } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';
import { MdAttachMoney, MdOutlineCallReceived } from 'react-icons/md';
import AddPixFormModal from '@/components/AddPixFormModal';
import { useEffect, useState } from 'react';
import { PixData } from '@/types/pix_types';
import { getUserPix } from '@/service/apiRoutes/client';
import { getCookie } from '@/utils/cookie';
import { Badge } from '@/components/ui/badge';


export default function Home() {
  const [pixs, setPixs] = useState<PixData[]>([]);
  const [totalReceivedPix, setTotalReceivedPix] = useState(0);
  const [totalSendPix, setTotalSendPix] = useState(0);
  const [totalPix, setTotalPix] = useState(0);
  let userId = getCookie('client').id;

  useEffect(() => {
    getUserPix(userId)
      .then((resp) => {
        setPixs(resp.data.pixsUser);
        console.log(resp.data.totalReceivedPix);
        setTotalReceivedPix(resp.data.totalReceivedPix);
        setTotalSendPix(resp.data.totalSendPix);
        setTotalPix(resp.data.totalPix);
      })
      .catch((err) => {
        console.error('Errro ao buscar os pix: ' + err);
      });
  }, []);
  return (
    <div>
      <div className="p-6 max-w-[1200px] mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Saudações e mensagem */}
          <div>
            <h1 className="text-2xl font-semibold mb-1">Bom Dia, Evandro!</h1>
            <p className="text-sm text-muted-foreground">
              Comece o seu dia gerenciando os seus PIXs
            </p>
          </div>
          {/* Informações do lado direito */}
          <div className="flex flex-row items-center justify-between gap-4 w-full  sm:w-auto ">
            {/* Data */}
            <div className="flex items-center gap-2 bg-cerulean-blue-100 text-cerulean-blue-900 font-semibold py-2.5 px-6 rounded-2xl">
              <GoClock className="w-5 h-5" />
              <p className="text-sm">November 21, 2023</p>
            </div>
            {/* Avatar e informações do usuário */}
            <div>
              <UserDropMenu />
            </div>
          </div>
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 mb-3">
          <MetricCard
            icon={<MdOutlineCallReceived color="#fff" className="w-7 h-7" />}
            label="Pixs recebidos"
            value={`${totalReceivedPix}`}
          />
          <MetricCard
            icon={<BsSendArrowUp color="#fff" className="w-7 h-7" />}
            label="Pixs enviados "
            value={`${totalSendPix}`}
          />
          <MetricCard
            icon={<MdAttachMoney color="#fff" className="w-7 h-7" />}
            label="Total de pixs"
            value={`${totalPix}`}
          />
        </div>
      </div>
      {/* item List */}
      <div className="bg-cerulean-blue-50 p-6 ">
        <Card className="max-w-[1150px] mx-auto shadow-none bitem-0 rounded-2xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Lista de Pixs</h2>
                <p className="text-sm text-muted-foreground">
                  Visualise e administre todas as suas transações PIX
                </p>
              </div>
              <AddPixFormModal />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>CLIENTE</TableHead>
                  <TableHead>CHAVE PIX</TableHead>
                  <TableHead>DESCRIÇÃO</TableHead>
                  <TableHead>DESTINO</TableHead>
                  <TableHead>VALOR</TableHead>
                  <TableHead>DATA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pixs.map((item) => (
                  <TableRow key={item.id} >
                    <TableCell className="font-medium py-7">{item.id}</TableCell>
                    <TableCell>{item.clients.name}</TableCell>
                    <TableCell>{item.pix_key}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      {item.destination === 'to_client' ? (
                        <Badge className="bg-cerulean-blue-100 text-cerulean-blue-400 font-normal shadow-none border-none">
                          Recebido
                        </Badge>
                      ) : (
                        <Badge className="text-[#35f353] shadow-none border-none bg-[#d7ffde]  font-normal">
                          Enviado
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>${item.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="w-full rounded-2xl shadow-none">
      <div className="p-6">
        <div className="flex gap-5 items-start pb-3 mb-3 bitem-b-[1px]">
          <div className="p-5 rounded-2xl bg-cerulean-blue-950 shadow-md">
            {icon}
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center text-muted-foreground text-sm">
            <p>Compare to yesterday</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

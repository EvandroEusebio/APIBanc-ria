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
import { formatDate, atualDate } from '@/utils/formatDate';
import MetricCard from '@/components/MetricCard';

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
    <div className="min-h-screen bg-[#ffff]">
      <div className="p-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Bom Dia, Evandro!</h1>
            <p className="text-sm text-muted-foreground">
              Comece o seu dia gerenciando os seus PIXs
            </p>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 w-full  sm:w-auto ">
            <div className="flex items-center gap-2 bg-cerulean-blue-100 text-cerulean-blue-900 font-semibold py-2.5 px-6 rounded-2xl">
              <GoClock className="w-5 h-5" />
              <p className="text-sm">{atualDate()}</p>
            </div>
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
      <div className="bg-cerulean-blue-50 p-6 h-">
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
                    <TableCell>{formatDate(item.createdAt)}</TableCell>
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



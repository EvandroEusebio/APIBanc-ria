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

export default function Home() {
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
            value="134"
          />
          <MetricCard
            icon={<BsSendArrowUp color="#fff" className="w-7 h-7" />}
            label="Pixs enviados "
            value="444"
          />
          <MetricCard
            icon={<MdAttachMoney color="#fff" className="w-7 h-7" />}
            label="Total de pixs"
            value="113"
          />
        </div>
      </div>
      {/* Order List */}
      <div className="bg-cerulean-blue-50 p-6 ">
        <Card className="max-w-[1150px] mx-auto shadow-none border-0 rounded-2xl">
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
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.serviceType}</TableCell>
                    <TableCell>{order.itemName}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>${order.total}</TableCell>
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
        <div className="flex gap-5 items-start pb-3 mb-3 border-b-[1px]">
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

const orders = [
  {
    id: '#ONO067',
    date: 'NOV 26, 2023',
    customer: 'Maulana',
    serviceType: 'Delivery',
    itemName: 'American Style Burger',
    quantity: 1,

    total: '75.00',
  },
  {
    id: '#ONO068',
    date: 'NOV 25, 2023',
    customer: 'Hanifa',
    serviceType: 'Take Away',
    itemName: 'Sushi Platter',
    quantity: 2,

    total: '175.00',
  },
  {
    id: '#ONO069',
    date: 'NOV 24, 2023',
    customer: 'Annisa',
    serviceType: 'Delivery',
    itemName: 'Chicken Curry Katsu',
    quantity: 4,
    total: '375.00',
  },
  {
    id: '#ONO070',
    date: 'NOV 23,2023',
    customer: 'Ivan',
    serviceType: 'Take Away',
    itemName: 'American Style Burger',
    quantity: 1,

    total: '85.00',
  },
  {
    id: '#ONO071',
    date: 'NOV 22, 2023',
    customer: 'Dwi',
    serviceType: 'Take Away',
    itemName: 'Sushi Platter',
    quantity: 4,

    total: '125.00',
  },
  {
    id: '#ONO072',
    date: 'NOV 21, 2023',
    customer: 'Wahyu',
    serviceType: 'Delivery',
    itemName: 'American Style Burger',
    quantity: 2,

    total: '60.00',
  },
];

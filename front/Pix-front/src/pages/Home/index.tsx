import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ArrowDown,
  ArrowUp,
  Clock,
  FileText,
  CheckCircle,
  DollarSign,
} from 'lucide-react';
import { GoClock } from 'react-icons/go';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { MdOutlineCallReceived } from 'react-icons/md';
import { MdAttachMoney } from 'react-icons/md';

import { BsSendArrowUp } from 'react-icons/bs';

export default function Home() {
  return (
    <div >
      <div className="p-6 max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd-5PrwNdKCTezdF0NBuOx7agULrmlzwM.png"
              alt="Kassa Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-semibold text-xl">ValidaPix</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-sm font-medium">
              Orders
            </a>
            <a href="#" className="text-sm font-medium">
              Customers
            </a>
            <a href="#" className="text-sm font-medium">
              Setting
            </a>
            <div className="flex items-center gap-2 ml-4">
              <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center">
                <span className="text-xs">AC</span>
              </div>
              <span className="text-sm">Alchemyst Cafe</span>
            </div>
          </nav>
        </header>
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Bom Dia, Evandro!</h1>
            <p className="text-sm text-muted-foreground">
              Comece o seu dia gerenciado os seus PIXS
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-cerulean-blue-100 text-cerulean-blue-900 font-semibold py-2.5 px-6  rounded-2xl">
              <GoClock className="w-5 h-5" />
              <p className="text-sm">November 21, 2023</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full ">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-sm font-medium">Evandro Eusébio</p>
                <p className="text-xs text-muted-foreground">1234</p>
              </div>
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
      <div className='bg-cerulean-blue-50 p-6 '>
        <Card className='max-w-[1150px] mx-auto shadow-none border-0 rounded-2xl'>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Lista de Pixs</h2>
                <p className="text-sm text-muted-foreground">
                  Visualise e administre todas as suas transações PIX
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm">
                Date & Time
              </button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>QUEUE ID</TableHead>
                  <TableHead>DATE</TableHead>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>SERVICE TYPE</TableHead>
                  <TableHead>ITEM NAME</TableHead>
                  <TableHead>QTY</TableHead>
                  <TableHead>TOTAL</TableHead>
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
          <div className={`p-5 rounded-lg bg-cerulean-blue-950`}>{icon}</div>
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

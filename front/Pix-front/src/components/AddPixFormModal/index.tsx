import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useEffect, useState } from 'react';
import { BsSendArrowUp } from 'react-icons/bs';
import FormAddPix from '../FormAddPix';

export default function AddPixFormModal() {
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detecta alterações no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="flex bg-cerulean-blue-500 items-center py-4 px-4  gap-2 rounded-full text-cerulean-blue-50 hover:bg-cerulean-blue-600  font-semibold sm:py-2.5 sm:px-6  sm:rounded-2xl hover:shadow-md transition duration-300">
            <BsSendArrowUp className="w-5 h-5" />
            <p className="text-sm  hidden sm:block">Enviar Pix</p>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DrawerTitle>Pode acreditar nunca foi tão facil!</DrawerTitle>
            <DrawerDescription>
              Preencha os campos a baixo e envie seu pix com segurança
            </DrawerDescription>
          </DialogHeader>
          <FormAddPix />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="flex bg-cerulean-blue-500 items-center py-4 px-4  gap-2 rounded-full text-cerulean-blue-50 hover:bg-cerulean-blue-600  font-semibold sm:py-2.5 sm:px-6  sm:rounded-2xl hover:shadow-md transition duration-300">
          <BsSendArrowUp className="w-5 h-5" />
          <p className="text-sm  hidden sm:block">Enviar Pix</p>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Pode acreditar nunca foi tão facil!</DrawerTitle>
          <DrawerDescription>
            Preencha os campos a baixo e envie seu pix com segurança
          </DrawerDescription>
        </DrawerHeader>
        <FormAddPix />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              type="submit"
              className="w-full bg-[rgb(255, 255, 255)] text-black-950  border h-[55px] rounded-2xl hover:bg-black-50 shadow-none transition duration-300"
            >
              cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

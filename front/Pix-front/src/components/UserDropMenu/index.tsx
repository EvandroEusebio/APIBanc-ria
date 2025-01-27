import { CiUser, CiLogout } from 'react-icons/ci';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { IoChevronDownOutline } from 'react-icons/io5';
import { deleteCookie } from '@/utils/cookie';
import { useNavigate } from 'react-router-dom';

export default function UserDropMenu() {
  const navigate = useNavigate();

  function logout() {
    deleteCookie('uid');
    deleteCookie('client');
    navigate(0);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* Avatar */}
          <div className="rounded-full">
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

          {/* Texto que desaparece em telas pequenas */}
          <div className="hidden sm:block">
            <p className="text-sm font-medium">Evandro Eusébio</p>
            <p className="text-xs text-muted-foreground">1234</p>
          </div>

          {/* Ícone */}
          <IoChevronDownOutline className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cursor-pointer">
            Profile
            <DropdownMenuShortcut className="opacity-100">
              <CiUser className="w-5 h-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive hover:cursor-pointer" onClick={logout}>
          Sair
          <DropdownMenuShortcut className="opacity-100">
            <CiLogout className="w-5 h-5" color="" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

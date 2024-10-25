"use client";

import { User } from "@/api/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { BadgeCheck, ChevronsUpDown, LogOut } from "lucide-react";
import Link from "next/link";

export default function SidebarFooterMenu({ user }: { user: User }) {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <SidebarFooterDropdownTrigger user={user} />
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <SidebarFooterDropdownHeader user={user} />
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Мой профиль
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/sign-out" prefetch={false}>
              <LogOut />
              Выход
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SidebarFooterDropdownTrigger({ user }: { user: User }) {
  const avatar = toAvatar(user);
  return (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton size="lg" className="gap-0">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={avatar} alt={user.email} />
        </Avatar>
        <div className="grid flex-1 truncate text-left leading-tight">
          <p className="pl-2 text-sm font-bold">{user.email}</p>
        </div>
        <ChevronsUpDown className="ml-auto size-4" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
}

function SidebarFooterDropdownHeader({ user }: { user: User }) {
  const avatar = toAvatar(user);
  return (
    <DropdownMenuLabel className="p-0 font-normal">
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={avatar} alt={user.email} />
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {user.firstName ?? "User"}
          </span>
          <span className="truncate text-xs">{user.email}</span>
        </div>
      </div>
    </DropdownMenuLabel>
  );
}

function toAvatar(user: User) {
  return `https://api.dicebear.com/9.x/micah/svg?backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&seed=${user.email}`;
}

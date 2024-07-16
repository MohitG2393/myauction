"use client";

import { Button } from "@/components/ui/button";
import { formatToDollar } from "@/util/currency";
import {
  NotificationCell,
  NotificationFeedPopover,
  NotificationIconButton,
} from "@knocklabs/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { SearchIcon } from '@heroicons/react/solid'; // Adjusted import to use Solid version of SearchIcon
import Banner from "@/components/Banner";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const notifButtonRef = useRef(null);
  const session = useSession();
  const [searchOpen, setSearchOpen] = useState(false);

  const userId = session?.data?.user?.id;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white py-2 shadow-md z-50">
        <div className="container flex justify-between items-center mx-auto px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:underline flex items-center gap-1">
              <Image src="/logo2.svg" width="40" height="40" alt="Logo" />
              <span className="text-lg font-semibold">My Trading Kart</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="hover:underline hover:text-gray-700">
                All Auctions
              </Link>
              <Link href="/homeonly" className="hover:underline hover:text-gray-700">
                Secondary Home
              </Link>
              {userId && (
                <>
                  <Link href="/bids/create" className="hover:underline hover:text-gray-700">
                    Create Auction
                  </Link>
                  <Link href="/auctions" className="hover:underline hover:text-gray-700">
                    My Auctions
                  </Link>
                </>
              )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <SearchIcon className="h-6 w-6" />
              </button>
              {searchOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-300">
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Search..."
                  />
                </div>
              )}
            </div>
            {userId && (
              <>
                <NotificationIconButton
                  ref={notifButtonRef}
                  onClick={(e) => setIsVisible(!isVisible)}
                />
                <NotificationFeedPopover
                  buttonRef={notifButtonRef}
                  isVisible={isVisible}
                  onClose={() => setIsVisible(false)}
                  renderItem={({ item, ...props }) => (
                    <NotificationCell {...props} item={item}>
                      <div className="rounded-xl">
                        <Link
                          className="text-blue-400 hover:text-blue-500"
                          onClick={() => {
                            setIsVisible(false);
                          }}
                          href={`/bids/${item.data?.itemId}`}
                        >
                          Someone outbidded you on{" "}
                          <span className="font-bold">{item.data?.itemName}</span>{" "}
                          by ${formatToDollar(item.data?.bidAmount)}
                        </Link>
                      </div>
                    </NotificationCell>
                  )}
                />
              </>
            )}
            {session?.data?.user.image && (
              <Image
                src={session.data.user.image}
                width="40"
                height="40"
                alt="user avatar"
                className="rounded-full"
              />
            )}
            <div>{session?.data?.user?.name}</div>
            <div>
              {userId ? (
                <Button
                  onClick={() =>
                    signOut({
                      callbackUrl: "/",
                    })
                  }
                >
                  Sign Out
                </Button>
              ) : (
                <Button type="submit" onClick={() => signIn()}>
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <Banner />
    </>
  );
}

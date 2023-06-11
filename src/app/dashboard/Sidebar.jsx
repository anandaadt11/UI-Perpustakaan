import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="max-w-[300px] bg-sky-500 p-5 flex flex-col min-h-screen border-2 border-sky-600 shadow-lg">
      <div>
        <h1 className="text-white text-3xl font-bold mb-2">
          Perpustakaan Online
        </h1>
        <p>2020080190</p>
      </div>
      <div className="mt-5">
        <div className="p-3 rounded-lg text-white bg-sky-700 flex flex-col gap-3 mb-10">
          <div>
            <h1 className="font-bold">Status Peminjaman</h1>
            <p className="text-sm">Sedang Meminjam</p>
          </div>
          <div>
            <h1 className="font-bold">Batas Pengembalian</h1>
            <p className="text-sm">2 hari lagi</p>
          </div>
          <div>
            <h1 className="font-bold">Lokasi Pengembalian</h1>
            <p className="text-sm">Kampus esa Unggul</p>
          </div>
        </div>
        <ul>
          <li className="text-white mb-2 hover:bg-sky-700 p-3 rounded-lg">
            <Link
              href="#"
              className="flex"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              Buku Favorit
            </Link>
          </li>
          <li className="text-white mb-2 hover:bg-sky-700 p-3 rounded-lg">
            <Link
              href="#"
              className="flex"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mx-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              Riwayat Peminjaman
            </Link>
          </li>
          <li className="text-white mb-2 hover:bg-sky-700 p-3 rounded-lg">
            <Link
              href="/login"
              className="flex"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mx-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

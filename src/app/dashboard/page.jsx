import Image from "next/image";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Card from "@/components/Card";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-10">
          <div className="mb-10">
            <h1 className="text-black text-3xl font-bold mb-3">
              REKOMENDASI UNTUK ANDA
            </h1>
            <div className="flex gap-3">
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-black text-3xl font-bold mb-3">Populer</h1>
            <div className="flex gap-3">
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book2.jpg"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book2.jpg"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book2.jpg"
              />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-black text-3xl font-bold mb-3">Terbaru</h1>
            <div className="flex gap-3">
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
              <Card
                title="The mind of Leader"
                author="Noah Schumer"
                image="book1.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between h-screen w-full">
        <Header />
        <div className="px-6 w-full">
          <p>Hellow</p>
        </div>
        <Footer />
      </main>
    </>
  );
}

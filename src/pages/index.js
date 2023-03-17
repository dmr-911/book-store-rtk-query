
import "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Books from "@/components/Books/Books";
import Featured from "@/components/Featured/Featured";

export default function Home() {
  return (
    <Layout>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <Featured />
          <Books />
        </div>
      </main>
    </Layout>
  );
}

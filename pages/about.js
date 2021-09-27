import Layout from "../components/layout";
import Link from "next/link";
export default function about() {
  return (
    <Layout title="About | Jhon C" description="Estas en About">
      <h2>About page</h2>
      <Link href="/">Home</Link>
    </Layout>
  );
}

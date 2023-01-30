import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import authContext from "@/context/auth/authContext";

export default function Home() {
  const AuthContext = useContext(authContext);
  const { user, userAuthenticated } = AuthContext;
  useEffect(() => {
    userAuthenticated();
  }, []);
  return (
    <Layout>
      <h1>Desde index</h1>
    </Layout>
  )
}

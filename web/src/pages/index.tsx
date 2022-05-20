import { getAccessToken, getSession, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  }

  console.log(session.accessToken);

  return {
    redirect: {
      destination: "/app",
      permanent: false,
    },
  };
};
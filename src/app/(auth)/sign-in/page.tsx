"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="px-4 py-2 bg-orange-400 text-white m-4 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

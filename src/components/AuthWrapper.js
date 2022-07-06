import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className='loading'>
        <hr className='hr1' />
        <hr className='hr2' />
        <hr className='hr3' />
        <hr className='hr4' />
        <hr className='hr5' />
        <hr className='hr6' />
        <hr className='hr7' />
        <hr className='hr8' />
      </div>
    );
  }
  if (error) {
    return (
      <section className='error'>
        <h1>{error.message}</h1>
      </section>
    );
  }
  return <>{children}</>;
};

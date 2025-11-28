import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/handle/supabase";
const SupabaseContext = createContext({
  session: null,
});

export const SupabaseProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SupabaseContext.Provider value={{ session }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabaseSession = () => useContext(SupabaseContext);

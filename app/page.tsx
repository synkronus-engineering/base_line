'use client';
/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa, } from '@supabase/auth-ui-shared';
import {  useUser, useSupabaseClient, } from '@supabase/auth-helpers-react';
import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/todos");
  }, [user]);

  return (
    <Grid container 
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={4} xs={12}>
        <Box sx={{mt:'50%'}}>
          <Auth
            supabaseClient={supabaseClient}
            redirectTo="/todos"
            appearance={{ theme: ThemeSupa }}
            theme="default"            
            providers={['google']}
            socialLayout="horizontal"
            localization={{variables: {...authOptionCfg}}}
          />
        </Box>
      </Grid>
    </Grid>
  )
};

const authOptionCfg = {
  "sign_up": {
    "email_label": "Email",
    "password_label": "Crear Contraseña",
    "button_label": "Registrarse",
    "social_provider_text": "Ingresar con",
    "link_text": "No Tienes Cuenta? Registrate"
  },
  "sign_in": {
    "email_label": "Email",
    "password_label": "Contraseña",
    "button_label": "Ingresar",
    "social_provider_text": "Ingresar con",
    "link_text": "Tienes Cuenta? Ingresa!"
  },
  "magic_link": {
    "email_input_label": "Email address",
    "email_input_placeholder": "Your email address",
    "button_label": "Enviar Magic Link",
    "link_text": "Enviar a magic link email"
  },
  "forgotten_password": {
    "email_label": "Email",
    "password_label": "Contraseña",
    "button_label": "Enviar instrucciones",
    "link_text": "Olvidé la contraseña?"
  },
  "update_password": {
    "password_label": "Nueva contraseña",
    "password_input_placeholder": "Nueva contraseña",
    "button_label": "Actualizar contraseña"
  }
}

export default LoginPage;

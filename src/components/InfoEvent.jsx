import {
  Box,
  Grid,
  Typography,
  Divider,
  Slide,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccion =
    "Jano's Pilar Hotel - Jorge Manfredi 1455 - Pilar, Buenos Aires";

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        py: 6,
        px: 2,
        // Imagen de fondo desde /public
        backgroundImage: "url('/images/004/fondoceremonia.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Si querés efecto parallax sólo en desktop, descomentá la línea de abajo
        // backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      {/* Overlay suave para mejorar contraste del texto (ajustá la opacidad a gusto) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(246, 238, 220, 0.78)", // antes era #F6EEDC sólido
          pointerEvents: "none",
        }}
      />

      {/* Contenido sobre el overlay */}
      <Box sx={{ position: "relative" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            {/* Contenedor en FLEX con space-between para Ceremonia y Fiesta */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 4,
                flexWrap: "wrap", // en mobile se apilan prolijo
              }}
            >
              {/* --- Sección: Ceremonia --- */}
              <Slide in={inView} direction="left" timeout={800}>
                <Box
                  sx={{
                    textAlign: "center",
                    flex: "1 1 320px",
                    minWidth: { xs: "100%", sm: 320 },
                  }}
                >
                  <Box
                    component="img"
                    src="/images/004/fiesta.gif"
                    alt="Ceremonia"
                    sx={{ width: 100, height: 100, mb: 1 }}
                  />

                  <Typography
                    variant="h5"
                    fontWeight="semibold"
                    gutterBottom
                    sx={{
                      fontFamily: "'Eyesome'",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      color: "#0B1D4D",
                    }}
                  >
                    Ceremonia
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5em" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    Sabado 15 de Febrero de 2026
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5rem" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    20:00 hs.
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 4,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5em" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    {direccion}
                  </Typography>

                  <ButtonLinks
                    label="Como llegar"
                    href="https://www.google.com/maps/place/Janos+Pilar/@-34.4461484,-58.9278216,14z/data=!4m10!1m2!2m1!1sjanos+pilar+hotel!3m6!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!8m2!3d-34.4461484!4d-58.8917727!15sChFqYW5vcyBwaWxhciBob3RlbCIDiAEBWhMiEWphbm9zIHBpbGFyIGhvdGVskgEWZnVuY3Rpb25fcm9vbV9mYWNpbGl0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNdE4yVXlOV2xSUlJBQqoBURABKhUiEWphbm9zIHBpbGFyIGhvdGVsKA4yHxABIhvWF6gHGVAkniOZ8m5gqST7r_yGFPiBcJoRbVcyFRACIhFqYW5vcyBwaWxhciBob3RlbOABAPoBBAgREDI!16s%2Fg%2F11bw1gr0hr?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                    newTab
                  />
                </Box>
              </Slide>

              {/* Separador opcional en móviles */}
              <Box sx={{ flexBasis: "100%", display: { xs: "block", md: "none" } }}>
                <Divider sx={{ my: 2 }} />
              </Box>

              {/* --- Sección: Fiesta --- */}
              <Slide in={inView} direction="right" timeout={900}>
                <Box
                  sx={{
                    textAlign: "center",
                    flex: "1 1 320px",
                    minWidth: { xs: "100%", sm: 320 },
                  }}
                >
                  <Box
                    component="img"
                    src="/images/004/fiesta.gif"
                    alt="Fiesta"
                    sx={{ width: 100, height: 100, mb: 1 }}
                  />

                  <Typography
                    variant="h5"
                    fontWeight="semibold"
                    gutterBottom
                    sx={{
                      fontFamily: "'Eyesome'",
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                      color: "#0B1D4D",
                    }}
                  >
                    Fiesta
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5em" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    Sabado 15 de Febrero de 2026
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5rem" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    21:00 hs.
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 4,
                      fontFamily: "'Quicksand', serif",
                      fontSize: { xs: "0.9rem", md: "1.5em" },
                      color: "#0B1D4D",
                      fontWeight: "bold",
                    }}
                  >
                    {direccion}
                  </Typography>

                  <ButtonLinks
                    label="Como llegar"
                    href="https://www.google.com/maps/place/Janos+Pilar/@-34.4461484,-58.9278216,14z/data=!4m10!1m2!2m1!1sjanos+pilar+hotel!3m6!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!8m2!3d-34.4461484!4d-58.8917727!15sChFqYW5vcyBwaWxhciBob3RlbCIDiAEBWhMiEWphbm9zIHBpbGFyIGhvdGVskgEWZnVuY3Rpb25fcm9vbV9mYWNpbGl0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNdE4yVXlOV2xSUlJBQqoBURABKhUiEWphbm9zIHBpbGFyIGhvdGVsKA4yHxABIhvWF6gHGVAkniOZ8m5gqST7r_yGFPiBcJoRbVcyFRACIhFqYW5vcyBwaWxhciBob3RlbOABAPoBBAgREDI!16s%2Fg%2F11bw1gr0hr?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                    newTab
                  />
                </Box>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoEvent;

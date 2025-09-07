import { Box, Typography, Slide, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const direccion =
    "Jano's Pilar Hotel - Jorge Manfredi 1455 - Pilar, Buenos Aires";

  const mapsUrl =
    "https://www.google.com/maps/place/Janos+Pilar/@-34.4461484,-58.9278216,14z/data=!4m10!1m2!2m1!1sjanos+pilar+hotel!3m6!1s0x95bc9ce3d9b1512b:0x6ec2c4b8b23193bc!8m2!3d-34.4461484!4d-58.8917727";

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/004/fondoceremonia.webp"
        alt="Ceremonia y Fiesta"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Contenido centrado dentro de la parte blanca */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          px: 2,
          maxWidth: { xs: "300px", md: "360px" },
        }}
      >
        <Slide in={inView} direction="up" timeout={800}>
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "'Eyesome'",
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "#000000",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Ceremonia & Fiesta
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              Sábado 15 de Febrero de 2026
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              20:00 hs
            </Typography>

            <Typography
              sx={{
                mb: 3,
                fontFamily: "'Quicksand', serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#000000",
                fontWeight: "bold",
                lineHeight: 1.4,
              }}
            >
              {direccion}
            </Typography>

            {/* Nuevo botón personalizado */}
            <Button
              variant="contained"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "50px", // bien redondeado
                px: 2,
                py: 1,
                fontFamily: "'Quicksand', serif",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              CÓMO LLEGAR
            </Button>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default InfoEvent;

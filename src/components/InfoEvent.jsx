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
    "https://www.google.com/maps/place/Jano's+Pilar+Hotel/@-34.4577315,-58.8902709,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9d9131a061ef:0xf54dec26651ab26d!8m2!3d-34.4577315!4d-58.887696!16s%2Fg%2F11ydxyv8vw?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      {/* Imagen de fondo */}
      <Box
        component="img"
        src="/images/004/fondito.webp"
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
            <br />
            <br />
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

import { Box, Typography, Fade } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DryCleaningIcon from "@mui/icons-material/DryCleaning"; // nuevo ícono elegante
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#9A887B", // verde pastel suave
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
            <Box
  component="img"
  src="/images/004/dress.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       
    height: 125,
    mb: 1
  }}
/>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#ffffff",
              fontWeight: "semibold",
              mb: 1,
            }}
          >
            Dresscode
          </Typography>

          <Typography
  variant="h5"
  sx={{
    fontFamily: "'Quicksand'",
    fontSize: { xs: "1.2rem", md: "1.5rem" },
    color: "#ffffff",
  }}
>
Elegante Sport (Se reserva el color blanco)
  
</Typography>

        </Box>
      </Fade>
    </Box>
  );
};

export default Dresscode;

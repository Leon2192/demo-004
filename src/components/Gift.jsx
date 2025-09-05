import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Divider,
  IconButton,
} from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#F6EEDC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "transform 0.8s ease",
          }}
        >
            <Box
  component="img"
  src="/images/004/REGALO.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#0B1D4D",
              fontWeight: "semibold",
              maxWidth: 600,
              mb: 4,
            }}
          >
         Amor no nos falta....  <br />
         Salud tampoco <br />
         Pero un poquito de dinero nunca viene mal <br/>
         Si quieren ayudarnos con el regalito, aqui la cuenta
          </Typography>

         
          <ButtonLinks
          onClick={handleOpen}
  label="Ver datos Bancarios"
  newTab
/>
        </Box>
      </Fade>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff", // más claro
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: 600,
              width: "90%", // responsive
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Ícono arriba del modal */}
            <Box
  component="img"
  src="/images/004/REGALO.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{
              fontFamily: "'Eyesome'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#0B1D4D",
              mb: 1,
            }}>
              Datos Bancarios
            </Typography>

            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "'Quicksand'",
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "#0B1D4D",
              mb: 1,
              fontWeight:600
            }}>
              Nombre del Titular: Dessimoni Debora Ines
              <br />
              Alias: leoydeby50.mp
            </Typography>

   
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gift;

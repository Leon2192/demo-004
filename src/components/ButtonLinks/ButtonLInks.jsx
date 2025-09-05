import Button from "@mui/material/Button";

export default function ButtonLinks({
  label,
  href,
  onClick,
  newTab = false,
  sx,
  bounce = true,
}) {
  const baseSx = {
    borderRadius: 999,
    px: 4,
    backgroundColor: "#0B1D4D",
    fontFamily: "'Quicksand'",
    color: "#F6F4F0",
    boxShadow: "none",
    transition: "transform .2s ease, background-color .2s ease, color .2s ease",
    ...(bounce && { animation: "bounceBtn 2s infinite" }),
    "@keyframes bounceBtn": {
      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
      "40%": { transform: "translateY(-6px)" },
      "60%": { transform: "translateY(-3px)" },
    },

    /* Hover solo mientras está el puntero encima */
    "&:hover": {
      backgroundColor: "#F6EEDC",
      color: "#274490",
      transform: "scale(1.05)",
    },

    /* Al presionar, vuelve a los colores base (y un tiny press) */
    "&:active, &:hover:active": {
      backgroundColor: "#0B1D4D",
      color: "#F6F4F0",
      transform: "scale(0.98)",
    },

    /* Evita estilos raros por focus */
    "&:focus": { outline: "none", boxShadow: "none" },
    "&:focus-visible": {
      outline: "2px solid #F6EEDC",
      outlineOffset: "2px",
    },

    /* Si es <a>, evita cambios por visited */
    "&:visited": { color: "#F6F4F0" },
  };

  const commonProps = {
    variant: "contained",
    sx: [baseSx, sx],
    disableElevation: true,
    disableRipple: true,
    onClick: (e) => {
      onClick?.(e);
      // saca el focus para que no quede el estado activo/hover pegado
      e.currentTarget.blur();
    },
    onMouseUp: (e) => e.currentTarget.blur(),
    onTouchEnd: (e) => e.currentTarget.blur(),
  };

  return href ? (
    <Button
      component="a"
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none" }}
      {...commonProps}
    >
      {label}
    </Button>
  ) : (
    <Button {...commonProps}>{label}</Button>
  );
}

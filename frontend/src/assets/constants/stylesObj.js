const styles = {
  home: {
    container: {
      flexDirection: "row",
      alignItems: "left",
      width: 180,
    },
    image: {
      width: "100%",
      objectFit: "cover",
      marginRight: "1rem",
    },
    title: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    author: {
      fontSize: "0.8125rem",
      fontWeight: 600,
    },
  },
  search: {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      margin: 3,
      justifyContent: "space-around",
    },
    image: {
      width: "10%",
      borderRadius: "5px",
    },
    title: {},
  },
};

const homeBookListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: { xs: "1rem", md: -2 },
  gap: "0.9rem",
  overflowY: "auto",
  height: "calc(100vh - 10px)",
  scrollbarWidth: "none",
  marginBottom: { xs: "2rem", md: "5rem" },
  zIndex: 0,
};

export { styles, homeBookListStyle };

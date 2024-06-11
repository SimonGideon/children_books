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

export default styles;

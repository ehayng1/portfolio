export default function TechBubble({ Techs }) {
  const textColor = "#18216d";
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {Techs.map((el) => (
        <div
          key={el}
          style={{
            backgroundColor: textColor,
            borderRadius: "25px",
            padding: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            color: "white",
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

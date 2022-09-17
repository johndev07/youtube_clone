import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../utils/constants";
import Icon from "@mui/material/Icon";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const selected = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selected && "#fc1503",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selected ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selected ? 1 : 0.8 }}>
            {category.name}
          </span>
        </button>
      ))}
      <Icon>star</Icon>
    </Stack>
  );
};

export default Sidebar;

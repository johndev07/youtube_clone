import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Video } from "./index";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchApi";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results For
        <span style={{ color: "#f31503" }}> {searchTerm}</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;

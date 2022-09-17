import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { Video, ChannelCard } from "./index";
import { fetchFromApi } from "../utils/fetchApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail);
  console.log(videos);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromApi(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(4,154,125,1) 100%)",
            zIndex: 10,
            height: "130px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-125px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "50px" } }} />
        <Video videos={videos}></Video>
      </Box>
    </Box>
  );
};

export default ChannelDetail;

import axios from "axios";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link,
} from "@mui/material";
import { Link as NavLink } from "react-router-dom";

import "./App.css";

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

export const HomePage = (props) => {


  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({ data }) => {
      setPosts(data.hits);
      setPageQty(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
      }
    });
  }, [query, page]);

  return (
    <>
      <TextField
        fullWidth
        label="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            sx={{ marginY: 3, marginX: "auto" }}
            showFirstButton
            showLastButton
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`/?page=${item.page}`}
                {...item}
              />
            )}
          />
        )}
        {posts.map((post) => (
          <Link key={post.objectID} href={post.url}>
            {post.title || post.story_title}
          </Link>
        ))}
      </Stack>
    </>
  );
};


import axios from "axios";

const BASE_URL = "https://kumanimeapi.vercel.app/api";
const NEWS_API_URL = "https://consumet-api-pink.vercel.app/news/ann";

const handleError = (error) => {
  return error.message;
};

export const getLatestAnime = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/home`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getAnimeNews = async () => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/recent-feeds`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getAnimeNewsDetail = async (id) => {
  try {
    const response = await axios.get(`${NEWS_API_URL}/info?id=${id}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getEpisodeDetails = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}/episode/${slug}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getAnimeDetails = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime/${slug}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getSearchResult = async (value) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/${value}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getCompletedAnime = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/completed/page/${page}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getOngoingAnime = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/ongoing/page/${page}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const sanitize = (text) => {
  if (text !== undefined) {
    return text
      .toString()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
};

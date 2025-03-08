import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMatch } from "../../../entities/Match/module/types";
import { RootState } from "..";

interface GetMatchesResponse {
  data: {
    matches: IMatch[];
  };
  ok: boolean;
}

interface MatchesState {
  data: GetMatchesResponse | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: MatchesState = {
  data: null,
  isLoading: false,
  error: null,
};

export const getMatches = createAsyncThunk(
  "matches/getMatches",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      );
      if (!res.ok) throw new Error("Сервер недоступен");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatches.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload ?? null;
        state.error = null
      })
      .addCase(getMatches.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectMatchesState = (state: RootState) => state.matches 
export default matchesSlice.reducer
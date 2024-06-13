import { create } from "zustand";
import api from "./api";

const useUsersList = create((set, get) => ({
  content: [],
  loading: true,
  error: null,
  addContent: (item) => {
    set({ content: [...get.content, item] });
  },
  setLoad: (status) => {
    set({ loading: false });
  },
  fetchItems: async (term) => {
    set({ loading: true });
    try {
        if (term == undefined){
            term=''
        }
      const resp = await api.get(`/?term=${term}`);
      set({ content: resp.data, error: null });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));

export {useUsersList}
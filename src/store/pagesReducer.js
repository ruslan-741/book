import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pages: [
    {
      path: '/hardware',
      heading: 'Главная',
      sections: [],
    },
    {
      path: '/bus',
      heading: 'Шина',
      sections: [],
    },
    {
      path: '/cpu',
      heading: 'Процессор',
      sections: [],
    },
  ],
};

const slice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    addSection(state, { payload }) {
      const { routePath, sectionHeading } = payload;
      const page = state.find((el) => el.path === routePath);
      page.sections.push({
        heading: sectionHeading,
        id: sectionHeading
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '_')
          .replaceAll('?', ''),
      });
    },
  },
});

export const pagesSelector = (state) => state.pages.pages;

export const { addSection } = slice.actions;
export default slice.reducer;

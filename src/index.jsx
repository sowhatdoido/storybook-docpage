import React, { useContext } from 'react';

import {
  Title,
  Subtitle,
  Description,
  DocsStory,
  Props,
  Stories,
  DocsContext,
} from '@storybook/addon-docs/blocks';


export const getDocsStories = (context) => {
  const { storyStore, selectedKind } = context;

  if (!storyStore) {
    return [];
  }

  return storyStore
    .getStoriesForKind(selectedKind)
    .filter((s) => !(s.parameters && s.parameters.docs && s.parameters.docs.disable));
};


export const Primary = ({
  expanded = true,
  withToolbar = false,
}) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);
  const story = componentStories && componentStories[0];

  return story ? <DocsStory {...story} expanded={expanded} withToolbar={withToolbar} /> : null;
};

const DocPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Props />
    <Stories title="Additional Stories" />
  </>
);

export default DocPage;

/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from 'react';

import { Page, Header, Content } from '@backstage/core-components';
import { Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

import { FailedEntities } from './FailedEntities';
import { PendingEntities } from './PendingEntities';

export const UnprocessedEntities = () => {
  const [tab, setTab] = useState('failed');
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Page themeId="tool">
      <Header title="Unprocessed Entitites" />

      <Content>
        <TabContext value={tab}>
          <TabList onChange={handleChange}>
            <Tab label="Failed" value="failed" />
            <Tab label="Pending" value="pending" />
          </TabList>
          <TabPanel value="failed">
            <FailedEntities />
          </TabPanel>
          <TabPanel value="pending">
            <PendingEntities />
          </TabPanel>
        </TabContext>
      </Content>
    </Page>
  );
};

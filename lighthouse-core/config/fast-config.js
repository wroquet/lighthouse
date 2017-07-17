/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    skipAudits: [
      // disabled for now because they are too slow
      'no-mutation-events',
      'uses-optimized-images',
      'uses-webp-images',
      'speed-index-metric',
      'screenshot-thumbnails',

      // disabled for now because their results are not meaningful/cannot be computed anymore
      'first-interactive',
      'consistently-interactive',
      'offscreen-images',
      'load-fast-enough-for-pwa',
    ],
  },
  passes: [
    {
      passName: 'defaultPass',
      useThrottling: false,
      pauseAfterLoadMs: 0,
      networkQuietThresholdMs: 500,
      cpuQuietThresholdMs: 500,
      gatherers: [],
    },
  ],
};
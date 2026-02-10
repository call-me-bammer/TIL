import * as CONST from './const.js'

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
	title: 'Today Bammer Learned',
	description: 'Github TIL Pages',
	base: "/TIL/",
	dest: 'build',
	lang: 'ko-KR',

	// Bundler
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

	// Theme
  theme: defaultTheme({
    logo: '',
		navbar: [
      { text: 'GitHub', link: 'https://github.com/call-me-bammer/' },
      { text: 'Blog', link: 'https://call-me-bammer.github.io/' }
    ],
		sidebar: [
      { text: 'MIL', children: CONST.MILList },
      { text: 'Algorithm', children: CONST.AlgorithmList },
      { text: 'Data Structure', children: CONST.DataStructureList },
      { text: 'Web', children: CONST.WebList },
      { text: 'Boolean Algebra', children: CONST.BooleanAlgebraList },
      { text: 'JavaScript', children: CONST.JavaScriptList },
      { text: 'Linux', children: CONST.LinuxList },
      { text: 'C++', children: CONST.CppList },
      { text: 'Python', children: CONST.PythonList },
      { text: 'PS', children: CONST.PSList },
      { text: 'Math', children: CONST.MathList },
    ],
  }),
})

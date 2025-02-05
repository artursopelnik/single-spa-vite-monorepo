/** this is a list of all applications micro-frontends that are accessible by the root config */
import {RegisterApplicationConfig} from "single-spa";

export default <Omit<RegisterApplicationConfig, 'app'>[]>[
  { name: "@demo/mf-home", activeWhen: "/" },
  { name: "@demo/mf-util", activeWhen: "/" },
  { name: "@demo/mf-blog", activeWhen: "/blog" },
]

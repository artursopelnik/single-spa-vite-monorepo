/** this is a list of all applications micro-frontends that are accessible by the root config */
import {RegisterApplicationConfig} from "single-spa";

export default <Omit<RegisterApplicationConfig, 'app'>[]>[
  { name: "@demo/mf-header", activeWhen: "/" },
  { name: "@demo/mf-blog", activeWhen: "/blog" },
]

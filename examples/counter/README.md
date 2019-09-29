# Counter

## ezyme 单元测试

**配置**

在初始化之前要引入 ezyme 的配置(adaptor)。默认在 src/目录下。具体配置可以参看 package.json 里的路径配置。

```js
// src/setupTests.js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```

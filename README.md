<a name="readme-top"></a>

<br />
<div align="center">
  In progress
  <h3 align="center">A vue3 exchange decimal plugin</h3>

  <p align="center">
    A plugin which inject decimal utils to global vue config
    <br />
  </p>
</div>

### Built With

* [![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

In template

``` html
  <div>{{ $money(12300).format() }}</div>
  <div>{{ $percent(0.213).format() }}</div>

  // render to
  <div>123,00</div>
  <div>21.3%</div>
  
```


In script 

``` typescript

import { useMoney, usePercentage } from 'src/composables/useDecimal'

const money = useMoney(3e-7).format()
const percentage = usePercentage(0.22).format()

```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add money plugin
- [x] Add percent plugin
- [x] Support different locale

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/

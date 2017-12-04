import * as ejs from 'ejs'
import * as jdistsUtil from 'jdists-util'

interface IEjsAttrs extends jdistsUtil.IAttrs {
  /**
   * 数据来源
   */
  data?: string
}

/**
 * ejs 模板渲染
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.data 数据项，支持 JSON 和 YAML
 * @param scope 作用域
 * @param scope.execImport 导入数据
 * @return 返回渲染后的结果
 * @example processor():base
  ```js
  let attrs = {
    data: '#name',
  }
  let scope = {
    execImport: function (importion, isYaml) {
      return {
        name: 'tom',
        age: 13,
      }
    },
  }
  console.log(processor('<b><%= name %> - <%= age %></b>', attrs, scope))
  // > <b>tom - 13</b>
  ```
 * @example processor():data is undefined
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor('<b><%= 1 + 2 %></b>', attrs, scope))
  // > <b>3</b>
  ```
 * @example processor():content is null
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor(null, attrs, scope))
  // > null
  ```
 */
export = (function (content: string, attrs: IEjsAttrs, scope: jdistsUtil.IScope): string {
  if (!content) {
    return content
  }

  let render = ejs.compile(content, {})
  let data = null
  if (attrs.data) {
    data = scope.execImport(attrs.data)
  }

  return render(data)
}) as jdistsUtil.IProcessor
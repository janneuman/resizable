#Resizable

A simple resizable react component.

### Example

```js
<Resizable
  width={400}
  height={400}
  verticalHandleClassName="handle-x"
  verticalHandleElement={<div><span>||</span></div>}
>
    <ul className="menu">
      <li>Menu item</li>
    </ul>
</Resizable>
```

### Props
* `width`- `number`
* `height`- `number`
* `minWidth`- `number`
* `minHeight`- `number`
* `axis`- `string` one of [`both`, `x`, `y`]
* `wrapperClassName`- `string`
* `verticalHandleElement`- `react element`
* `verticalHandleClassName`- `string`
* `horizontalHandleElement`- `react element`
* `horizontalHandleClassName`- `string`


### Required Props

* `width` - `number`
* `height` - `number`

### Default Props
*  `axis`: 'both'
*  `wrapperClassName`: 'resizable-wrapper'
*  `verticalHandleClassName`: 'resizable-handle-x'
*  `horizontalHandleClassName`: 'resizable-handle-y'
*  `minWidth`: 0
*  `minHeight`: 0
*  `verticalHandleElement`: null
*  `horizontalHandleElement`: null


### License

MIT

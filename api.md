<a name="ListviewIndex"></a>

## ListviewIndex
**Kind**: global class  
**See**: http://ref.smartface.io/#!/api/UI.View

This view component provides alphabetical scrollbar.  
**Since**: 1.0  

* [ListviewIndex](#ListviewIndex)
    * [new ListviewIndex(params)](#new_ListviewIndex_new)
    * [.backgroundView](#ListviewIndex+backgroundView) ⇒ <code>UI.View</code>
    * [.tintColor](#ListviewIndex+tintColor) ⇒ <code>UI.Color</code>
    * [.itemSpacing](#ListviewIndex+itemSpacing) ⇒ <code>number</code>
    * [.font](#ListviewIndex+font) ⇒ <code>UI.Font</code>
    * [.indexInset](#ListviewIndex+indexInset) ⇒ <code>object</code>
    * [.indexOffset](#ListviewIndex+indexOffset) ⇒ <code>object</code>
    * [.listviewIndexMinimumWidth](#ListviewIndex+listviewIndexMinimumWidth) ⇒ <code>number</code>
    * [.reloadData()](#ListviewIndex+reloadData)
    * [.resetFont()](#ListviewIndex+resetFont)
    * [.resetItemSpacing()](#ListviewIndex+resetItemSpacing)
    * [.resetIndexInset()](#ListviewIndex+resetIndexInset)
    * [.resetIndexOffset()](#ListviewIndex+resetIndexOffset)
    * [.resetAppearance()](#ListviewIndex+resetAppearance)
    * ["indexItems"](#ListviewIndex+event_indexItems) ⇒
    * ["indexDidSelect"](#ListviewIndex+event_indexDidSelect) ⇒

<a name="new_ListviewIndex_new"></a>

### new ListviewIndex(params)

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | init object |

**Example**  
```js
var listviewindex = new ListviewIndex();
listviewindex.width = 20;
listviewindex.indexItems = function() {
    return _headerData;
}
listviewindex.indexDidSelect = function(index) {
    myListView.scrollTo(headerIndex[index], false);
    return true; //haptic
}
listviewindex.reloadData();
page.layout.addChild(listviewindex);
```
<a name="ListviewIndex+backgroundView"></a>

### listviewIndex.backgroundView ⇒ <code>UI.View</code>
Background view is displayed below the index items.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Read only**: true  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| backgroundView | <code>UI.View</code> | 

<a name="ListviewIndex+tintColor"></a>

### listviewIndex.tintColor ⇒ <code>UI.Color</code>
Gets/sets the tintColor of the ListviewIndex. This property changes index items color.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| tintColor | <code>UI.Color</code> | 

<a name="ListviewIndex+itemSpacing"></a>

### listviewIndex.itemSpacing ⇒ <code>number</code>
Vertical spacing between the items. Equals to 1 point by default to match system appearance.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Default**: <code>1</code>  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| itemSpacing | <code>number</code> | 

<a name="ListviewIndex+font"></a>

### listviewIndex.font ⇒ <code>UI.Font</code>
Font for the index view items. If not set, uses a default font which is chosen to match system appearance.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| font | <code>UI.Font</code> | 

<a name="ListviewIndex+indexInset"></a>

### listviewIndex.indexInset ⇒ <code>object</code>
The distance that index items are inset from the enclosing background view. The property doesn't change the position of index items. Instead, it changes the size of the background view to match the inset. In other words, the background view "wraps" the content. Affects intrinsic content size.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| indexInset | <code>object</code> | 
| indexInset.top | <code>number</code> | 
| indexInset.left | <code>number</code> | 
| indexInset.bottom | <code>number</code> | 
| indexInset.right | <code>number</code> | 

<a name="ListviewIndex+indexOffset"></a>

### listviewIndex.indexOffset ⇒ <code>object</code>
The distance from the left (or right in case of right-to-left languages) border of the background view for which index items are shifted inside it. The property only affects the position of the index items and doesn't change the size of the background view.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| indexOffset | <code>object</code> | 
| indexOffset.vertical | <code>number</code> | 
| indexOffset.horizontal | <code>number</code> | 

<a name="ListviewIndex+listviewIndexMinimumWidth"></a>

### listviewIndex.listviewIndexMinimumWidth ⇒ <code>number</code>
Minimum width of the view. Equals to 44 points by default to enable easy tapping.

**Kind**: instance property of [<code>ListviewIndex</code>](#ListviewIndex)  
**Default**: <code>44</code>  
**Since**: 1.0  
**Properties**

| Name | Type |
| --- | --- |
| listviewIndexMinimumWidth | <code>number</code> | 

<a name="ListviewIndex+reloadData"></a>

### listviewIndex.reloadData()
Forces list index to reload its items. This causes list index to discard its current items and refill itself.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+resetFont"></a>

### listviewIndex.resetFont()
Resets font to default value to match the system index appearance.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+resetItemSpacing"></a>

### listviewIndex.resetItemSpacing()
Resets itemSpacing to default value to match the system index appearance.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+resetIndexInset"></a>

### listviewIndex.resetIndexInset()
Resets indexInset to default value to match the system index appearance.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+resetIndexOffset"></a>

### listviewIndex.resetIndexOffset()
Resets indexOffset to default value to match the system index appearance.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+resetAppearance"></a>

### listviewIndex.resetAppearance()
Convenience method to reset basic styling to match the system index appearance. This includes background, font, itemSpacing, indexInset and indexOffset.

**Kind**: instance method of [<code>ListviewIndex</code>](#ListviewIndex)  
**Since**: 1.0  
<a name="ListviewIndex+event_indexItems"></a>

### "indexItems" ⇒
Provides a set of items to display in the list index.The library support string images items.

**Kind**: event emitted by [<code>ListviewIndex</code>](#ListviewIndex)  
**Returns**: [string|UI.Image]  
**Since**: 1.0  
<a name="ListviewIndex+event_indexDidSelect"></a>

### "indexDidSelect" ⇒
Called as a result of recognizing an index touch. Return true to produce a haptic feedback (iPhone 7 with iOS 10 or later).

**Kind**: event emitted by [<code>ListviewIndex</code>](#ListviewIndex)  
**Returns**: [boolean]  
**Since**: 1.0  

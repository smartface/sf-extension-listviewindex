/**
 * @class ListviewIndex
 * @since 1.0
 * @see http://ref.smartface.io/#!/api/UI.View
 * 
 * This view component provides alphabetical scrollbar.
 * 
 * @example
 * var listviewindex = new ListviewIndex();
 * listviewindex.width = 20;
 * listviewindex.indexItems = function() {
 *     return _headerData;
 * }
 * listviewindex.indexDidSelect = function(index) {
 *     myListView.scrollTo(headerIndex[index], false);
 *     return true; //haptic
 * }
 * listviewindex.reloadData();
 * page.layout.addChild(listviewindex);
 * 
 **/
 const ListviewIndex = function() {};
 
/**
 * Provides a set of items to display in the list index.The library support string images items.
 * @event
 * @return [string|UI.Image]
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.indexItems = function() {};

/**
 * Called as a result of recognizing an index touch. Return true to produce a haptic feedback (iPhone 7 with iOS 10 or later).
 * @event
 * @return [boolean]
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.indexDidSelect = function() {};

/**
 * Forces list index to reload its items. This causes list index to discard its current items and refill itself.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.reloadData = function() {};

/**
 * Background view is displayed below the index items.
 * @property {UI.View} backgroundView
 * @since 1.0
 * @readonly
 * @default
 * @return {UI.View}
 */
ListviewIndex.prototype.backgroundView = undefined;

/**
 * Gets/sets the tintColor of the ListviewIndex. This property changes index items color.
 * @property {UI.Color} tintColor
 * @since 1.0
 * @default
 * @return {UI.Color}
 */
ListviewIndex.prototype.tintColor = undefined;

/**
 * Vertical spacing between the items. Equals to 1 point by default to match system appearance.
 * @property {number} itemSpacing
 * @since 1.0
 * @default
 * @return {number}
 */
ListviewIndex.prototype.itemSpacing = 1;

/**
 * Font for the index view items. If not set, uses a default font which is chosen to match system appearance.
 * @property {UI.Font} font
 * @since 1.0
 * @default
 * @return {UI.Font}
 */
ListviewIndex.prototype.font = undefined;

/**
 * The distance that index items are inset from the enclosing background view. The property doesn't change the position of index items. Instead, it changes the size of the background view to match the inset. In other words, the background view "wraps" the content. Affects intrinsic content size.
 * @property {object} indexInset
 * @property {number} indexInset.top
 * @property {number} indexInset.left
 * @property {number} indexInset.bottom
 * @property {number} indexInset.right
 * @since 1.0
 * @default
 * @return {object}
 */
ListviewIndex.prototype.indexInset = undefined;

/**
 * The distance from the left (or right in case of right-to-left languages) border of the background view for which index items are shifted inside it. The property only affects the position of the index items and doesn't change the size of the background view.
 * @property {object} indexOffset
 * @property {number} indexOffset.vertical
 * @property {number} indexOffset.horizontal
 * @since 1.0
 * @default
 * @return {object}
 */
ListviewIndex.prototype.indexOffset = undefined;

/**
 * Minimum width of the view. Equals to 44 points by default to enable easy tapping.
 * @property {number} listviewIndexMinimumWidth
 * @since 1.0
 * @default
 * @return {number}
 */
ListviewIndex.prototype.listviewIndexMinimumWidth = 44;

/**
 * Resets font to default value to match the system index appearance.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.resetFont = function() {};

/**
 * Resets itemSpacing to default value to match the system index appearance.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.resetItemSpacing = function() {};

/**
 * Resets indexInset to default value to match the system index appearance.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.resetIndexInset = function() {};

/**
 * Resets indexOffset to default value to match the system index appearance.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.resetIndexOffset = function() {};

/**
 * Convenience method to reset basic styling to match the system index appearance. This includes background, font, itemSpacing, indexInset and indexOffset.
 * @method
 * @since 1.0
 * @default
 */
ListviewIndex.prototype.resetAppearance = function() {};
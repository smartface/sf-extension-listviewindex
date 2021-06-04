/**
 * ListViewIndex utility
 * @type {object}
 * @author Berk Baski <berk.baski@smartface.io>
 * @author Furkan Arabacı <furkan.arabaci@smartface.io>
 * @copyright Smartface 2021
 */

import View from "sf-core/ui/view";
import Color from "sf-core/ui/color";
import Font from "sf-core/ui/font";

export type IndexInsetType = {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

export type IndexOffsetType = {
    vertical: number;
    horizontal: number;
}

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
 */
export default class ListViewIndex extends View {

    /**
     * Background view is displayed below the index items.
     * @property {UI.View} backgroundView
     * @since 1.0
     * @readonly
     * @default
     * @return {UI.View}
     */
    readonly backgroundView: View;

    /**
     * Gets/sets the tintColor of the ListviewIndex. This property changes index items color.
     * @property {UI.Color} tintColor
     * @since 1.0
     * @default
     * @return {UI.Color}
     */
    tintColor: Color;

    /**
     * Vertical spacing between the items. Equals to 1 point by default to match system appearance.
     * @property {number} itemSpacing
     * @since 1.0
     * @default
     * @return {number}
     */
    itemSpacing: number;

    /**
     * Font for the index view items. If not set, uses a default font which is chosen to match system appearance.
     * @property {UI.Font} font
     * @since 1.0
     * @default
     * @return {UI.Font}
     */
    font: Font;

    /**
     * The distance that index items are inset from the enclosing background view. The property doesn't change the position of index items. Instead, it changes the size of the background view to match the inset. In other words, the background view "wraps" the content. Affects intrinsic content size.
     * @property {IndexInsetType} indexInset
     * @since 1.0
     * @default
     * @return {IndexInsetType}
     */
    indexInset: IndexInsetType;

    /**
     * The distance from the left (or right in case of right-to-left languages) border of the background view for which index items are shifted inside it. The property only affects the position of the index items and doesn't change the size of the background view.
     * @property {IndexOffsetType} indexOffset
     * @since 1.0
     * @default
     * @return {IndexOffsetType}
     */
    indexOffset: IndexOffsetType;

    /**
     * Minimum width of the view. Equals to 44 points by default to enable easy tapping.
     * @property {number} listviewIndexMinimumWidth
     * @since 1.0
     * @default
     * @return {number}
     */
    listviewIndexMinimumWidth: number;

    /**
     * Provides a set of items to display in the list index.The library support string images items.
     * @event
     * @return [string|UI.Image]
     * @since 1.0
     * @default
     */
    indexItems(): void;

    /**
     * Called as a result of recognizing an index touch. Return true to produce a haptic feedback (iPhone 7 with iOS 10 or later).
     * @event
     * @return [boolean]
     * @since 1.0
     * @default
     */
    indexDidSelect(index: number): void;

    /**
     * Forces list index to reload its items. This causes list index to discard its current items and refill itself.
     * @method
     * @since 1.0
     * @default
     */
    reloadData(): void;

    /**
     * Resets font to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetFont(): void;

    /**
     * Resets itemSpacing to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetItemSpacing(): void;

    /**
     * Resets indexInset to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetIndexInset(): void;

    /**
     * Resets indexOffset to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetIndexOffset(): void;

    /**
     * Convenience method to reset basic styling to match the system index appearance. This includes background, font, itemSpacing, indexInset and indexOffset.
     * @method
     * @since 1.0
     * @default
     */
    resetAppearance(): void;
}
/**
 * ListViewIndex utility
 * @type {object}
 * @author Berk Baski <berk.baski@smartface.io>
 * @author Furkan Arabacı <furkan.arabaci@smartface.io>
 * @copyright Smartface 2021
 */


import Color from "@smartface/native/ui/color";
import Font from "@smartface/native/ui/font";
import Image from "@smartface/native/ui/image";
import View from "@smartface/native/ui/view";

export type IndexInsetType = {
    top: number;
    left: number;
    bottom: number;
    right: number;
};

export type IndexOffsetType = {
    vertical: number;
    horizontal: number;
};

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
 * listviewindex.indexDidSelect = function(index) {
 *     myListView.scrollTo(headerIndex[index], false);
 *     return true; //haptic
 * }
 * listviewindex.reloadData();
 * page.layout.addChild(listviewindex);
 */
export default class ListViewIndex extends View {
    nativeObject: any;
    private _backgroundView?: View = undefined;
    private _items: (string | Image)[] = [];

    //@ts-ignore
    constructor(args?: Partial<typeof View>) {
        //@ts-ignore
        this.nativeObject = new __SF_SMFTableViewIndex();
        /**
         * This should be done AFTER nativeObject
         * Reasons not researched.
         */
        super(args || {});
        //@ts-ignore
        this.nativeObject.indexItemsForTableViewIndex = () => {
            let returnValue = [];
            returnValue = this.items.map((value) => {
                if (typeof value !== "string") {
                    //@ts-ignore
                    return value.nativeObject;
                }
                return value;
            });
            return returnValue;
        }
        this.nativeObject.tableViewIndexDidSelect = (e: { index: number }) => {
            return this.indexDidSelect ? this.indexDidSelect(e.index) : false; //haptic
        };

    }
    /**
     * Gets/sets the callback function when clicked on an item.
     * @param {Number} index
     * @method
     * @since 1.0
     * @default
     */
    indexDidSelect: (index: number) => void = () => {};

    /**
     * Gets/sets items to display in the list index. The library support string images items.
     * @property {Array<string|UI.Image>} items
     * @since 1.0
     * @default
     */
    get items(): (string | Image)[] {
        return this._items;
    }

    set items(value: Array<string | Image>) {
        this._items = value.slice();
    }

    /**
     * Background view is displayed below the index items.
     * @property {UI.View} backgroundView
     * @since 1.0
     * @readonly
     * @default
     * @return {UI.View}
     */
    get backgroundView(): View {
        if (this._backgroundView === undefined) {
            this._backgroundView = new View();
            //@ts-ignore
            this._backgroundView.nativeObject = this.nativeObject.backgroundView;
        }
        return this._backgroundView;
    }

    /**
     * Gets/sets the tintColor of the ListviewIndex. This property changes index items color.
     * @property {UI.Color} tintColor
     * @since 1.0
     * @default
     * @return {UI.Color}
     */
    get tintColor(): Color {
        //@ts-ignore
        return new Color({ color: this.nativeObject.tintColor });
    }

    set tintColor(value: Color) {
        //@ts-ignore
        this.nativeObject.tintColor = value.nativeObject;
    }

    /**
     * Vertical spacing between the items. Equals to 1 point by default to match system appearance.
     * @property {number} itemSpacing
     * @since 1.0
     * @default
     * @return {number}
     */
    get itemSpacing(): number {
        return this.nativeObject.itemSpacing;
    }

    set itemSpacing(value: number) {
        this.nativeObject.itemSpacing = value;
    }

    /**
     * Font for the index view items. If not set, uses a default font which is chosen to match system appearance.
     * @property {UI.Font} font
     * @since 1.0
     * @default
     * @return {UI.Font}
     */
    get font(): Font {
        return this.nativeObject.font;
    }

    set font(value: Font) {
        this.nativeObject.font = value;
    }

    /**
     * The distance that index items are inset from the enclosing background view. The property doesn't change the position of index items. Instead, it changes the size of the background view to match the inset. In other words, the background view "wraps" the content. Affects intrinsic content size.
     * @property {IndexInsetType} indexInset
     * @since 1.0
     * @default
     * @return {IndexInsetType}
     */
    get indexInset(): IndexInsetType {
        return this.nativeObject.indexInsetDictionary;
    }

    set indexInset(value: IndexInsetType) {
        this.nativeObject.indexInsetDictionary = value;
    }

    /**
     * The distance from the left (or right in case of right-to-left languages) border of the background view for which index items are shifted inside it. The property only affects the position of the index items and doesn't change the size of the background view.
     * @property {IndexOffsetType} indexOffset
     * @since 1.0
     * @default
     * @return {IndexOffsetType}
     */
    get indexOffset(): IndexOffsetType {
        return this.nativeObject.indexOffsetDictionary;
    }

    set indexOffset(value: IndexOffsetType) {
        this.nativeObject.indexOffsetDictionary = value;
    }

    /**
     * Minimum width of the view. Equals to 44 points by default to enable easy tapping.
     * @property {number} listviewIndexMinimumWidth
     * @since 1.0
     * @default
     * @return {number}
     */
    get listViewIndexMinimumWidth(): number {
        return this.nativeObject.minWidth;
    }

    set listViewIndexMinimumWidth(value: number) {
        this.nativeObject.minWidth = value;
    }

    /**
     * Forces list index to reload its items. This causes list index to discard its current items and refill itself.
     * @method
     * @since 1.0
     * @default
     */
    reloadData() {
        this.nativeObject.reloadData();
    };

    /**
     * Resets font to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetFont () {
        this.nativeObject.resetFont();
    };

    /**
     * Resets itemSpacing to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetItemSpacing () {
        this.nativeObject.resetItemSpacing();
    };

    /**
     * Resets indexInset to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetIndexInset () {
        this.nativeObject.resetIndexInset();
    };

    /**
     * Resets indexOffset to default value to match the system index appearance.
     * @method
     * @since 1.0
     * @default
     */
    resetIndexOffset () {
        this.nativeObject.resetIndexOffset();
    };

    /**
     * Convenience method to reset basic styling to match the system index appearance. This includes background, font, itemSpacing, indexInset and indexOffset.
     * @method
     * @since 1.0
     * @default
     */
    resetAppearance () {
        this.nativeObject.resetAppearance();
    }
}
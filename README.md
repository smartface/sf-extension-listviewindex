# ListviewIndex Extension from Smartface
[![NPM](https://img.shields.io/npm/v/@smartface/extension-listviewindex?style=flat-square)](https://www.npmjs.com/package/@smartface/extension-listviewindex)
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/smartface/sf-extension-amce/blob/master/LICENSE)

An extension to ListviewIndex component with Smartface Native Framework.

<img src="./assets/samplelistview.gif" width="320" height="568">

## Installation
ListviewIndex Extension can be installed via npm easily from our public npm repository. Execute the command on your scripts directory:

```
yarn add @smartface/extension-listviewindex
```

## How to use
1) Create ListviewIndex object and add to your page layout as child view.
```typescript
import Page1Design from 'generated/pages/page1';
import Image from "@smartface/native/ui/image";
import Color from '@smartface/native/ui/color';
import Label from '@smartface/native/ui/label';
import FlexLayout from '@smartface/native/ui/flexlayout';
import ListView from '@smartface/native/ui/listview';
import ListViewItem from '@smartface/native/ui/listviewitem';
import Font from '@smartface/native/ui/font';
import TextAlignment from '@smartface/native/ui/textalignment';
import ListviewIndex from '@smartface/extension-listviewindex';

export default class Page1 extends Page1Design {
    router: any;
    constructor() {
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }
    initListView() {
        const _headerData = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", Image.createFromFile("images://trash.png")];

        const _rowData = [];
        for (let i = 0; i < _headerData.length; i++) {
            _rowData.push(["#ff6c8f", "#ff85a2", "#ff9fb6", "#ffb8c9", "#ffd2dc", "#ffebf0"]);
        }

        const dataArray = [];

        const headerIndex = [];

        function pushDataToArray(headerData, rowData) {
            for (let i = 0; i < headerData.length; i++) {
                dataArray.push({ isHeader: true, data: headerData[i] });
                headerIndex.push(dataArray.length - 1);
                for (let j = 0; j < rowData[i].length; j++) {
                    dataArray.push({ isHeader: false, data: rowData[i][j] });
                }
            }
        };
        pushDataToArray(_headerData, _rowData);

        const myListView = new ListView({
            flexGrow: 1,
            marginLeft: 20,
            itemCount: dataArray.length,
        });

        this.layout.addChild(myListView);

        const listviewindex = new ListviewIndex();
        listviewindex.width = 20;

        listviewindex.indexItems = function () {
            return _headerData;
        }

        listviewindex.indexDidSelect = function (index) {
            myListView.scrollTo(headerIndex[index], false);
            return true; //haptic
        }

        listviewindex.reloadData();

        this.layout.addChild(listviewindex);


        // listviewindex.backgroundView.backgroundColor = Color.GREEN;
        // listviewindex.backgroundColor = Color.BLUE;
        // listviewindex.tintColor = Color.RED;
        // listviewindex.itemSpacing = 5;
        // listviewindex.font = Font.create("TimesNewRomanPS-BoldMT", 16);
        // listviewindex.indexInset = { top: 10, left: 0, bottom: 10, right: 0 };
        // listviewindex.indexOffset = { vertical: -2, horizontal: -2 };
        // listviewindex.listviewIndexMinimumWidth = 40;

        myListView.onRowCreate = function (type) {
            const myListViewItem = new ListViewItem();

            if (type == 1) {
                const myLabelTitle = new Label({
                    flexGrow: 1,
                    margin: 10
                });
                myLabelTitle.textColor = Color.WHITE;
                myLabelTitle.borderRadius = 10;
                myLabelTitle.textAlignment = TextAlignment.MIDCENTER;
                myListViewItem.addChild(myLabelTitle);
                myListViewItem.myLabelTitle = myLabelTitle;
            }
            else { // Header
                const myLabelTitle = new Label({
                    flexGrow: 1,
                    margin: 10
                });
                myLabelTitle.font = Font.create(Font.DEFAULT, 30, Font.BOLD);
                myLabelTitle.backgroundColor = Color.WHITE;
                myListViewItem.addChild(myLabelTitle);
                myListViewItem.myLabelTitle = myLabelTitle;
            }

            return myListViewItem;
        };

        myListView.onRowHeight = function (index) {
            if (dataArray[index].isHeader) {
                return 100;
            }
            return 70;
        };

        myListView.onRowBind = function (listViewItem, index) {
            const myLabelTitle = listViewItem.myLabelTitle;

            if (dataArray[index].isHeader) {
                myLabelTitle.text = (typeof dataArray[index].data === 'string') ? dataArray[index].data : "Image";
            }
            else {
                myLabelTitle.backgroundColor = Color.create(dataArray[index].data);
                myLabelTitle.text = dataArray[index].data;
            }
        };

        myListView.onRowType = function (index) {
            if (dataArray[index].isHeader) {
                return 2;
            }
            else {
                return 1;
            }
        };

        this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(superOnShow: () => void) {
    superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(superOnLoad: () => void) {
    superOnLoad();
    this.initListView();
}
```

## API Documentation
Full api documentation is in [api.md](./api.md)

## Used Repositories
[MYTableViewIndex](https://github.com/mindz-eye/MYTableViewIndex)

## Need Help?
Please [submit an issue](https://github.com/smartface/sf-extension-listviewindex/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://docs.smartface.io)
- [API Docs](http://ref.smartface.io)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License
This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.

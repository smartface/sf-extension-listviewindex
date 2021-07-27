import Page1Design from "generated/pages/page1";
import Image from "@smartface/native/ui/image";
import Color from "@smartface/native/ui/color";
import Label from "@smartface/native/ui/label";
import FlexLayout from "@smartface/native/ui/flexlayout";
import ListView from "@smartface/native/ui/listview";
import ListViewItem from "@smartface/native/ui/listviewitem";
import Font from "@smartface/native/ui/font";
import TextAlignment from "@smartface/native/ui/textalignment";
import ListviewIndex from "@smartface/extension-listviewindex";

export default class Page1 extends Page1Design {
  router: any;
  constructor() {
    super();
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
  }
}

function onShow(superOnShow: () => void) {
  superOnShow();
}

function onLoad(superOnLoad: () => void) {
  superOnLoad();
  const _headerData = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  _headerData.push(Image.createFromFile("images://smartface.png"));

  const _rowData = [];
  for (let i = 0; i < _headerData.length; i++) {
    _rowData.push([
      "#ff6c8f",
      "#ff85a2",
      "#ff9fb6",
      "#ffb8c9",
      "#ffd2dc",
      "#ffebf0",
    ]);
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
  }
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
  };

  listviewindex.indexDidSelect = function (index) {
    myListView.scrollTo(headerIndex[index], false);
    return true; //haptic
  };

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
        margin: 10,
      });
      myLabelTitle.textColor = Color.WHITE;
      myLabelTitle.borderRadius = 10;
      myLabelTitle.textAlignment = TextAlignment.MIDCENTER;
      myListViewItem.addChild(myLabelTitle);
      myListViewItem.myLabelTitle = myLabelTitle;
    } else {
      // Header
      const myLabelTitle = new Label({
        flexGrow: 1,
        margin: 10,
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
      myLabelTitle.text =
        typeof dataArray[index].data === "string"
          ? dataArray[index].data
          : "Image";
    } else {
      myLabelTitle.backgroundColor = Color.create(dataArray[index].data);
      myLabelTitle.text = dataArray[index].data;
    }
  };

  myListView.onRowType = function (index) {
    if (dataArray[index].isHeader) {
      return 2;
    } else {
      return 1;
    }
  };
}
